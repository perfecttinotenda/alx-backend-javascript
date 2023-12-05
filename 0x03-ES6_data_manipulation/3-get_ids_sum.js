/* 
    Task: 3-get_ids_sum.js
    Author: Tinotenda
 */

function getStudentIdsSum(studentList) {
  return studentList.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
