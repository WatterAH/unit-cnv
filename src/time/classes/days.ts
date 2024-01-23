export class Days {
  /**
   * Converts days to seconds.
   * @param value Value in days
   * @returns Value in seconds
   * @throws {Error} If the input value is not a number
   */
  static toSeconds(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 86400;
  }

  /**
   * Converts days to minutes.
   * @param value Value in days
   * @returns Value in minutes
   * @throws {Error} If the input value is not a number
   */
  static toMinutes(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 1440;
  }

  /**
   * Converts days to hours.
   * @param value Value in days
   * @returns Value in hours
   * @throws {Error} If the input value is not a number
   */
  static toHours(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 24;
  }

  /**
   * Converts days to weeks.
   * @param value Value in days
   * @returns Value in weeks
   * @throws {Error} If the input value is not a number
   */
  static toWeeks(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 7;
  }

  /**
   * Converts days to months.
   * This function assumes an average month length of 30.417 days. Actual month lengths may vary.
   * @param value Value in days
   * @returns Value in months
   * @throws {Error} If the input value is not a number
   */
  static toMonths(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 30.417;
  }

  /**
   * Converts days to years.
   * @param value Value in days
   * @returns Value in years
   * @throws {Error} If the input value is not a number
   */
  static toYears(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 365;
  }

  /**
   * Converts days to decades.
   * @param value Value in days
   * @returns Value in decades
   * @throws {Error} If the input value is not a number
   */
  static toDecades(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value / 3650;
  }
}
