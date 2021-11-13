import { randomInteger } from './randomInteger';

describe('randomInteger', () => {
  describe('called with min=2 and max=5', () => {
    let min, max;

    beforeEach(() => {
      min = 2; max = 5;
    });

    describe.each([
      { mathRandom: 0.00000, expectedValue: 2 },
      { mathRandom: 0.24999, expectedValue: 2 },
      { mathRandom: 0.25000, expectedValue: 3 },
      { mathRandom: 0.49999, expectedValue: 3 },
      { mathRandom: 0.50000, expectedValue: 4 },
      { mathRandom: 0.74999, expectedValue: 4 },
      { mathRandom: 0.75000, expectedValue: 5 },
      { mathRandom: 0.99999, expectedValue: 5 },
    ])('when Math.random() returns $mathRandom', ({ mathRandom, expectedValue }) => {
      beforeEach(() => {
        jest.spyOn(Math, 'random').mockReturnValue(mathRandom);
      });

      afterEach(() => {
        jest.spyOn(Math, 'random').mockRestore();
      });

      it(`returns ${expectedValue}`, () => {
        expect(randomInteger(min, max)).toEqual(expectedValue);
      });
    });
  });
});
