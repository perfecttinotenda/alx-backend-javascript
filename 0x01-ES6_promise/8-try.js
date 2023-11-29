/*
 * author: Tinotenda
 * ALX Backend with JavaScript
 * 0x01-ES6_promise
 * Task-8
 */

export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("cannot divide by 0");
  }
  return numerator / denominator;
}
