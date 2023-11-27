/*
 * author: Tinotenda
 * ALX Backend with JavaScript
 * Task-100
 */

export default function createIteratorObject(report) {
  function* employeeIterator() {
    for (const department in report.allEmployees) {
      for (const employee of report.allEmployees[department]) {
        yield employee;
      }
    }
  }

  return {
    [Symbol.iterator]: employeeIterator,
  };
}
