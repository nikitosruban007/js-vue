// let age = prompt("Enter your age");
// let isRegistered = confirm("Are you registered?");
//
// if (age >= 18 && isRegistered) {
//     alert("Today, you can watch special videos");
// } else {
//     alert("Today, you can't watch special videos");
// }

//
// let accessLevel = prompt("Enter your access level");
//
// let allowedLevels = ["teacher", "admin"];
//
// if (allowedLevels.includes(accessLevel)) {
//     alert("Hi");
// } else {
//     alert("Byaka");
// }


// let isRegistered = confirm("Are you registered?");
// if (!isRegistered) {
//     alert("lox");
// } else {
//     let age = prompt("Please enter your age number");
//     if (age < 18) {
//         alert("lox")
//     } else {
//         alert("Hi");
//     }
// }

// let grade = prompt("Enter your grade");
//
// if (grade >= 90) {
//     alert("Відмінно");
// } else if (grade >= 70) {
//     alert("Добре");
// } else if (grade >= 60) {
//     alert("Задовільно");
// } else {
//     alert("Незадовільно");
// }

// let userRole = prompt("Enter your role");
// let isSubscribed, isBlocked
//
// if (userRole === "teacher") {
//
//     isSubscribed = confirm("You have subscribed to this product?");
//     isBlocked = confirm("Your account is blocked?");
//     if (!isBlocked) {
//         alert("You are teacher of courses");
//     } else {
//         alert("Access forbidden");
//     }
// } else if (userRole === "student") {
//     isSubscribed = confirm("You have subscribed to this product?");
//     isBlocked = confirm("Your account is blocked?");
//
//     if (!isBlocked) {
//         if (isSubscribed) {
//             alert("You are student of courses");
//         } else {
//             alert("You are demo student of courses");
//         }
//     } else {
//         alert("Access forbidden");
//     }
// } else {
//     alert("Access forbidden")
// }

// const promo = "SALE";
// const discount = 0.1;
// let totalPrice;
//
// let nameOfProduct = prompt("Name of product: ");
// let quantityOfProduct = +prompt("Quantity of product: ");
// let priceOfProduct = +prompt("Price of product per quantity: ");
// let userPromo = prompt("If you have promo, enter them: ");
//
// let isRegistered = confirm("Are you registered?");
// let isVip = confirm("Are you vip user?");
//
// totalPrice = priceOfProduct * quantityOfProduct;
//
//
// if (isRegistered && (totalPrice >= 1000) && (isVip || userPromo === promo)) {
//     alert(`You need to pay for ${nameOfProduct}: ${totalPrice * (1-discount)} UAH`);
// } else {
//     alert(`You need to pay for ${nameOfProduct}: ${totalPrice} UAH`);
// }


