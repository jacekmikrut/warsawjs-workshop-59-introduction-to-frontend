export function cloneTemplateContent(templateElement) {
  const elementToClone = templateElement.content.firstElementChild;
  if (!elementToClone) throw new Error('Cannot find the element to clone within the provided template.');
  return elementToClone.cloneNode(true);
}
