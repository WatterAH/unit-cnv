export class Kelvin {
  /**
   * Convert degrees Kelvin to Celsius.
   * @param value Value in Kelvin
   * @returns Value in Celsius
   * @throws {Error} If the input value is not a number
   */
  static toCelsius(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value - 273.15;
  }

  /**
   * Convert degrees Kelvin to Fahrenheit.
   * @param value Value in Kelvin
   * @returns Value in Fahrenheit
   * @throws {Error} If the input value is not a number
   */
  static toFahrenheit(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return ((value - 273.15) * 9) / 5 + 32;
  }

  /**
   * Convert degrees Kelvin to Rankine.
   * @param value Value in Kelvin
   * @returns Value in Rankine
   * @throws {Error} If the input value is not a number
   */
  static toRankine(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value * 1.8;
  }
}
