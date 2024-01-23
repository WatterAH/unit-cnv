export class Miles {
  /**
   * Converts miles to feets.
   * @param value Value in miles
   * @returns Value in feets
   * @throws {Error} If the input value is not a number
   */
  static toFeets(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 5280;
  }

  /**
   * Converts miles to yards.
   * @param value Value in miles
   * @returns Value in yards
   * @throws {Error} If the input value is not a number
   */
  static toYards(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 1760;
  }

  /**
   * Converts miles to meters.
   * @param value Value in miles
   * @returns Value in meters
   * @throws {Error} If the input value is not a number
   */
  static toMeters(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 1609;
  }

  /**
   * Converts miles to kilometers.
   * @param value Value in miles
   * @returns Value in kilometers
   * @throws {Error} If the input value is not a number
   */
  static toKilometers(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 1.609;
  }

  /**
   * Converts miles to nautical miles.
   * @param value Value in miles
   * @returns Value in nautical miles
   * @throws {Error} If the input value is not a number
   */
  static toNauticalMiles(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 1.151;
  }
}
