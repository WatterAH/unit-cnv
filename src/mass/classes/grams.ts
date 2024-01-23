export class Grams {
  /**
   * Converts grams to kilograms.
   * @param value Value in grams
   * @returns Value in kilograms
   * @throws {Error} If the input value is not a number
   */
  static toKilograms(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 1000;
  }

  /**
   * Converts grams to miligrams.
   * @param value Value in grams
   * @returns Value in miligrams
   * @throws {Error} If the input value is not a number
   */
  static toMiligrams(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 1000;
  }

  /**
   * Converts grams to pounds.
   * @param value Value in grams
   * @returns Value in pounds
   * @throws {Error} If the input value is not a number
   */
  static toPounds(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 453.6;
  }

  /**
   * Converts grams to ounces.
   * @param value Value in grams
   * @returns Value in ounces
   * @throws {Error} If the input value is not a number
   */
  static toOunces(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 28.35;
  }
}
