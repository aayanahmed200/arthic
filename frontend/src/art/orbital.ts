/**
 * Generative artwork for the Orbital feature section.
 *
 * Not a stock image and not a decorative gradient blob — the moving
 * point actually follows Kepler's equation for an eccentric ellipse, so
 * it visibly speeds up near periapsis and drifts slowly near apoapsis,
 * the way an orbiting body actually would. It's meant to read as the
 * object Orbital's facility spends the game trying to understand — a
 * real orbit, not a canned animation loop. Everything else (star field,
 * orbit line, glow) is drawn in plain Canvas 2D with a fixed seed, so
 * the composition is deterministic rather than a different, possibly-
 * unbalanced layout on every load.
 */

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

// mulberry32 — tiny deterministic PRNG so the star field is the same
// considered composition on every load, not a random one.
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function solveEccentricAnomaly(meanAnomaly: number, eccentricity: number): number {
  let E = meanAnomaly;
  for (let i = 0; i < 6; i++) {
    E -= (E - eccentricity * Math.sin(E) - meanAnomaly) / (1 - eccentricity * Math.cos(E));
  }
  return E;
}

export function initOrbitalArt(): void {
  const containerMaybe = document.querySelector<HTMLElement>("[data-reveal-art]");
  const canvasMaybe = document.querySelector<HTMLCanvasElement>("[data-orbital-canvas]");
  if (!containerMaybe || !canvasMaybe) return;
  const container: HTMLElement = containerMaybe;
  const canvas: HTMLCanvasElement = canvasMaybe;

  const ctxMaybe = canvas.getContext("2d");
  if (!ctxMaybe) return;
  const ctx: CanvasRenderingContext2D = ctxMaybe;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rand = mulberry32(1917);

  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let stars: Star[] = [];
  let running = false;
  let rafId = 0;
  let startTime = 0;
  let pointer = { x: 0, y: 0 };
  let pointerTarget = { x: 0, y: 0 };

  const ORBIT_PERIOD_S = 64; // one slow, contemplative loop
  const ECCENTRICITY = 0.62;
  const TILT = -0.21; // radians

  function buildStars() {
    const count = Math.round((width * height) / 9000);
    stars = Array.from({ length: Math.max(40, Math.min(count, 140)) }, () => ({
      x: rand() * width,
      y: rand() * height,
      r: rand() * 1.2 + 0.3,
      baseAlpha: rand() * 0.5 + 0.15,
      twinkleSpeed: rand() * 0.6 + 0.15,
      twinklePhase: rand() * Math.PI * 2,
    }));
  }

  function resize() {
    const rect = container.getBoundingClientRect();
    width = Math.max(1, Math.round(rect.width));
    height = Math.max(1, Math.round(rect.height));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildStars();
  }

  function orbitFocus() {
    // Focal point (the "star") sits toward the upper-right, keeping the
    // lower-left clear for the section's text content.
    return { x: width * 0.7, y: height * 0.36 };
  }

  function orbitScale() {
    return Math.min(width, height) * 0.62;
  }

  function draw(elapsedMs: number) {
    ctx.clearRect(0, 0, width, height);

    // base
    ctx.fillStyle = "#050504";
    ctx.fillRect(0, 0, width, height);

    // stars
    const t = elapsedMs / 1000;
    for (const s of stars) {
      const twinkle = prefersReduced ? 0 : Math.sin(t * s.twinkleSpeed + s.twinklePhase) * 0.35;
      ctx.beginPath();
      ctx.fillStyle = `rgba(243, 241, 234, ${Math.max(0, s.baseAlpha + twinkle)})`;
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    pointer.x += (pointerTarget.x - pointer.x) * 0.06;
    pointer.y += (pointerTarget.y - pointer.y) * 0.06;

    const focus = orbitFocus();
    const scale = orbitScale();
    const cos = Math.cos(TILT);
    const sin = Math.sin(TILT);
    const originX = focus.x + pointer.x;
    const originY = focus.y + pointer.y;

    const project = (ox: number, oy: number) => ({
      x: originX + (ox * cos - oy * sin),
      y: originY + (ox * sin + oy * cos),
    });

    const b = scale * Math.sqrt(1 - ECCENTRICITY * ECCENTRICITY);

    // orbit path
    ctx.beginPath();
    for (let i = 0; i <= 120; i++) {
      const E = (i / 120) * Math.PI * 2;
      const ox = scale * (Math.cos(E) - ECCENTRICITY);
      const oy = b * Math.sin(E);
      const p = project(ox, oy);
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
    ctx.strokeStyle = "rgba(243, 241, 234, 0.13)";
    ctx.lineWidth = 1;
    ctx.stroke();

    // central glow (the focus — where gravity actually lives)
    const glowR = scale * 0.42;
    const glow = ctx.createRadialGradient(originX, originY, 0, originX, originY, glowR);
    glow.addColorStop(0, "rgba(243, 241, 234, 0.95)");
    glow.addColorStop(0.25, "rgba(243, 241, 234, 0.28)");
    glow.addColorStop(1, "rgba(243, 241, 234, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(originX, originY, glowR, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#f3f1ea";
    ctx.arc(originX, originY, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // orbiting body — Kepler's equation, not a lerp around a circle
    const meanAnomaly = prefersReduced
      ? 0.55 // frozen near periapsis: the orbit's closest, most active point
      : ((t / ORBIT_PERIOD_S) % 1) * Math.PI * 2;
    const E = solveEccentricAnomaly(meanAnomaly, ECCENTRICITY);
    const bodyOrbitX = scale * (Math.cos(E) - ECCENTRICITY);
    const bodyOrbitY = b * Math.sin(E);
    const body = project(bodyOrbitX, bodyOrbitY);

    const bodyGlowR = scale * 0.1;
    const bodyGlow = ctx.createRadialGradient(body.x, body.y, 0, body.x, body.y, bodyGlowR);
    bodyGlow.addColorStop(0, "rgba(243, 241, 234, 0.9)");
    bodyGlow.addColorStop(1, "rgba(243, 241, 234, 0)");
    ctx.fillStyle = bodyGlow;
    ctx.beginPath();
    ctx.arc(body.x, body.y, bodyGlowR, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#f3f1ea";
    ctx.arc(body.x, body.y, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  function frame(now: number) {
    if (!startTime) startTime = now;
    draw(now - startTime);
    if (running) rafId = requestAnimationFrame(frame);
  }

  function start() {
    if (running) return;
    running = true;
    rafId = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(rafId);
  }

  resize();
  draw(0);

  if (!prefersReduced) {
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) start();
            else stop();
          }
        },
        { threshold: 0.05 },
      );
      io.observe(container);
    } else {
      start();
    }

    container.addEventListener("pointermove", (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const rect = container.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      pointerTarget = { x: relX * 24, y: relY * 24 };
    });

    container.addEventListener("pointerleave", () => {
      pointerTarget = { x: 0, y: 0 };
    });
  }

  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      resize();
      draw(running ? performance.now() - startTime : 0);
    }, 150);
  });
}
