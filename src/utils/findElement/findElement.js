export function findElement(container, selector) {
  const element = container.querySelector(selector);
  if (!element) throw new Error(`Cannot find "${selector}" element.`);
  return element;
}
