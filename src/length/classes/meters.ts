export class Meters {
  /**
   * Converts meters to inches.
   * @param value Value in meters
   * @returns Value in inches
   * @throws {Error} If the input value is not a number
   */
  static toInches(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 39.37;
  }

  /**
   * Converts meters to feets.
   * @param value Value in meters
   * @returns Value in feets
   * @throws {Error} If the input value is not a number
   */
  static toFeets(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 3.281;
  }

  /**
   * Converts meters to yards.
   * @param value Value in meters
   * @returns Value in yards
   * @throws {Error} If the input value is not a number
   */
  static toYards(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 1.094;
  }

  /**
   * Converts meters to miles.
   * @param value Value in meters
   * @returns Value in miles
   * @throws {Error} If the input value is not a number
   */
  static toMiles(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 1609;
  }

  /**
   * Converts meters to milimeters.
   * @param value Value in meters
   * @returns Value in milimeters
   * @throws {Error} If the input value is not a number
   */
  static toMilimeters(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 1000;
  }

  /**
   * Converts meters to centimeters.
   * @param value Value in meters
   * @returns Value in centimeters
   * @throws {Error} If the input value is not a number
   */
  static toCentimeters(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 100;
  }

  /**
   * Converts meters to kilometers.
   * @param value Value in meters
   * @returns Value in kilometers
   * @throws {Error} If the input value is not a number
   */
  static toKilometers(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 1000;
  }

  /**
   * Converts meters to nautical miles.
   * @param value Value in meters
   * @returns Value in nautical miles
   * @throws {Error} If the input value is not a number
   */
  static toNauticalMiles(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 1852;
  }
}
