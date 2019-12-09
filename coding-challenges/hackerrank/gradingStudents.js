// https://www.hackerrank.com/challenges/grading/problem

const gradingStudents = grades => {
  const roundedGrades = [];
  grades.forEach(grade => {
    if (grade >= 38) {
      if (!((grade + 1) % 5)) {
        grade += 1;
      } else if (!((grade + 2) % 5)) {
        grade += 2;
      }
    }
    roundedGrades.push(grade);
  });
  return roundedGrades;
};

console.log(gradingStudents([73, 67, 38, 33]));
