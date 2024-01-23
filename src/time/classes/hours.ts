export class Hours {
  /**
   * Converts hours in miliseconds.
   * @param value Value in hours
   * @returns Value in miliseconds
   * @throws {Error} If the input value is not a number
   */
  static toMiliseconds(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 3.6e6;
  }

  /**
   * Converts hours in seconds.
   * @param value Value in hours
   * @returns Value in seconds
   * @throws {Error} If the input value is not a number
   */
  static toSeconds(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 3600;
  }

  /**
   * Converts hours in minutes.
   * @param value Value in hours
   * @returns Value in minutes
   * @throws {Error} If the input value is not a number
   */
  static toMinutes(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 60;
  }

  /**
   * Converts hours in weeks.
   * @param value Value in hours
   * @returns Value in weeks
   * @throws {Error} If the input value is not a number
   */
  static toWeeks(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 168;
  }
}
