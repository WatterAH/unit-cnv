import converter from '../src/index';

const Kilograms = converter.Mass.Kilograms;

describe('Conversor', () => {
  it('works', () => {
    expect(Kilograms.toGrams(1)).toEqual(1000);
  });
});
