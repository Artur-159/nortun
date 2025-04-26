/**
 * Renders and displays text based on the specified conditions.
 *
 * @param {string} text - The text to be displayed.
 * @param {boolean} isFullTextShown - Flag to determine if the full text should be shown.
 * @param {number} [start=0] - The starting index for substring extraction.
 * @param {number} [end=600] - The ending index for substring extraction.
 * @returns {string} The displayed text based on the conditions.
 */
export const displayText = (
  text: string,
  isFullTextShown: boolean,
  start: number = 0,
  end: number = 600
): string => {
  return isFullTextShown ? text : `${text.substring(start, end)}...`;
};
