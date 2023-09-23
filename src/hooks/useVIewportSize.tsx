import { useState, useEffect } from "react";

export default function useViewportSize() {
  const [viewportSize, setViewportSize] = useState<{
    width: null | number;
    height: null | number;
  }>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function handleResize() {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    }

    if (typeof window !== "undefined") {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewportSize;
}
