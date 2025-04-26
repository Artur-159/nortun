/**
 * Creates a new div element with the specified id and appends it to the document body.
 * @param {string} wrapperId - The id to assign to the newly created div element.
 * @returns {HTMLDivElement} The newly created and appended div element.
 */

export const appendWrapperToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};
