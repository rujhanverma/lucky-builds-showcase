import { useEffect, useRef } from "react";

const MovingBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    const drawBlob = (
      x: number,
      y: number,
      radius: number,
      color: string
    ) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      time += 0.002;
      resize();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const h = canvas.height;
      const w = canvas.width;

      // Soft teal blobs
      drawBlob(
        w * 0.2 + Math.sin(time * 1.2) * w * 0.08,
        h * 0.15 + Math.cos(time * 0.8) * h * 0.04,
        w * 0.32,
        "hsla(172, 50%, 70%, 0.10)"
      );

      drawBlob(
        w * 0.75 + Math.cos(time * 0.9) * w * 0.06,
        h * 0.35 + Math.sin(time * 1.1) * h * 0.03,
        w * 0.28,
        "hsla(200, 40%, 75%, 0.08)"
      );

      drawBlob(
        w * 0.5 + Math.sin(time * 0.7) * w * 0.1,
        h * 0.6 + Math.cos(time * 1.3) * h * 0.05,
        w * 0.35,
        "hsla(172, 45%, 65%, 0.07)"
      );

      drawBlob(
        w * 0.85 + Math.cos(time * 1.5) * w * 0.07,
        h * 0.8 + Math.sin(time * 0.6) * h * 0.04,
        w * 0.25,
        "hsla(40, 30%, 80%, 0.08)"
      );

      drawBlob(
        w * 0.15 + Math.sin(time * 1.0) * w * 0.05,
        h * 0.85 + Math.cos(time * 0.9) * h * 0.03,
        w * 0.3,
        "hsla(190, 35%, 72%, 0.06)"
      );

      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default MovingBackground;
