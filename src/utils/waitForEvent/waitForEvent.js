export async function waitForEvent(element, eventType) {
  return new Promise(resolve => {
    element.addEventListener(eventType, resolve, { once: true });
  });
}
