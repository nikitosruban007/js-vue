let students = +prompt("Введіть кількість учнів:");

let sum = 0;
let highGrades = 0;
let lowGrades = 0;
let maxGrade = 0;

for (let i = 1; i <= students; i++) {
    let grade = +prompt(`Введіть оцінку учня ${i}:`);

    while (grade < 1 || grade > 12) {
        grade = +prompt("Помилка. Введіть оцінку від 1 до 12:");
    }

    sum = sum + grade;

    if (grade >= 7) {
        highGrades = highGrades + 1;
    } else {
        lowGrades = lowGrades + 1;
    }

    if (grade > maxGrade) {
        maxGrade = grade;
    }
}

let average = sum / students;

alert("Сума: " + sum +
    "\nСередня: " + average +
    "\nОцінок 7 і вище: " + highGrades +
    "\nОцінок нижче 7: " + lowGrades +
    "\nНайбільша оцінка: " + maxGrade);