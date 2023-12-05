/*
    Task: 4-update_grade_by_city.js
    Author: Tinotenda
*/

function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find(
        (grade) => grade.studentId === student.id
      );

      if (gradeObject) {
        return { ...student, grade: gradeObject.grade };
      } else {
        return { ...student, grade: 'N/A' };
      }
    });
}
