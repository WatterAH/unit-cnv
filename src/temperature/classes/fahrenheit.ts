export class Fahrenheit {
  /**
   * Convert degrees Fahrenheit to Celsius.
   * @param value Value in Fahrenheit
   * @returns Value in Celsius
   * @throws {Error} If the input value is not a number
   */
  static toCelsius(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return ((value - 32) * 5) / 9;
  }

  /**
   * Convert degrees Fahrenheit to Kelvin.
   * @param value Value in Fahrenheit
   * @returns Value in Kelvin
   * @throws {Error} If the input value is not a number
   */
  static toKelvin(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return this.toCelsius(value) + 273.15;
  }

  /**
   * Convert degrees Fahrenheit to Rankine.
   * @param value Value in Fahrenheit
   * @returns Value in Rankine
   * @throws {Error} If the input value is not a number
   */
  static toRankine(value: number): number {
    if (typeof value !== "number") {
      throw new Error(`A number was expected, a ${typeof value} was received`);
    }
    return value + 459.67;
  }
}
