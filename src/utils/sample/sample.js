import { randomInteger } from 'src/utils';

export function sample(array, size) {
  if (size < 0 || array.length < size) throw new RangeError('The size must be within 0 and array.length range (inclusive)');

  const copiedArray = [...array];

  for (let i = 0; i < size; i++) {
    const j = randomInteger(i, copiedArray.length - 1);
    [copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
  }

  return copiedArray.slice(0, size);
}
