import { Kilograms } from '../src/index';

describe('Conversor', () => {
  it('works', () => {
    expect(Kilograms.toGrams(1)).toEqual(1000);
  });
});
