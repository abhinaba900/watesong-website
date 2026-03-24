# Animation & Performance Optimization Details

This exact document has been prepared for another AI or developer to understand the current state, mechanics, and recent optimizations applied to the complex UI animations on this project.

## 1. WebGL Water Ripples (`FloatingWaterImages.tsx` & `WaterRipple.tsx`)

### The Library & Mechanics
The project uses `jquery.ripples` for a refractive WebGL water ripple effect over a background texture.
- **Rendering Cost**: High. The plugin runs a fragment shader over every pixel.
- **Interactivity**: Automatic physics-based drops (`FloatingWaterImages.tsx`) and click-based drops (`WaterRipple.tsx`).

### Core Optimizations Applied
1. **Dynamic Resolution Scaling:** We explicitly reduced the internal resolution of the WebGL rendering context from `512` down to `256` on desktop, and from `256` down to `128` on mobile (via `window.innerWidth < 768`). This reduces the GPU processing threshold by 4x per frame, resulting in massive FPS gains without losing visual fidelity on most modern screens.
2. **IntersectionObserver Pausing:** Both components utilize `IntersectionObserver` to call `$el.ripples('pause')` when scrolled out of the viewport, returning resources to the browser UI thread instantly.

## 2. Physics-Based Floating Items (`FloatingWaterImages.tsx`)

### The Library & Mechanics
We utilize `matter-js` (2D Physics Engine) synced to DOM nodes (`itemRefs.current[i].style.transform` translates the `x` and `y` properties). A continuous `requestAnimationFrame` updates the engine mapping. Additionally, `framer-motion` adds an individual vertical bobbing (`y`) and gentle turning (`rotate`) effect natively to the nodes itself.

### Core Optimizations Applied
1. **Staggered WebGL Texture Drops (CRITICAL LAG FIX):**
   - Originally, the `requestAnimationFrame` loop was calling `$el.ripples('drop')` on all 12 physics bodies simultaneously on precise intervals (`frameCount % 90 === 0`).
   - Forcing WebGL to process up to 12 separate splash calculations instantaneously every 1.5 seconds caused huge frame drops.
   - **Fix:** We introduced a stagger index offset: `((frameCount + i * 7) % 90 === 0)`. Now only 1 body affects the water per frame, eliminating the bottleneck.
2. **Drift Force Scaling:** The `applyForce` coordinates pulling the items diagonally upwards and leftwards were increased to `{ x: -0.0001 * body.mass, y: -0.0001 * body.mass }` upon request, replacing the original `-0.00004` multiplier to naturally speed up the floating movement.
3. **Pool Reduction:** On mobile devices, the total spawned amount of DOM mapped nodes drops from `12` to `6` to preserve mobile battery/CPU load.

## 3. Social Media Icon Interaction (`ContactSection.tsx`)

### Mechanics
Using `framer-motion`, the 3 active social buttons (Facebook, Instagram, LinkedIn) handle a multi-staged `onMouseEnter` keyframe sequence.

### Implementations Applied
1. **Refined Keyframe Array:** Added a physical pulsing and squeezing bounce representation via `scale: [1, 1.1, 0.95, 1.05, 1]` coupled with `scaleX` and `scaleY` variants natively transitioning on `"easeInOut"`.
2. **HTML Anchor Wrapping:** Replaced local trigger elements (`motion.button`) with semantic anchor tags (`motion.a`) carrying actual URLs spanning `target="_blank"` while preserving the heavy visual transition. 

## 4. UI Layout Stability during Transitions (`FloorPlanSection.tsx`)

### Mechanics
A tab-system replaces dynamic transparent `next/image` properties which internally triggers a raw CSS `@keyframes fadeIn` loop on change.

### Layout Shift Fix
Image height variation originally collapsed the entire left panel. By switching to `h-full` and locking the container via bounded `relative h-[40vh] md:h-[50vh] lg:h-[60vh]`, the image now exclusively relies on `object-contain` scaling behaviors inside a stable framing parent. The UI no longer jiggles across the screen when selecting between dynamically sized floorplan options.
