export class Ounces {
  /**
   * Converts ounces to kilograms.
   * @param value Value in ounces
   * @returns Value in kilograms
   * @throws {Error} If the input value is not a number
   */
  static toKilograms(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 35.274;
  }

  /**
   * Converts ounces to grams.
   * @param value Value in ounces
   * @returns Value in grams
   * @throws {Error} If the input value is not a number
   */
  static toGrams(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 28.35;
  }

  /**
   * Converts ounces to pounds.
   * @param value Value in ounces
   * @returns Value in pounds
   * @throws {Error} If the input value is not a number
   */
  static toPounds(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 16;
  }
}
