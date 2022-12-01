let grades = {
  midterm: { grade: 3.3, weight: 1 },
  project: { grade: 4.0, weight: 1 },
  final: { grade: 3.2, weight: 2 },
};


function gpa(someGrades) {
  // write your code here
  //   console.log(someGrades);
  let gradesToWeight = Object.keys(someGrades); // output: ["midterm", "project", "final"]
  // console.log("grades to weight", gradesToWeight);

    let gradeSum = 0;
  let weightSum = 0;

  gradesToWeight.forEach((key) => {
    // console.log("key", key);

    // console.log("Grade Value", someGrades[key].grade);
      gradeSum = gradeSum + someGrades[key].grade * someGrades[key].weight;
      weightSum = weightSum + someGrades[key].weight;
// TODO: add a weightSum total
    console.log(someGrades[key].weight);
  });

    console.log(gradeSum);
    console.log(weightSum);

    let weightedGrade = gradeSum / weightSum;
    // console.log(average);
    return weightedGrade;
//   GPA Average is  gradeSum/ weightSum
// TODO: Why is it undefined what do we need to do to our function?
}

console.log("The final GPA is " + gpa(grades));
// console.log("The final GPA is " + gpa(grades2));

// should print: 'The final GPA is 3.425'