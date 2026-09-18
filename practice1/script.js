let processedCount = 0;
let freeCount = 0;
let discountCount = 0;
let fullPriceCount = 0;
let totalSum = 0;
let isExit = false;
let isFinished = false;

do {
    let menuChoice = +prompt("Виберіть подію:\n1 - Кіно (150 грн)\n2 - Театр (220 грн)\n3 - Концерт (350 грн)\n-1 - Вихід");

    while (!Number.isInteger(menuChoice) || (menuChoice !== -1 && (menuChoice < 1 || menuChoice > 3))) {
        menuChoice = +prompt("Помилка! Виберіть подію:\n1 - Кіно (150 грн)\n2 - Театр (220 грн)\n3 - Концерт (350 грн)\n-1 - Вихід");
    }

    if (menuChoice === -1) {
        isExit = true;
        break;
    }

    let price = 0;

    switch (menuChoice) {
        case 1:
            price = 150;
            break;
        case 2:
            price = 220;
            break;
        case 3:
            price = 350;
            break;
        case -1:
            isExit = true;
            break;
    }

    menuChoice = +prompt("Виберіть тип дня:\n1 - Будній\n2 - Вихідний (+15%)\n-1 - Вихід");

    while (!Number.isInteger(menuChoice) || (menuChoice !== 1 && menuChoice !== 2 && menuChoice !== -1)) {
        menuChoice = +prompt("Помилка! Виберіть тип дня:\n1 - Будній\n2 - Вихідний (+15%)\n-1 - Вихід");
    }

    if (menuChoice === 2) {
        price *= 1.15;
    }

    if (menuChoice === -1) {
        isExit = true;
        break;
    }

    menuChoice = +prompt("Введіть кількість квитків (1-6): (або -1 для виходу)");

    while (!Number.isInteger(menuChoice) || (menuChoice !== -1 && (menuChoice < 1 || menuChoice > 6))) {
        menuChoice = +prompt("Помилка! Введіть кількість квитків від 1 до 6: (або -1 для виходу)");
    }

    if (menuChoice === -1) {
        isExit = true;
        break;
    }

    for (let i = 1; i <= menuChoice; i++) {
        let age = +prompt(`Введіть вік для квитка №${i} (або -1 для виходу):`);

        if (age === -1) {
            isExit = true;
        }

        while (!Number.isInteger(age) || (age !== -1 && (age < 0 || age > 120))) {
            age = +prompt(`Помилка! Введіть коректний вік для квитка №${i} (або -1 для виходу):`);

            if (age === -1) {
                isExit = true;
                break;
            }
        }

        if (age === -1) {
            isExit = true;
            break;
        }

        if (age <= 5) {
            processedCount++;
            freeCount++;
            continue;
        }

        let discount = 0;

        if (age >= 6 && age <= 12) {
            discount = 0.5;
            discountCount++;
        } else if (age >= 13 && age <= 17) {
            discount = 0.2;
            discountCount++;
        } else if (age >= 18 && age <= 59) {
            if (age <= 25) {
                let isStudent = confirm(`Квиток №${i}: Чи є у вас студентський квиток?`);

                if (isStudent) {
                    discount = 0.1;
                    discountCount++;
                } else {
                    fullPriceCount++;
                }
            } else {
                fullPriceCount++;
            }
        } else if (age >= 60) {
            discount = 0.25;
            discountCount++;
        }

        let ticketPrice = price * (1 - discount);
        totalSum += ticketPrice;
        processedCount++;
    }

    isFinished = true

} while (!isExit && !isFinished);


if (!isExit) {
    if (totalSum > 1000) {
        totalSum *= 0.95;
    }

    let isPaid = confirm(`Рахунок №151764664\n
    Оброблено квитків: ${processedCount}\n
    Із них:\n
      - Безкоштовних: ${freeCount}\n
      - Зі знижкою: ${discountCount}\n
      - За повною ціною: ${fullPriceCount}\n
     \n\n
    Загальна сума: ${totalSum.toFixed(2)} грн\n
    Чи готові оплатити?`);

    if (isPaid) {
        alert(`Рахунок №151764664\n
    Оброблено квитків: ${processedCount}\n
    Із них:\n
      - Безкоштовних: ${freeCount}\n
      - Зі знижкою: ${discountCount}\n
      - За повною ціною: ${fullPriceCount}\n
     \n\n
    Загальна сума: ${totalSum.toFixed(2)} грн\n
    ОПЛАЧЕНО`);
    } else {
        alert("Оплату скасовано. До побачення!");
    }
} else {
    alert("До побачення!");
}