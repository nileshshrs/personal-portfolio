"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export function Spotlight() {
  const { x, y } = useMousePosition();

  return (
    <>
      {/* Main spotlight effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: `radial-gradient(circle 400px at ${x}px ${y}px, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.15) 30%, transparent 80%)`,
          transition: "background 0.1s ease-out",
        }}
      />

      {/* Additional glow layer */}
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: `radial-gradient(circle 600px at ${x}px ${y}px, rgba(59, 130, 246, 0.05) 0%, transparent 70%)`,
          transition: "background 0.1s ease-out",
        }}
      />

      {/* Dark vignette for contrast */}
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          boxShadow: `inset 0 0 200px 100px rgba(15, 23, 42, 0.4)`,
        }}
      />
    </>
  );
}
