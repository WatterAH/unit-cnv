export class Seconds {
  /**
   * Convert seconds to miliseconds.
   * @param value Value in seconds
   * @returns Value in miliseconds
   * @throws {Error} If the input value is not a number
   */
  static toMiliseconds(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 1000;
  }

  /**
   * Convert seconds to minutes.
   * @param value Value in seconds
   * @returns Value in minutes
   * @throws {Error} If the input value is not a number
   */
  static toMinutes(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 60;
  }

  /**
   * Convert seconds to hours.
   * @param value Value in seconds
   * @returns Value in hours
   * @throws {Error} If the input value is not a number
   */
  static toHours(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 3600;
  }

  /**
   * Convert seconds to days.
   * @param value Value in seconds
   * @returns Value in days
   * @throws {Error} If the input value is not a number
   */
  static toDays(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 86400;
  }
}
