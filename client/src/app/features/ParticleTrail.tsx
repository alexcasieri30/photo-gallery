"use client";

import { useEffect, useRef } from "react";

const ParticleTrail = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const colors = [
      "bg-red-400",
      "bg-orange-400",
      "bg-yellow-400",
      "bg-green-400",
      "bg-blue-400",
      "bg-indigo-400",
      "bg-purple-400",
      "bg-pink-400",
    ];

    const shapes = ["rounded-full", "", "rotate-45", "clip-star"];

    const throttleMs = 20; // adjust this higher (e.g. 100) for fewer particles

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastSpawnRef.current < throttleMs) return;
      lastSpawnRef.current = now;

      const dot = document.createElement("div");

      const color = colors[Math.floor(Math.random() * colors.length)];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];

      dot.className = `pointer-events-none absolute w-8 h-8 ${color} ${shape} opacity-80 z-50 transition duration-300 ease-out`;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      dot.style.transform = "translate(-50%, -50%)";

      container.appendChild(dot);

      setTimeout(() => {
        dot.style.opacity = "0";
        dot.style.transform += " scale(0.5)";
      }, 10);

      setTimeout(() => {
        container.removeChild(dot);
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-40 pointer-events-none" />;
};

export default ParticleTrail;
