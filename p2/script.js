// let temp = prompt("Enter a temperature");
// let result;
// if (temp <= 0) result = "хололно";
// else if (temp > 0 && temp <= 20) result = "норм";
// else if (temp > 20) result = "жарко";
//
// alert(result);


//_______________________________________________

// let a = prompt("Enter a number");
//
// if (a % 2 === 0) alert("Парне"); else alert("Непарне");

//_______________________________________________

//
// const login = "admin";
// const password = "12345";
//
// let userLogin = prompt("Enter login");
// let userPassword = prompt("Enter password");
//
// if (userLogin === login && userPassword === password) alert("Вхід дозволено"); else alert("Невірний логін чи пароль");

// let cost, deliver = prompt("Enter your delivery");
//
// switch (deliver) {
//     case "courier": cost = 200; break;
//     case "pickup": cost = 100; break;
//     case "self": cost = 0; break;
//     default: cost = "N/A";
// }
//
// console.log(cost);


//_______________________________________________

// let numOfDay = prompt("Введіть порядковий номер дню");
//
// switch (numOfDay) {
//     case "1": alert("Понеділок"); break;
//     case "2": alert("Вівторок"); break;
//     case "3": alert("Середа"); break;
//     case "4": alert("Четвер"); break;
//     case "5": alert("П'ятниця"); break;
//     case "6": alert("Субота"); break;
//     case "7": alert("Неділя"); break;
//     default: alert("Невідомий день");
// }

//_______________________________________________


let today = new Date();
let dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let productName = document.getElementById("product").value;
    const productPrices = {
        "pc": 47000,
        "playstation": 30000,
        "iphone": 37000,
        "samsung": 25000
    }
    let productPrice = productPrices[productName];
    let productQuantity = Number(document.getElementById("quantity").value);    let delivery = document.getElementById("delivery").value;
    let hasDiscount = document.getElementById("discount").checked;
    const daysOfDiscount = ["Monday", "Friday"] //5%
    const deliveryCourier = 200
    const deliveryPost = 100

    let totalPrice, discount = 0

    totalPrice = productPrice * productQuantity

    if (totalPrice > 1000) discount = 0.1;
    else if (totalPrice > 500) discount = 0.05;

    if (daysOfDiscount.includes(dayOfWeek)) discount = 0.05;

    if (hasDiscount) discount+=0.1;

    totalPrice *= (1 - discount);

    if (delivery === "courier") totalPrice += deliveryCourier;
    else if (delivery === "post") totalPrice += deliveryPost;


    document.getElementById("costs").textContent = totalPrice.toFixed(2) + " UAH";
});






