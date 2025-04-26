import { useState, useEffect } from "react";

/**
 * Custom hook to debounce a value or function.
 * @template T - The type of the input value.
 * @param {T} inputValue - The value to debounce.
 * @param {number} delay - The delay in milliseconds for debouncing.
 * @returns {T} - The debounced value.
 */

const useDebounce = <T>(inputValue: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(inputValue), delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue, delay]);

  return debouncedValue;
};

export default useDebounce;
