export class Minutes {
  /**
   * Convert minutes to miliseconds.
   * @param value - Value in minutes
   * @returns Value in miliseconds
   * @throws {Error} If the input value is not a number
   */
  static toMiliseconds(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 60000;
  }

  /**
   * Convert minutes to seconds.
   * @param value Value in minutes
   * @returns Value in seconds
   * @throws {Error} If the input value is not a number
   */
  static toSeconds(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 60;
  }

  /**
   * Convert minutes to hours.
   * @param value Value in minutes
   * @returns Value in hours
   * @throws {Error} If the input value is not a number
   */
  static toHours(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 60;
  }

  /**
   * Convert minutes to days.
   * @param value Value in minutes
   * @returns Value in days
   * @throws {Error} If the input value is not a number
   */
  static toDays(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 1440;
  }

  /**
   * Convert minutes to weeks.
   * @param value Value in minutes
   * @returns Value in weeks
   * @throws {Error} If the input value is not a number
   */
  static toWeeks(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 10080;
  }
}
