/*
 * author: Tinotenda
 * ALX Backend with JavaScript
 * Task-11
 */

export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {
    [departmentName]: [...employees],
  };

  return employeesObject;
}
