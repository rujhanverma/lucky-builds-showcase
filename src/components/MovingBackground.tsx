import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  hue: number;
}

const PARTICLE_COUNT = 80;
const CONNECTION_DIST = 140;
const MOUSE_RADIUS = 180;

const MovingBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const scrollRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const animIdRef = useRef<number>(0);

  const initParticles = useCallback((w: number, h: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() > 0.5 ? 172 : 200,
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setSize();
    particlesRef.current = initParticles(window.innerWidth, window.innerHeight);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    const handleResize = () => {
      setSize();
      particlesRef.current = initParticles(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    let time = 0;

    const animate = () => {
      time += 0.005;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const scroll = scrollRef.current;
      const mouse = mouseRef.current;

      ctx.clearRect(0, 0, w, h);

      // Soft gradient blobs in background (parallax with scroll)
      const drawBlob = (bx: number, by: number, r: number, color: string) => {
        const parallaxY = by - scroll * 0.05;
        const grad = ctx.createRadialGradient(bx, parallaxY, 0, bx, parallaxY, r);
        grad.addColorStop(0, color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(bx, parallaxY, r, 0, Math.PI * 2);
        ctx.fill();
      };

      drawBlob(
        w * 0.15 + Math.sin(time * 0.8) * w * 0.06,
        h * 0.25 + Math.cos(time * 0.6) * h * 0.05,
        w * 0.3,
        "hsla(172, 50%, 70%, 0.08)"
      );
      drawBlob(
        w * 0.8 + Math.cos(time * 0.5) * w * 0.05,
        h * 0.6 + Math.sin(time * 0.7) * h * 0.04,
        w * 0.25,
        "hsla(200, 40%, 75%, 0.06)"
      );
      drawBlob(
        w * 0.5 + Math.sin(time * 0.9) * w * 0.08,
        h * 0.8 + Math.cos(time * 1.1) * h * 0.03,
        w * 0.28,
        "hsla(40, 30%, 80%, 0.06)"
      );

      // Particles
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // Mouse interaction — gentle push away
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          p.x += (dx / dist) * force * 2;
          p.y += (dy / dist) * force * 2;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 50%, 55%, ${p.opacity})`;
        ctx.fill();

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cdist < CONNECTION_DIST) {
            const alpha = (1 - cdist / CONNECTION_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(172, 40%, 55%, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animIdRef.current);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default MovingBackground;
