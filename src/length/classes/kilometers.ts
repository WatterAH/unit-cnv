export class Kilometers {
  /**
   * Converts kilometers to feets.
   * @param value Value in kilometers
   * @returns Value in feets
   * @throws {Error} If the input value is not a number
   */
  static toFeets(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 3281;
  }

  /**
   * Converts kilometers to yards.
   * @param value Value in kilometers
   * @returns Value in yards
   * @throws {Error} If the input value is not a number
   */
  static toYards(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 1094;
  }

  /**
   * Converts kilometers to miles.
   * @param value Value in kilometers
   * @returns Value in miles
   * @throws {Error} If the input value is not a number
   */
  static toMiles(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 1.609;
  }

  /**
   * Converts kilometers to centimeters.
   * @param value Value in kilometers
   * @returns Value in centimeters
   * @throws {Error} If the input value is not a number
   */
  static toCentimeters(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 100000;
  }

  /**
   * Converts kilometers to meters.
   * @param value Value in kilometers
   * @returns Value in meters
   * @throws {Error} If the input value is not a number
   */
  static toMeters(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 1000;
  }

  /**
   * Converts kilometers to nautical miles.
   * @param value Value in kilometers
   * @returns Value in nautical miles
   * @throws {Error} If the input value is not a number
   */
  static toNauticalMiles(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 1.852;
  }
}
