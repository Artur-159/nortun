/**
 * Returns a price string formatted with commas for thousands separators.
 * Example: 1234567 -> '1.234.567'
 * @param {number} price
 * @returns {string | null}
 */
export const formatPrice = (price: number): string | null => {
  return price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ".") || null;
};
