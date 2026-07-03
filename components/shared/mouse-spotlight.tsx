"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";

export function MouseSpotlight() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <div
        className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.03] transition-transform duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,1) 0%, transparent 70%)",
          left: x,
          top: y,
        }}
      />
    </div>
  );
}
