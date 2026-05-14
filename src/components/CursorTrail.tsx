"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [hovering, setHovering] = useState(false);

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  const ringX = useSpring(rawX, { damping: 22, stiffness: 420, mass: 0.6 });
  const ringY = useSpring(rawY, { damping: 22, stiffness: 420, mass: 0.6 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    interface Dot {
      x: number;
      y: number;
      age: number;
      maxAge: number;
    }

    const trail: Dot[] = [];
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      trail.push({ x: e.clientX, y: e.clientY, age: 0, maxAge: 22 });
    };

    const onEnterInteractive = () => setHovering(true);
    const onLeaveInteractive = () => setHovering(false);

    const interactiveEls = () =>
      document.querySelectorAll<HTMLElement>("a, button, [role='button']");

    const attachInteractive = () => {
      interactiveEls().forEach((el) => {
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
    };
    attachInteractive();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = trail.length - 1; i >= 0; i--) {
        const d = trail[i];
        const t = 1 - d.age / d.maxAge;
        if (t <= 0) { trail.splice(i, 1); continue; }

        const r = 4 * t;
        const alpha = t * 0.55;
        const grd = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, r * 3);
        grd.addColorStop(0, `rgba(201,169,97,${alpha})`);
        grd.addColorStop(0.5, `rgba(201,169,97,${alpha * 0.3})`);
        grd.addColorStop(1, `rgba(201,169,97,0)`);

        ctx.beginPath();
        ctx.arc(d.x, d.y, r * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        d.age += 0.65;
      }

      raf = requestAnimationFrame(draw);
    };

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
      interactiveEls().forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, [rawX, rawY]);

  if (isTouch) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9999, mixBlendMode: "screen" }}
      />

      {/* Outer ring — spring-lagged */}
      <motion.div
        className="fixed pointer-events-none rounded-full border border-[#C9A961]/50"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 9999,
        }}
        animate={{
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          borderColor: hovering
            ? "rgba(201,169,97,0.8)"
            : "rgba(201,169,97,0.5)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      {/* Center dot — exact position */}
      <motion.div
        className="fixed pointer-events-none rounded-full bg-[#C9A961]"
        style={{
          x: rawX,
          y: rawY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 10000,
        }}
        animate={{ scale: hovering ? 0 : 1, opacity: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        initial={{ width: 5, height: 5 }}
      />
    </>
  );
}
