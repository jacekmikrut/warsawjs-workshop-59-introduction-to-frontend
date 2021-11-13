import { sample } from 'src/utils';

export function shuffle(array) {
  return sample(array, array.length);
}
