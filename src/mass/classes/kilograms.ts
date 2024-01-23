export class Kilograms {
  /**
   * Converts kilograms to tons.
   * @param value Value in kilograms
   * @returns Value in tons
   * @throws {Error} If the input value is not a number
   */
  static toTons(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 1000;
  }

  /**
   * Converts kilograms to short tons.
   * @param value Value in kilograms
   * @returns Value in short tons
   * @throws {Error} If the input value is not a number
   */
  static toShortTons(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 907.2;
  }

  /**
   * Converts kilograms to long tons.
   * @param value Value in kilograms
   * @returns Value in long tons
   * @throws {Error} If the input value is not a number
   */
  static toLongTons(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 1016;
  }

  /**
   * Converts kilograms to grams.
   * @param value Value in kilograms
   * @returns Value in grams
   * @throws {Error} If the input value is not a number
   */
  static toGrams(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 1000;
  }

  /**
   * Converts kilograms to pounds.
   * @param value Value in kilograms
   * @returns Value in pounds
   * @throws {Error} If the input value is not a number
   */
  static toPounds(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 2.205;
  }

  /**
   * Converts kilograms to ounces.
   * @param value Value in kilograms
   * @returns Value in ounces
   * @throws {Error} If the input value is not a number
   */
  static toOunces(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 35.274;
  }
}
