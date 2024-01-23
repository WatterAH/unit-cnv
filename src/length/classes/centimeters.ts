export class Centimeters {
  /**
   * Converts centimeters to inches.
   * @param value Value in centimeters
   * @returns Value in inches
   * @throws {Error} If the input value is not a number
   */
  static toInches(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 2.54;
  }

  /**
   * Converts centimeters to feets.
   * @param value Value in centimeters
   * @returns Value in feets
   * @throws {Error} If the input value is not a number
   */
  static toFeet(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 30.48;
  }

  /**
   * Converts centimeters to yards.
   * @param value Value in centimeters
   * @returns Value in yards
   * @throws {Error} If the input value is not a number
   */
  static toYards(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 91.44;
  }

  /**
   * Converts centimeters to milimeters.
   * @param value Value in centimeters
   * @returns Value in milimeters
   * @throws {Error} If the input value is not a number
   */
  static toMilimeters(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 10;
  }

  static toMicrometers(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 10000;
  }

  static toNanometers(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 1e7;
  }

  /**
   * Converts centimeters to meters.
   * @param value Value in centimeters
   * @returns Value in meters
   * @throws {Error} If the input value is not a number
   */
  static toMeters(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 100;
  }
}
