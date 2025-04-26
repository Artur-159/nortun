import { useEffect, RefObject } from "react";

/**
 * Custom hook to handle clicks outside a referenced element.
 * @param ref - A React ref object pointing to the element to monitor.
 * @param callback - A function to call when a click outside the element occurs.
 */

const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
  callback: () => void
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
