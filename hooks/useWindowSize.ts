import { useEffect, useState } from "react";

/**
 * Returns a boolean indicating whether the window's inner width is
 * less than or equal to the given threshold. The value is updated
 * whenever the window is resized.
 *
 * @param {number} [threshold=1024] The width threshold value.
 * @returns {boolean} Whether the window's inner width is less than
 * or equal to the given threshold.
 */

export const useWindowSize = (threshold: number = 1024): boolean => {
  const [size, setSize] = useState(false);

  useEffect(() => {
    const onResize = () => setSize(window.innerWidth <= threshold);

    window.addEventListener("resize", onResize);
    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, [threshold]);

  return size;
};
