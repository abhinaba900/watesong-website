"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import Matter from "matter-js";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface FloatingItemData {
  id: string;
  src: string;
  title?: React.ReactNode;
  subtitle?: string;
}

interface FloatingImageProps {
  items: FloatingItemData[];
  backgroundImage?: string; // Optional: Pass your BG image URL here
}

interface PoolItemData extends FloatingItemData {
  uniqueId: string;
  isTextItem: boolean;
  bobDuration: number;
  rotDuration: number;
}

export default function FloatingWaterImages({
  items = [],
  backgroundImage = "/your-water-bg.jpg", // Ensure this path is correct
}: FloatingImageProps) {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const engineRef = useRef<Matter.Engine | null>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const multipliedPool = useMemo(() => {
    if (!items.length) return [];
    
    // Reduce pool size on mobile to save CPU/GPU
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const TARGET_POOL_SIZE = isMobile ? 6 : 12;
    
    const pool: PoolItemData[] = [];

    const textItems = items.filter((item) => item.title || item.subtitle);
    const decoItems = items.filter((item) => !item.title && !item.subtitle);

    const createItem = (
      item: any,
      id: string,
      isText: boolean,
    ): PoolItemData => ({
      ...item,
      uniqueId: id,
      isTextItem: isText,
      bobDuration: 3 + Math.random() * 2,
      rotDuration: 4 + Math.random() * 3,
    });

    textItems.forEach((item) =>
      pool.push(createItem(item, `${item.id}-text`, true)),
    );

    if (decoItems.length > 0) {
      const remaining = TARGET_POOL_SIZE - pool.length;
      for (let i = 0; i < remaining; i++) {
        const deco = decoItems[i % decoItems.length];
        pool.push(createItem(deco, `${deco.id}-clone-${i}`, false));
      }
    }
    return pool.sort(() => Math.random() - 0.5);
  }, [items]);

  useEffect(() => {
    if (!isMounted || multipliedPool.length === 0 || !containerRef.current)
      return;

    let $el: any;

    const initScene = async () => {
      const { default: $ } = await import("jquery");
      (window as any).jQuery = $;
      await import("jquery.ripples");

      $el = $(containerRef.current!);

      // Detect mobile and scale resolution
      const isMobile = window.innerWidth < 768;
      const resolution = isMobile ? 256 : 512;

      // Initialize ripples using the image for refraction
      $el.ripples({
        resolution,
        dropRadius: 20,
        perturbance: 0.04,
        interactive: true,
        imageUrl: backgroundImage, // The plugin uses this for the WebGL texture
      });

      const engine = Matter.Engine.create({ gravity: { x: 0, y: 0 } });
      engineRef.current = engine;

      const bodies = multipliedPool.map((item) => {
        const radius = item.isTextItem ? 100 : 60;
        return Matter.Bodies.circle(
          window.innerWidth + Math.random() * 300,
          window.innerHeight + Math.random() * 300,
          radius,
          { frictionAir: 0.1, restitution: 0.5, density: 0.001 },
        );
      });

      Matter.Composite.add(engine.world, bodies);

      let frameCount = 0;
      const tick = () => {
        Matter.Engine.update(engine, 1000 / 60);
        frameCount++;

        bodies.forEach((body, i) => {
          Matter.Body.applyForce(body, body.position, {
            x: -0.00004 * body.mass,
            y: -0.00004 * body.mass,
          });

          if (body.position.x < -250 || body.position.y < -250) {
            Matter.Body.setPosition(body, {
              x: window.innerWidth + 200,
              y: window.innerHeight + 200,
            });
          }

          if (itemRefs.current[i]) {
            itemRefs.current[i]!.style.transform =
              `translate3d(${body.position.x}px, ${body.position.y}px, 0) translate3d(-50%, -50%, 0)`;
          }

          // Ripples trigger from the physics bodies
          if (frameCount % 15 === 0 && Math.abs(body.velocity.x) > 0.1) {
            $el.ripples("drop", body.position.x, body.position.y, 15, 0.03);
          }
        });

        requestRef.current = requestAnimationFrame(tick);
      };

      tick();
    };

    initScene();

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if ($el && typeof $el.ripples === "function") $el.ripples("destroy");
      if (engineRef.current) Matter.Engine.clear(engineRef.current);
    };
  }, [isMounted, multipliedPool, backgroundImage]);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 w-full h-full overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <AnimatePresence>
        {multipliedPool.map((item, index) => (
          <div
            key={item.uniqueId}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="absolute top-0 left-0 flex flex-col items-center justify-center z-20 pointer-events-none will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: ["-4%", "4%"],
                rotate: [-2, 2],
              }}
              transition={{
                opacity: { duration: 1 },
                y: {
                  duration: item.bobDuration,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
                rotate: {
                  duration: item.rotDuration,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
              className="flex flex-col items-center"
            >
              <Image
                src={item.src}
                alt={item.id}
                width={400}
                height={400}
                className={`object-contain drop-shadow-2xl ${
                  item.isTextItem
                    ? "w-[35vw] md:w-[20vw]"
                    : "w-[15vw] md:w-[8vw]"
                }`}
                priority
              />

              {item.isTextItem && (
                <div className="mt-4 text-center text-white select-none">
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-tighter drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm opacity-70 font-light">
                    {item.subtitle}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
