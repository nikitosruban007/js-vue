// function hello(){
//     console.log("Hello, World!")
// }
//
// hello()

// function showInfo(name, price = "Немає у наявності", count){
//     console.log("Магазин у Сані");
//     console.log("Графік роботи: 08:00 - 21:00");
//     console.log(`Товар: ${name}, вартість: ${price} грн`);
//     console.log(`Сума до оплати: ${count*price} грн`)
// }
//
// showInfo('Зелений чай', 500, 50)

// function calculateTotal(price, total) {
//     let sum = price * total;
//
//     if(sum >= 5000) {
//         sum *= 0.9
//     }
//
//     return sum;
// }
//
// let total = calculateTotal(1000, 5);
// console.log(total);

// function showInfo(name, price = "Немає у наявності", count){
//     console.log("Магазин у Сані");
//     console.log("Графік роботи: 08:00 - 21:00");
// }
//
// function getProductTotal(price, count) {
//     return price * count;
// }
//
// function getDiscountPercent(total) {
//     if (total >= 10000) {
//         return 15;
//     } else if (total >= 5000) {
//         return 10;
//     } else if (total >= 2000) {
//         return 5;
//     } else {
//         return 0;
//     }
// }
//
// function getDiscountValue(total, percent) {
//     return total * (percent / 100);
// }
//
// function getFinalPrice(price, discount) {
//     return price - discount;
// }
//
// let productName= prompt("Введіть назву товару: ")
// let productPrice = +prompt("Введіть вартість товару: ")
// let productCount = +prompt("Введіть кількість товару: ")
//
// let productTotal = getProductTotal(productPrice, productCount);
// let discountPercent = getDiscountPercent(productTotal);
// let discountValue = getDiscountValue(productTotal, discountPercent);
// let finalPrice = getFinalPrice(productTotal, discountValue);
//
// showInfo(productName, productPrice, productCount);
// console.log(`Товар: ${productName}`);
// console.log(`Ціна: ${productPrice} грн`);
// console.log(`Кількість: ${productTotal} шт.`)
// console.log(`Сума: ${productTotal} грн`)
// console.log(`Знижка: ${discountPercent} %`)
// console.log(`Сума знижки: ${discountValue} грн`)
// console.log(`До сплати: ${finalPrice} грн`)

//-----------------------------------------------------------------------------------------

// function showInfo(price, count) {
//     console.log("Кінотеатр");
//     console.log("Розрахунок вартості квитків");
// }
//
// function calculateTickets(price, count) {
//     return price * count;
// }
//
// function getTicketDiscount(total) {
//     if (total >= 1500) {
//         return 15;
//     } else if (total >= 1000) {
//         return 10;
//     } else if (total >= 500) {
//         return 5;
//     } else {
//         return 0;
//     }
// }
//
// function calculateTicketDiscount(total, percent) {
//     return total * (percent / 100);
// }
//
// function calculateTicketFinalPrice(total, discount) {
//     return total - discount;
// }
//
// let ticketPrice = +prompt("Введіть ціну одного квитка: ");
// let ticketCount = +prompt("Введіть кількість квитків: ");
//
// let ticketTotal = calculateTickets(ticketPrice, ticketCount);
// let discountPercent = getTicketDiscount(ticketTotal);
// let discountValue = calculateTicketDiscount(ticketTotal, discountPercent);
// let finalPrice = calculateTicketFinalPrice(ticketTotal, discountValue);
//
// showInfo(ticketPrice, ticketCount);
//
// console.log(`Ціна одного квитка: ${ticketPrice} грн`);
// console.log(`Кількість квитків: ${ticketCount} шт.`);
// console.log(`Загальна вартість: ${ticketTotal} грн`);
// console.log(`Знижка: ${discountPercent} %`);
// console.log(`Сума знижки: ${discountValue} грн`);
// console.log(`До сплати: ${finalPrice} грн`);

//-----------------------------------------------------------------------------------------
let PASSWORD = "";
let LOGIN = "";

function registerUser(login, password) {
    LOGIN = login;
    PASSWORD = password;

    console.log("Реєстрація успішна!");
}

function loginUser(login, password) {
    if (login === LOGIN && password === PASSWORD) {
        return true;
    } else {
        return false;
    }
}

let action;

do {
    action = +prompt(
        "Оберіть дію:\n" +
        "1 - Реєстрація\n" +
        "2 - Вхід\n" +
        "0 - Закрити"
    );

    if (action === 1) {
        let userLogin = prompt("Введіть логін:");
        let userPassword = prompt("Введіть пароль:");

        registerUser(userLogin, userPassword);
    }

    else if (action === 2) {

        let attempts = 3;

        do {
            let userLogin = prompt("Введіть логін:");
            let userPassword = prompt("Введіть пароль:");

            if (loginUser(userLogin, userPassword)) {
                console.log("Вхід успішний!");
                break;
            } else {
                attempts--;

                console.log(`Неправильний логін або пароль. Залишилось спроб: ${attempts}`);
            }

        } while (attempts > 0);

        if (attempts === 0) {
            console.log("Спроби закінчились!");
        }
    }

    else if (action === 0) {
        console.log("Програму закрито");
    }

    else {
        console.log("Невідома команда");
    }

} while (action !== 0);



