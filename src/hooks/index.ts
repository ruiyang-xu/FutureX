import { useState, useEffect, useCallback } from "react";

export function useIsMoile(width = 1080) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth > 1080 ? false : true
  );

  const onResize = useCallback(() => {
    setIsMobile(window.innerWidth > 1080 ? false : true);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
}
