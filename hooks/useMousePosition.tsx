import { MousePosition } from "@/components/interfaces/useMousePosition";
import { useState, useEffect } from "react";

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    globalThis.addEventListener("mousemove", handleMouseMove);

    return () => {
      globalThis.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}
