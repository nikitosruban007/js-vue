let carsCount = 0;
let electricCars = 0;
let totalPayment = 0;
let maxPayment = 0;
const maxCars = 7;

for (let i = 1; i <= maxCars; i++) {
    let hours = +prompt(`Автомобіль ${i}. Введіть кількість годин:`);

    if (hours === 0) {
        break;
    }

    if (hours < 0 || hours > 12) {
        alert("Помилка: неправильна кількість годин");
        continue;
    }

    let type = +prompt("Введіть тип автомобіля:\n1 - звичайний\n2 - електромобіль");

    if (type !== 1 && type !== 2) {
        alert("Помилка: неправильний тип автомобіля");
        continue;
    }

    let payment = 0;

    if (type === 1) {
        payment = hours * 40;
    } else {
        payment = hours * 30;
        electricCars++;
    }

    if (hours > 5) {
        payment = payment * 0.8;
    }

    carsCount++;
    totalPayment += payment;

    if (payment > maxPayment) {
        maxPayment = payment;
    }

    alert(`Оплата за автомобіль: ${payment} грн`);
}

alert("Правильно оброблених автомобілів: " + carsCount +
    "\nЕлектромобілів: " + electricCars +
    "\nЗагальна сума оплати: " + totalPayment + " грн" +
    "\nНайбільша оплата за один автомобіль: " + maxPayment + " грн");