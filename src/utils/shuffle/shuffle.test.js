import { shuffle } from './shuffle';

describe('shuffle', () => {

  describe('for a 4-item array', () => {
    let array;

    beforeEach(() => {
      array = ['a', 'b', 'c', 'd'];
    });

    it('does not alter the original array', () => {
      shuffle(array);
      expect(array).toEqual(['a', 'b', 'c', 'd']);
    });

    describe('returns a value that', () => {
      let returnedValue;

      beforeEach(() => {
        returnedValue = shuffle(array);
      });

      it('is an array', () => {
        expect(returnedValue).toBeInstanceOf(Array);
      });

      it('has 4 items', () => {
        expect(returnedValue).toHaveLength(4);
      });

      it('contains all of the 4 original items', () => {
        expect(returnedValue).toContainEqual('a');
        expect(returnedValue).toContainEqual('b');
        expect(returnedValue).toContainEqual('c');
        expect(returnedValue).toContainEqual('d');
      });
    });
  });
});
