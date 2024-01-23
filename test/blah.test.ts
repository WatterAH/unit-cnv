import { Mass } from '../src/index';
const Kilograms = Mass.Kilograms;

describe('Conversor', () => {
  it('works', () => {
    expect(Kilograms.toGrams(1)).toEqual(1000);
  });
});
