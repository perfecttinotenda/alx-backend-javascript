/*
 * author: Tinotenda
 * ALX Backend with JavaScript
 * Task-12
 */

export default function createReportObject(employeesList) {
  const departmentNames = Object.keys(employeesList);

  const allEmployees = {
    ...departmentNames.reduce((acc, department) => {
      acc[department] = [...employeesList[department]];
      return acc;
    }, {}),
  };

  return {
    allEmployees,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
