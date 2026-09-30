let age = +prompt("Введіть свій вік: ");
let day = +prompt("Введіть день (1 - будній, 2 - вихідний): ");

let price = 0;

if (age < 0) {
    alert("Помилка: неправильний вік");
} else if (day !== 1 && day !== 2) {
    alert("Помилка: неправильний тип дня");
} else {
    if (day === 1) {
        price = 200;
    } else {
        price = 250;
    }

    if (age <= 7) {
        price = 0;
    } else if (age <= 17) {
        price = price * 0.5;
    } else if (age >= 60) {
        price = price * 0.6;
    }

    alert(`Вартість квитка: ${price} грн`);
}