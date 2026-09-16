// let userNumber = +prompt("Enter your number");
//
// while (userNumber < 1 || userNumber > 10) {
//     userNumber = +prompt("error!!!!!! Enter your number");
//     console.log("Error! Enter number from 1 to 10");
// }

// let age = +prompt("Enter your age");
// while (Number.isNaN(age) || age < 1 || age >= 100) {
//     age = +prompt("Error! Enter your age");
// }
//
// alert(`Your age is ${age}`);


// const PIN = 1234;
//
// let tries = 1;
// let userPIN = +prompt("Enter your PIN");
//
// while (userPIN !== PIN) {
//     tries++;
//     if (tries > 3) {
//         alert("You have entered wrong PIN 3 times");
//         break;
//     }
//     userPIN = +prompt("Error! Enter your PIN");
// }
//
// if (userPIN === PIN) alert("Welcome!");

// let menuChoice;
//
// do {
//     menuChoice = +prompt("What do you want to do?\n 1. Profile\n 2. Settings\n 3. Casino\n 4. Statistics\n 0. Exit");
//
//     if (menuChoice === 1) {
//         alert("Your profile:\n Name: Alex\n Age: 25\n");
//     } else if (menuChoice === 2) {
//         alert("Settings\n Language: Ukrainian\n Theme: Dark");
//     } else if (menuChoice === 3) {
//         alert("Available games:\n 1. Slot machine\n 2. Blackjack\n");
//     } else if (menuChoice === 4) {
//         alert("Statistics\n Wins: 10\n Losses: 5\n");
//     } else if (menuChoice === 0) {
//         break;
//     } else {
//         alert("Error! Enter number from 0 to 4");
//     }
//
// } while (menuChoice !== 0);

//__________________________________________________________________________________________________________________________

// let menuChoice;
//
// do {
//     menuChoice = +prompt("What do you want to do?\n 1. Profile\n 2. Settings\n 3. Casino\n 4. Statistics\n 0. Exit");
//     switch (Number(menuChoice)) {
//         case 1:
//             alert("Your profile:\n Name: Alex\n Age: 25\n")
//             break;
//         case 2:
//             alert("Settings\n Language: Ukrainian\n Theme: Dark");
//             break;
//         case 3:
//             alert("Available games:\n 1. Slot machine\n 2. Blackjack\n")
//             break;
//         case 4:
//             alert("Statistics\n Wins: 10\n Losses: 5\n")
//             break;
//         case 0:
//             break;
//         default:
//             alert("Error! Enter number from 0 to 4");
//     }
// } while (menuChoice !== 0)

//____________________________________________________________________________________________________________________________________
// let sum = 0;
// let count = 1;
// let average = 0;
//
// while (count <= 5) {
//     let grade = +prompt("Enter your grade");
//     if (Number.isInteger(grade) && grade >= 1 && grade <= 12) {
//         count++;
//         sum += grade;
//     } else {
//         alert("Error! Enter number from 1 to 12");;
//     }
// }
//
// average = sum / count;
// console.log(`Average grade ${average}`);
// console.log(`Sum of grades ${sum}`);

// let menuChoice;
// let questions = {
//     "What is the result of 0.1 + 0.2 === 0.3?": "false",
//     "What is the result of typeof NaN?": "number",
//     "What is the result of [] == false?": "true",
//     "What is the result of 2 + '2'?": "22",
//     "What is the result of null == undefined?": "true"
// };
// let questionNum = 1;
//
// let points = 0;
//
// menuChoice = confirm("Do you want to test your knowledge?");
//
// if (menuChoice) {
//     for (let question in questions) {
//         menuChoice = prompt(`Question №${questionNum}\n` + question);
//
//         while (menuChoice === '') {
//             alert("You didn't answer the question!");
//             menuChoice = prompt(`Question №${questionNum}\n` + question);
//         }
//
//         if (menuChoice === questions[question]) {
//             alert("Correct!");
//             points++;
//         } else {
//             alert("Wrong!");
//         }
//
//         questionNum++;
//     }
//
//     if (points === 5) alert("Congratulations! You passed the test!");
//     else if (points >= 3) alert("Your result is good, but you can do better!");
//     else alert("You failed the test!");
// }
//____________________________________________________________________________________________________________________________________
const PIN = 4321;

let PINAttempts = 0;
let age = +prompt("Введіть ваш вік");

while (!Number.isInteger(age) || age < 12 || age > 90) {
    age = +prompt("Помилка! Введіть ваш вік (12–90)");
}

let pin;

do {
    pin = +prompt("Введіть ПІН код");
    PINAttempts++;

    if (pin === PIN) {
        alert("Доступ дозволено!");
        break;
    } else {
        alert("Невірний ПІН!");
    }

} while (PINAttempts < 3);

if (pin === PIN) {
    let menuChoice;

    do {
        menuChoice = +prompt(
            "1 - Особистий кабінет\n" +
            "2 - Повідомлення\n" +
            "3 - Налаштування\n" +
            "0 - Вихід"
        );

        switch (menuChoice) {
            case 1:
                alert("Особистий кабінет");
                break;
            case 2:
                alert("Повідомлення");
                break;
            case 3:
                alert("Налаштування");
                break;
            case 0:
                alert("Вихід із системи");
                break;
            default:
                alert("Такого пункту немає.");
                break;
        }

    } while (menuChoice !== 0);

} else {
    alert("Доступ заблоковано!");
}




