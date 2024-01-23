export class Inches {
  /**
   * Converts inches to feets.
   * @param value Value in inches
   * @returns Value in feets
   * @throws {Error} If the input value is not a number
   */
  static toFeets(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 12;
  }

  /**
   * Converts inches to yards.
   * @param value Value in inches
   * @returns Value in yards
   * @throws {Error} If the input value is not a number
   */
  static toYards(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 36;
  }

  /**
   * Converts inches to milimeters.
   * @param value Value in inches
   * @returns Value in milimeters
   * @throws {Error} If the input value is not a number
   */
  static toMilimeters(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 25.4;
  }

  /**
   * Converts inches to centimeters.
   * @param value Value in inches
   * @returns Value in centimeters
   * @throws {Error} If the input value is not a number
   */
  static toCentimeters(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 2.54;
  }

  /**
   * Converts inches to meters.
   * @param value Value in inches
   * @returns Value in meters
   * @throws {Error} If the input value is not a number
   */
  static toMeters(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 39.37;
  }
}
