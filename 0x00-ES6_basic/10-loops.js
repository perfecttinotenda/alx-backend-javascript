/*
 * author: Tinotenda
 * ALX Backend with JavaScript
 * Task-10
 */

export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    value = appendString + value;
  }

  return array;
}
