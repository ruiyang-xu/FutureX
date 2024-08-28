import { useState, useEffect, useCallback } from "react";

export function useIsMoile(width = 1080) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth > 1080 ? false : true
  );
  var html_ = document.getElementsByTagName("html")[0];
  if (window.innerWidth < 1080) {
    document.body.style.fontSize = "10px";
  } else {
    document.body.style.fontSize = "16px";
  }

  const setRem = () => {
    let size = (16 * window.innerWidth) / 1080;
    html_.style.fontSize = size + "px";
  };
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
