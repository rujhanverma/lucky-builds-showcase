import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  hue: number;
}

const PARTICLE_COUNT = 90;
const CONNECTION_DIST = 130;
const MOUSE_RADIUS = 200;

const MovingBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const scrollRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const animIdRef = useRef<number>(0);

  const initParticles = useCallback((w: number, h: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const hueOptions = [270, 320, 185, 25];
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.5 + 0.15,
        hue: hueOptions[Math.floor(Math.random() * hueOptions.length)],
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
      time += 0.004;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const scroll = scrollRef.current;
      const mouse = mouseRef.current;

      ctx.clearRect(0, 0, w, h);

      // Ambient gradient blobs
      const drawBlob = (bx: number, by: number, r: number, color: string) => {
        const parallaxY = by - scroll * 0.04;
        const grad = ctx.createRadialGradient(bx, parallaxY, 0, bx, parallaxY, r);
        grad.addColorStop(0, color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(bx, parallaxY, r, 0, Math.PI * 2);
        ctx.fill();
      };

      drawBlob(
        w * 0.1 + Math.sin(time * 0.7) * w * 0.06,
        h * 0.2 + Math.cos(time * 0.5) * h * 0.05,
        w * 0.35,
        "hsla(270, 80%, 50%, 0.06)"
      );
      drawBlob(
        w * 0.85 + Math.cos(time * 0.4) * w * 0.05,
        h * 0.5 + Math.sin(time * 0.6) * h * 0.04,
        w * 0.3,
        "hsla(320, 70%, 50%, 0.05)"
      );
      drawBlob(
        w * 0.5 + Math.sin(time * 0.8) * w * 0.07,
        h * 0.85 + Math.cos(time * 1.0) * h * 0.03,
        w * 0.28,
        "hsla(185, 80%, 45%, 0.04)"
      );

      // Particles
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          p.x += (dx / dist) * force * 2.5;
          p.y += (dy / dist) * force * 2.5;
        }

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, ${p.opacity})`;
        ctx.shadowColor = `hsla(${p.hue}, 80%, 60%, 0.4)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cdist < CONNECTION_DIST) {
            const alpha = (1 - cdist / CONNECTION_DIST) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(270, 60%, 60%, ${alpha})`;
            ctx.lineWidth = 0.5;
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
