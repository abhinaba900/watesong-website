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
  const vantaRef = useRef<HTMLDivElement>(null);

  // NEW: A dedicated layer just for our realistic water wakes
  const rippleLayerRef = useRef<HTMLDivElement>(null);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const engineRef = useRef<Matter.Engine | null>(null);
  const requestRef = useRef<number | null>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  // 1. Hydration Safety
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 2. Initialize Vanta.js
  useEffect(() => {
    if (!isMounted || !vantaRef.current || vantaEffect) return;

    let effect: any;

    const initVanta = async () => {
      const THREE = await import("three");
      // @ts-ignore
      const WAVES = (await import("vanta/dist/vanta.waves.min")).default;

      effect = WAVES({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x52797e,
        shininess: 25.0,
        waveHeight: 12.0,
        waveSpeed: 0.6,
        zoom: 0.85,
      });

      setVantaEffect(effect);
    };

    initVanta();

    return () => {
      if (effect) effect.destroy();
    };
  }, [isMounted, vantaEffect]);

  // 3. Prepare Data Pool
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

    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool;
  }, [items]);

  // 4. Initialize Matter.js Physics & Ripple Generation
  useEffect(() => {
    if (!isMounted || multipliedPool.length === 0 || !containerRef.current)
      return;

    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 0, scale: 0 },
      positionIterations: 3,
      velocityIterations: 3,
    });
    engineRef.current = engine;

    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    const handleResize = () => {
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const bodies = multipliedPool.map((item) => {
      const radiusVW = item.isTextItem ? 13 : 7;
      const radiusPx = (viewportWidth * radiusVW) / 100;

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

    let frameCount = 0;

    const tick = () => {
      Matter.Engine.update(engine, 1000 / 60);
      frameCount++;

      bodies.forEach((body, i) => {
        const driftForce = { x: -0.00004 * body.mass, y: -0.00004 * body.mass };
        Matter.Body.applyForce(body, body.position, driftForce);

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

        if (body.position.x < -400 || body.position.y < -400) {
          Matter.Body.setPosition(body, {
            x: viewportWidth + Math.random() * 400,
            y: viewportHeight + Math.random() * 400,
          });
          Matter.Body.setVelocity(body, { x: 0, y: 0 });
        }

        if (itemRefs.current[i]) {
          itemRefs.current[i]!.style.transform = `
            translate3d(${body.position.x}px, ${body.position.y}px, 0) 
            rotate(${body.angle}rad) 
            translate3d(-50%, -50%, 0)
          `;
        }

        // --- NEW: REALISTIC WATER TRAIL GENERATION ---
        // Every ~15 frames, if the item is moving, leave a ripple behind
        if (frameCount % 15 === 0 && rippleLayerRef.current) {
          if (
            Math.abs(body.velocity.x) > 0.1 ||
            Math.abs(body.velocity.y) > 0.1
          ) {
            // Bypass React for raw performance: Create a DOM element
            const ripple = document.createElement("div");
            ripple.className = "realistic-water-wake";

            // Size the ripple based on the physics body
            const size = (body as any).circleRadius * 1.5 || 100;
            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;
            ripple.style.left = `${body.position.x}px`;
            ripple.style.top = `${body.position.y}px`;

            // Drop it onto the screen
            rippleLayerRef.current.appendChild(ripple);

            // Clean it up exactly when the CSS animation finishes (3 seconds)
            setTimeout(() => {
              if (ripple.parentNode) ripple.remove();
            }, 3000);
          }
        }
        // ---------------------------------------------
      });

      requestRef.current = requestAnimationFrame(tick);
    };

    requestRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", handleResize);
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
      {/* --- CSS FOR THE REALISTIC RIPPLES --- */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes expandWake {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
            border-width: 3px;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
            border-width: 0px;
          }
        }
        .realistic-water-wake {
          position: absolute;
          border-radius: 50%;
          border: solid rgba(255, 255, 255, 0.4);
          /* The magic happens here: Refracting the background and creating water highlights */
          box-shadow: 
            inset 0 4px 10px rgba(255, 255, 255, 0.5), 
            inset 0 -4px 10px rgba(0, 0, 0, 0.1),
            0 4px 15px rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px) contrast(1.1) brightness(1.1);
          -webkit-backdrop-filter: blur(4px) contrast(1.1) brightness(1.1);
          animation: expandWake 3s cubic-bezier(0.1, 0.4, 0.3, 1) forwards;
          pointer-events: none;
          z-index: 10;
        }
      `,
        }}
      />

      {/* 1. REAL 3D FLOWING WATER BACKGROUND (Vanta) */}
      <div
        ref={vantaRef}
        className="absolute inset-0 z-0 opacity-80 mix-blend-color-dodge pointer-events-none"
      />

      {/* 2. THE WAKE LAYER (Sits behind the items, rendering the realistic trails) */}
      <div
        ref={rippleLayerRef}
        className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
      />

      {/* 3. FLOATING ITEMS */}
      {multipliedPool.map((item, index) => (
        <div
          key={item.uniqueId}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          className="absolute top-0 left-0 flex flex-col items-center justify-center z-20"
        >
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
            <Image
              src={item.src}
              alt={
                typeof item.title === "string" ? item.title : "Floating graphic"
              }
              width={500}
              height={500}
              className={`object-contain pointer-events-none select-none drop-shadow-lg relative z-10 ${
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
