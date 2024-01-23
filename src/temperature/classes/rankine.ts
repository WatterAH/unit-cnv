export class Rankine {
  /**
   * Convert degrees Rankine to Celsius.
   * @param value Value in Rankine
   * @returns Value in Celsius
   * @throws {Error} If the input value is not a number
   */
  static toCelsius(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return ((value - 491.67) * 5) / 9;
  }

  /**
   * Convert degrees Rankine to Fahrenheit.
   * @param value Value in Rankine
   * @returns Value in Fahrenheit
   * @throws {Error} If the input value is not a number
   */
  static toFahrenheit(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value - 459.67;
  }

  /**
   * Convert degrees Rankine to Kelvin.
   * @param value Value in Rankine
   * @returns Value in Kelvin
   * @throws {Error} If the input value is not a number
   */
  static toKelvin(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return (value * 5) / 9;
  }
}
