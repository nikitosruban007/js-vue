// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i <= 10; i+=2) {
//     console.log(i);
// }

// for (let i = 20; i >= 0; i--) {
//     console.log(i);
// }

// let count = 0;
//
// for (let i = 20; i >= 0; i--) {
//     count += i;
//     console.log(i);
// }
//
// console.log(count);

// let sum = 0;
//
// for (let i = 0; i <= 50; i++) {
//     if (i%2===0){
//         sum += i;
//     }
// }
// console.log(sum);

//______________________________________________#1

// for (let i = 1; i<=100; i++){
//     if (i%3===0 && i%5===0){
//         console.log(i);
//     }
// }


//______________________________________________


// for (let i = 1; i<=100; i++){
//     if (i%4===0 && i%6===0 && i > 25){
//         console.log(i);
//         break;
//     }
// }

// for (let i = 1; i <=30; i++){
//     if (i%5 === 0){
//         continue;
//     }
//     console.log(i);
// }

// let student = +prompt("How much student?");
// let highGrade = 0, minGrade = 12, sumGrade = 0, goodMark = 0, badMark = 0, badStudents= 0, goodStudents=0;
//
// for (let i = 1; i <= student; i++) {
//     let grade = +prompt("Enter grade of student");
//
//     let isValid = false;
//     if (Number.isInteger(grade) && grade >= 1 && grade <= 12) {
//         isValid = true;
//     }
//
//     while (!isValid) {
//         let grade = +prompt("Enter grade of student of student #" + i);
//     }
//     sumGrade += grade;
//     if (grade >= 7) {
//         goodMark++;
//         goodStudents++;
//     } else {
//         badMark++;
//         badStudents++;
//     }
//     if (grade >= highGrade) highGrade = grade;
//     if (grade <= minGrade) minGrade = grade;
//
// }
//
// console.log(`Sum of marks ${sumGrade}`);
// console.log(`Sum of good marks ${goodMark}`);
// console.log(`Sum of bad marks ${badMark}`);
// console.log(`Max grade is ${highGrade}`);
// console.log(`Min grade is ${minGrade}`);
// console.log(goodStudents);
// console.log(badStudents);

//______________________________________________#2

let quantityOfStudents = +prompt("Enter your number of students you want");
let sum = 0, average = 0, resultOver90 = 0, results6089 = 0,
    resultsUnder60 = 0, maxResult = 0, minResult = 100,
    isNumOfFirstStudentWith100 = false, numOfFirstStudentWith100 = 0;

for (let i = 1; i <= quantityOfStudents; i++) {
    let studentResult = +prompt("Enter student result");

    while (!Number.isInteger(studentResult) || studentResult < 0 || studentResult > 100) {
        studentResult = +prompt("Error! Enter student result of student #" + i);
    }

    sum += studentResult;

    if (studentResult >= 90) resultOver90++;
    else if (studentResult >= 60) results6089++;
    else resultsUnder60++;

    if (studentResult > maxResult) maxResult = studentResult;
    if (studentResult < minResult) minResult = studentResult;

    if (studentResult === 100 && !isNumOfFirstStudentWith100) {
        numOfFirstStudentWith100 = i;
        isNumOfFirstStudentWith100 = true;
    }
}

average = sum / quantityOfStudents;

console.log(`Average result ${average}`);
console.log(`Number of students with result 90-100 ${resultOver90}`);
console.log(`Number of students with result between 60 and 89 ${results6089}`);
console.log(`Number of students with result under 60 ${resultsUnder60}`);
console.log(`Max result ${maxResult}`);
console.log(`Min result ${minResult}`);
console.log(`Number of first student with result 100 is ${numOfFirstStudentWith100}`);