export class Yards {
  /**
   * Converts yards to inches.
   * @param value Value in yards
   * @returns Value in inches
   * @throws {Error} If the input value is not a number
   */
  static toInches(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 36;
  }

  /**
   * Converts yards to feets.
   * @param value Value in yards
   * @returns Value in feets
   * @throws {Error} If the input value is not a number
   */
  static toFeets(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 3;
  }

  /**
   * Converts yards to miles.
   * @param value Value in yards
   * @returns Value in miles
   * @throws {Error} If the input value is not a number
   */
  static toMiles(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 1760;
  }

  /**
   * Converts yards to micrometers.
   * @param value Value in yards
   * @returns Value in micrometers
   * @throws {Error} If the input value is not a number
   */
  static toMicrometers(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 914.4;
  }

  /**
   * Converts yards to centimeters.
   * @param value Value in yards
   * @returns Value in centimeters
   * @throws {Error} If the input value is not a number
   */
  static toCentimeters(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 91.44;
  }

  /**
   * Converts yards to meters.
   * @param value Value in yards
   * @returns Value in meters
   * @throws {Error} If the input value is not a number
   */
  static toMeters(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 1.094;
  }

  /**
   * Converts yards to kilometers.
   * @param value Value in yards
   * @returns Value in kilometers
   * @throws {Error} If the input value is not a number
   */
  static toKilometers(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 1094;
  }

  /**
   * Converts yards to nautical miles.
   * @param value Value in yards
   * @returns Value in nautical miles
   * @throws {Error} If the input value is not a number
   */
  static toNauticalMiles(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 2025;
  }
}
