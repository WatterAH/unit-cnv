export class Celsius {
  /**
   * Convert degrees Celsius to Fahrenheit.
   * @param value Value in Celsius
   * @returns Value in Fahrenheit
   * @throws {Error} If the input value is not a number
   */
  static toFahrenheit(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return (value * 9) / 5 + 32;
  }

  /**
   * Convert degrees Celsius to Kelvin.
   * @param value Value in Celsius
   * @returns Value in Kelvin
   * @throws {Error} If the input value is not a number
   */
  static toKelvin(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value + 273.15;
  }

  /**
   * Convert degrees Celsius to Rankine.
   * @param value Value in Celsius
   * @returns Value in Rankine
   * @throws {Error} If the input value is not a number
   */
  static toRankine(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return (value * 9) / 5 + 491.67;
  }
}
