export class Feets {
  /**
   * Converts feets to inches.
   * @param value Value in feets
   * @returns Value in inches
   * @throws {Error} If the input value is not a number
   */
  static toInches(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 12;
  }

  /**
   * Converts feets to yards.
   * @param value Value in feets
   * @returns Value in yards
   * @throws {Error} If the input value is not a number
   */
  static toYards(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 3;
  }

  /**
   * Converts feets to miles.
   * @param value Value in feets
   * @returns Value in miles
   * @throws {Error} If the input value is not a number
   */
  static toMiles(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 5280;
  }

  /**
   * Converts feets to milimeters.
   * @param value Value in feets
   * @returns Value in milimeters
   * @throws {Error} If the input value is not a number
   */
  static toMilimeters(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 304.8;
  }

  /**
   * Converts feets to centimeters.
   * @param value Value in feets
   * @returns Value in centimeters
   * @throws {Error} If the input value is not a number
   */
  static toCentimeters(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 30.48;
  }

  /**
   * Converts feets to meters.
   * @param value Value in feets
   * @returns Value in meters
   * @throws {Error} If the input value is not a number
   */
  static toMeters(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 3.281;
  }

  /**
   * Converts feets to kilometers.
   * @param value Value in feets
   * @returns Value in kilometers
   * @throws {Error} If the input value is not a number
   */
  static toKilometers(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 3281;
  }
}
