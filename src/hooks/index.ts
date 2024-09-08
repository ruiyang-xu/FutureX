import { useState, useEffect, useCallback } from "react";

export function useIsMoile(width = 1080) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth > 1080 ? false : true
  );
  const setRem = () => {
    let size = (16 * window.innerWidth) / 1080;
    html_.style.fontSize = size + "px";
  };

  var html_ = document.getElementsByTagName("html")[0];
  if (window.innerWidth < 1080) {
    setRem()
  } else {
    html_.style.fontSize = "16px";
  }

  const onResize = useCallback(() => {
    setIsMobile(window.innerWidth > 1080 ? false : true);
    if (window.innerWidth < 1080) {
      setRem();
    } else {
      html_.style.fontSize = "16px";
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
}
