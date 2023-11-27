/*
 * author: Tinotenda
 * ALX Backend with JavaScript
 * Task-101
 */

export default function iterateThroughObject(reportWithIterator) {
  const employeesArray = [...reportWithIterator];

  const resultString = employeesArray.join(" | ");

  return resultString;
}
