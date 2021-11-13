export function randomInteger(min, max) {
  const integerMin = Math.ceil(min);
  const integerMax = Math.floor(max);
  return Math.floor(Math.random() * (integerMax - integerMin + 1) + integerMin);
}
