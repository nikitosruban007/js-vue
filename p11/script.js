// let book = {
//     title: "Кобзар",
//     author: "Тарас Шевченко",
//     year: 1840,
//     price: 500,
//     isAvailable: true
// }
//
// console.log(book);
// console.log(book.title);

// let books = [
//     {
//         id: 1,
//         title: "Кобзар",
//         author: "Тарас Шевченко",
//         year: 1840,
//         price: 500,
//         isAvailable: true
//     },
//     {
//         id: 2,
//         title: "Лісова пісня",
//         author: "Леся Українка",
//         year: 1918,
//         price: 600,
//         isAvailable: true
//     },
//     {
//         id: 3,
//         title: "Тигролови",
//         author: "Іван Багряний",
//         year: 1944,
//         price: 450,
//         isAvailable: false
//     },
//     {
//         id: 4,
//         title: "Місто",
//         author: "Валер'ян Підмогильний",
//         year: 1928,
//         price: 550,
//         isAvailable: true
//     }
// ]
//
// for (let book of books) {
//     console.log(`book id: ${book.id} title: ${book.title} author: ${book.author} year: ${book.year} price: ${book.price} isAvailable: ${book.isAvailable}`)
//
// }
//
// books.forEach(book => console.log(book.title))
//
// let isAvailableCount = books.filter(book => book.isAvailable).length;
// let totalPrice = books.filter(book => book.isAvailable).reduce((sum, book) => sum + book.price, 0);
//
// console.log(isAvailableCount, totalPrice)
//
// books[1].price = 750;
// console.log(books)
//
// books.push({
//     id: 5,
//     title: "Захар Беркут",
//     author: "Іван Франко",
//     year: 1882,
//     price: 500,
//     isAvailable: false
// })
//
// let enterID = +prompt("Enter book id");
// let book = books.find(book => book.id === enterID);
//
// let status = book.isAvailable ? "available" : "unavailable";
//
// if (status) alert(`ID: ${book.id} \ntitle: ${book.title} \nauthor: ${book.author} \nyear: ${book.year} \nprice: ${book.price} \nisAvailable: ${book.isAvailable}`)
// else alert("Book not found");

//________________________________________________________________________________pr


let clubs = [
    { id: 1, name: "Програмування", category: "IT", price: 500, members: 15, active: true },
    { id: 2, name: "Футбол", category: "Спорт", price: 400, members: 20, active: true },
    { id: 3, name: "Малювання", category: "Мистецтво", price: 350, members: 12, active: false },
    { id: 4, name: "Робототехніка", category: "IT", price: 600, members: 10, active: true },
    { id: 5, name: "Шахи", category: "Спорт", price: 300, members: 8, active: false }
];

let choice;

do {
    choice = prompt(
        "Каталог гуртків\n\n" +
        "1 - Показати всі гуртки\n" +
        "2 - Знайти гурток за ID\n" +
        "3 - Записати учасника\n" +
        "4 - Змінити статус набору\n" +
        "5 - Додати новий гурток\n" +
        "6 - Показати статистику\n" +
        "0 - Вихід"
    );

    if (choice === null) break;

    switch (choice) {

        case "1": {
            if (clubs.length === 0) {
                alert("Каталог порожній!");
                break;
            }

            let result = "Каталог гуртків:\n\n";

            clubs.forEach(club => {
                result +=
                    "ID: " + club.id + " | " + club.name + "\n" +
                    "Напрям: " + club.category +
                    " | Ціна: " + club.price + " грн\n" +
                    "Учасників: " + club.members +
                    " | Набір: " + (club.active ? "Відкритий" : "Закритий") +
                    "\n\n";
            });

            alert(result);
            break;
        }

        case "2": {
            let input = prompt("Введіть ID гуртка:");
            if (input === null) break;

            let id = Number(input);
            let found = null;

            for (let club of clubs) {
                if (club.id === id) {
                    found = club;
                    break;
                }
            }

            if (found === null) {
                alert("Гурток не знайдено!");
            } else {
                alert(
                    "ID: " + found.id + "\n" +
                    "Назва: " + found.name + "\n" +
                    "Напрям: " + found.category + "\n" +
                    "Ціна: " + found.price + " грн\n" +
                    "Учасників: " + found.members + "\n" +
                    "Набір: " + (found.active ? "Відкритий" : "Закритий")
                );
            }
            break;
        }

        case "3": {
            let input = prompt("Введіть ID гуртка:");
            if (input === null) break;

            let id = Number(input);
            let found = null;

            for (let club of clubs) {
                if (club.id === id) {
                    found = club;
                    break;
                }
            }

            if (found === null) {
                alert("Гурток не знайдено!");
            } else if (found.active === false) {
                alert("Набір у цей гурток закритий!");
            } else {
                let answer = confirm("Записати учасника до гуртка " + found.name + "?");

                if (answer) {
                    found.members++;
                    alert("Учасника записано! Тепер учасників: " + found.members);
                } else {
                    alert("Запис скасовано.");
                }
            }
            break;
        }

        case "4": {
            let input = prompt("Введіть ID гуртка:");
            if (input === null) break;

            let id = Number(input);
            let found = null;

            for (let club of clubs) {
                if (club.id === id) {
                    found = club;
                    break;
                }
            }

            if (found === null) {
                alert("Гурток не знайдено!");
            } else {
                let answer = confirm("Змінити статус набору гуртка " + found.name + "?");

                if (answer) {
                    found.active = !found.active;
                    alert("Новий статус: " + (found.active ? "Відкритий" : "Закритий"));
                } else {
                    alert("Зміну скасовано.");
                }
            }
            break;
        }

        case "5": {
            let name = prompt("Введіть назву гуртка:");
            if (name === null) break;

            if (name.trim() === "") {
                alert("Назва не може бути порожньою!");
                break;
            }

            let category = prompt("Введіть напрям гуртка:");
            if (category === null) break;

            if (category.trim() === "") {
                alert("Напрям не може бути порожнім!");
                break;
            }

            let priceInput = prompt("Введіть вартість занять:");
            if (priceInput === null) break;

            let price = Number(priceInput);

            if (priceInput.trim() === "" || !Number.isFinite(price) || price < 0) {
                alert("Некоректна вартість!");
                break;
            }

            let membersInput = prompt("Введіть кількість учасників:");
            if (membersInput === null) break;

            let members = Number(membersInput);

            if (membersInput.trim() === "" || !Number.isInteger(members) || members < 0) {
                alert("Некоректна кількість учасників!");
                break;
            }

            let newId = 1;

            for (let club of clubs) {
                if (club.id >= newId) {
                    newId = club.id + 1;
                }
            }

            let newClub = {
                id: newId,
                name: name,
                category: category,
                price: price,
                members: members,
                active: true
            };

            clubs.push(newClub);
            alert("Гурток додано! Його ID: " + newId);
            break;
        }

        case "6": {
            let totalClubs = clubs.length;
            let activeClubs = 0;
            let totalMembers = 0;
            let totalPrice = 0;

            for (let club of clubs) {
                if (club.active === true) {
                    activeClubs++;
                }

                totalMembers += club.members;
                totalPrice += club.price;
            }

            let averagePrice = 0;

            if (totalClubs > 0) {
                averagePrice = totalPrice / totalClubs;
            }

            alert(
                "Статистика:\n\n" +
                "Всього гуртків: " + totalClubs + "\n" +
                "Відкритих для набору: " + activeClubs + "\n" +
                "Загальна кількість учасників: " + totalMembers + "\n" +
                "Середня вартість: " + averagePrice.toFixed(2) + " грн"
            );
            break;
        }

        case "0":
            alert("Роботу завершено!");
            break;

        default:
            alert("Неправильний пункт меню!");
    }

} while (choice !== "0");
