export class Pounds {
  /**
   * Converts pounds to tons.
   * @param value Value in pounds
   * @returns Value in tons
   * @throws {Error} If the input value is not a number
   */
  static toTons(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 2205;
  }

  /**
   * Converts pounds to short tons.
   * @param value Value in pounds
   * @returns Value in short tons
   * @throws {Error} If the input value is not a number
   */
  static toShortTons(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 2000;
  }

  /**
   * Converts pounds to long tons.
   * @param value Value in pounds
   * @returns Value in long tons
   * @throws {Error} If the input value is not a number
   */
  static toLongTons(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 2240;
  }

  /**
   * Converts pounds to kilograms.
   * @param value Value in pounds
   * @returns Value in kilograms
   * @throws {Error} If the input value is not a number
   */
  static toKilograms(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 2.205;
  }

  /**
   * Converts pounds to grams.
   * @param value Value in pounds
   * @returns Value in grams
   * @throws {Error} If the input value is not a number
   */
  static toGrams(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 453.6;
  }

  /**
   * Converts pounds to ounces.
   * @param value Value in pounds
   * @returns Value in ounces
   * @throws {Error} If the input value is not a number
   */
  static toOunces(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 16;
  }
}
