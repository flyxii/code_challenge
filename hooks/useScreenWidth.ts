import { useEffect, useState } from "react";

const getScreenWidth = () => {
  if (typeof window === "undefined") {
    return 0;
  }

  return window.innerWidth;
};

export function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState<number>(getScreenWidth());

  useEffect(() => {
    const handler = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return { screenWidth } as const;
}
