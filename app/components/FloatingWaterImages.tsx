"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import Matter from "matter-js";
import { motion } from "framer-motion";
import Image from "next/image";

interface FloatingItemData {
  id: string;
  src: string;
  title?: React.ReactNode;
  subtitle?: string;
}

interface FloatingImageProps {
  items: FloatingItemData[];
}

interface PoolItemData extends FloatingItemData {
  uniqueId: string;
  isTextItem: boolean;
  bobDuration: number;
  rotDuration: number;
}

export default function FloatingWaterImages({
  items = [],
}: FloatingImageProps) {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const engineRef = useRef<Matter.Engine | null>(null);
  const requestRef = useRef<number | null>(null);

  // 1. Hydration Safety: Only render physics/randomness on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 2. Prepare the data pool with pre-calculated Framer Motion randoms
  const multipliedPool = useMemo(() => {
    if (!items.length) return [];
    const TARGET_POOL_SIZE = 15;
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
      // Randomize bobbing/swaying so they don't look robotic
      bobDuration: 3 + Math.random() * 2.5,
      rotDuration: 4 + Math.random() * 3,
    });

    textItems.forEach((item) => {
      pool.push(createItem(item, `${item.id}-singleton`, true));
    });

    if (decoItems.length > 0) {
      const remainingSlots = TARGET_POOL_SIZE - pool.length;
      for (let i = 0; i < remainingSlots; i++) {
        const decoItem = decoItems[i % decoItems.length];
        pool.push(createItem(decoItem, `${decoItem.id}-clone-${i}`, false));
      }
    }

    // Shuffle array
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool;
  }, [items]);

  // 3. Initialize Matter.js Physics Engine
  useEffect(() => {
    if (!isMounted || multipliedPool.length === 0 || !containerRef.current)
      return;

    // Create engine with even lower iterations for ultra-spongy, smooth collisions
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 0, scale: 0 },
      positionIterations: 3,
      velocityIterations: 3,
    });
    engineRef.current = engine;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const bodies = multipliedPool.map((item) => {
      // Physical bumper sizing
      const radiusVW = item.isTextItem ? 13 : 7;
      const radiusPx = (viewportWidth * radiusVW) / 100;

      // Spawn slightly off-screen bottom-right
      const startX = viewportWidth + Math.random() * 500;
      const startY = viewportHeight + Math.random() * 500;

      return Matter.Bodies.circle(startX, startY, radiusPx, {
        restitution: 0,
        frictionAir: 0.12,
        friction: 0,
        density: item.isTextItem ? 0.001 : 0.0008,
        slop: 1.5,
      });
    });

    Matter.Composite.add(engine.world, bodies);

    // Physics Animation Loop
    const tick = () => {
      Matter.Engine.update(engine, 1000 / 60);

      bodies.forEach((body, i) => {
        // Continuous diagonal drift force
        const driftForce = { x: -0.00004 * body.mass, y: -0.00004 * body.mass };
        Matter.Body.applyForce(body, body.position, driftForce);

        // Very strict speed limit for a lazy, floating feel
        const maxVelocity = 0.5;
        if (body.velocity.x < -maxVelocity)
          Matter.Body.setVelocity(body, {
            x: -maxVelocity,
            y: body.velocity.y,
          });
        if (body.velocity.y < -maxVelocity)
          Matter.Body.setVelocity(body, {
            x: body.velocity.x,
            y: -maxVelocity,
          });

        // Screen wrap (Top-Left to Bottom-Right)
        if (body.position.x < -400 || body.position.y < -400) {
          Matter.Body.setPosition(body, {
            x: viewportWidth + Math.random() * 400,
            y: viewportHeight + Math.random() * 400,
          });
          Matter.Body.setVelocity(body, { x: 0, y: 0 });
        }

        // OPTIMIZATION: Using translate3d offloads to GPU safely without will-change memory leaks
        if (itemRefs.current[i]) {
          itemRefs.current[i]!.style.transform = `
            translate3d(${body.position.x}px, ${body.position.y}px, 0) 
            rotate(${body.angle}rad) 
            translate3d(-50%, -50%, 0)
          `;
        }
      });

      requestRef.current = requestAnimationFrame(tick);
    };

    requestRef.current = requestAnimationFrame(tick);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      Matter.Engine.clear(engine);
    };
  }, [isMounted, multipliedPool]);

  if (!isMounted || multipliedPool.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none"
    >
      {multipliedPool.map((item, index) => (
        <div
          key={item.uniqueId}
          // Matter.js controls this outer div's position and rotation
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          // OPTIMIZATION: Removed will-change-transform
          className="absolute top-0 left-0 flex flex-col items-center justify-center"
        >
          {/* Framer Motion controls this inner div's bobbing, swaying, and fade-in */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: ["-4%", "4%"],
              rotate: [-3, 3],
            }}
            transition={{
              opacity: { duration: 1.5, ease: "easeOut" },
              scale: { duration: 1.5, type: "spring", bounce: 0.4 },
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
            {/* OPTIMIZATION: Next.js Image with reduced shadow intensity */}
            <Image
              src={item.src}
              alt={
                typeof item.title === "string" ? item.title : "Floating graphic"
              }
              width={500}
              height={500}
              className={`object-contain pointer-events-none select-none drop-shadow-lg ${
                item.isTextItem
                  ? "w-[45vw] sm:w-[35vw] md:w-[25vw] lg:w-[18vw]"
                  : "w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[8vw]"
              }`}
              style={{ opacity: 0.9, height: "auto" }}
            />

            {item.isTextItem && (
              <div className="absolute top-[100%] w-[60vw] md:w-[30vw] lg:w-[20vw] pt-[1vh] text-center text-white pointer-events-none select-none">
                {item.title && (
                  <p className="text-[4vw] md:text-[1.8vw] lg:text-[1vw] tracking-widest uppercase font-medium mb-[0.5vh] drop-shadow-md">
                    {item.title}
                  </p>
                )}
                {item.subtitle && (
                  <p className="text-[3.5vw] md:text-[1.5vw] lg:text-[0.85vw] font-light text-white/90 drop-shadow-md">
                    {item.subtitle}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
