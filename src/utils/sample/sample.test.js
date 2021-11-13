import { sample } from './sample';

describe('sample', () => {
  let array, size;

  describe('for a 3-item array', () => {
    beforeEach(() => {
      array = ['a', 'b', 'c'];
    });

    describe('called with size=-1', () => {
      beforeEach(() => {
        size = -1;
      });

      it('does not alter the original array', () => {
        try { sample(array, size) } catch {} // eslint-disable-line no-empty
        expect(array).toEqual(['a', 'b', 'c']);
      });

      it('throws an error', () => {
        expect(() => sample(array, size)).toThrowError(new RangeError('The size must be within 0 and array.length range (inclusive)'));
      });
    });

    describe('called with size=0', () => {
      beforeEach(() => {
        size = 0;
      });

      it('does not alter the original array', () => {
        sample(array, size);
        expect(array).toEqual(['a', 'b', 'c']);
      });

      describe('returns a value that', () => {
        let returnedValue;

        beforeEach(() => {
          returnedValue = sample(array, size);
        });

        it('is an array', () => {
          expect(returnedValue).toBeInstanceOf(Array);
        });

        it('is empty', () => {
          expect(returnedValue).toHaveLength(0);
        });
      });
    });

    describe('called with size=2', () => {
      beforeEach(() => {
        size = 2;
      });

      it('does not alter the original array', () => {
        sample(array, size);
        expect(array).toEqual(['a', 'b', 'c']);
      });

      describe('returns a value that', () => {
        let returnedValue;

        beforeEach(() => {
          returnedValue = sample(array, size);
        });

        it('is an array', () => {
          expect(returnedValue).toBeInstanceOf(Array);
        });

        it('has 2 items', () => {
          expect(returnedValue).toHaveLength(2);
        });

        it('contains 2 out of the 3 original items', () => {
          expect([['a', 'b'], ['a', 'c'], ['b', 'c']]).toContainEqual(returnedValue.sort());
        });
      });
    });

    describe('called with size=3', () => {
      beforeEach(() => {
        size = 3;
      });

      it('does not alter the original array', () => {
        sample(array, size);
        expect(array).toEqual(['a', 'b', 'c']);
      });

      describe('returns a value that', () => {
        let returnedValue;

        beforeEach(() => {
          returnedValue = sample(array, size);
        });

        it('is an array', () => {
          expect(returnedValue).toBeInstanceOf(Array);
        });

        it('has 3 items', () => {
          expect(returnedValue).toHaveLength(3);
        });

        it('contains all of the 3 original items', () => {
          expect(returnedValue).toContainEqual('a');
          expect(returnedValue).toContainEqual('b');
          expect(returnedValue).toContainEqual('c');
        });
      });
    });

    describe('called with size=4', () => {
      beforeEach(() => {
        size = 4;
      });

      it('does not alter the original array', () => {
        try { sample(array, size) } catch {} // eslint-disable-line no-empty
        expect(array).toEqual(['a', 'b', 'c']);
      });

      it('throws an error', () => {
        expect(() => sample(array, size)).toThrowError(new RangeError('The size must be within 0 and array.length range (inclusive)'));
      });
    });
  });
});
