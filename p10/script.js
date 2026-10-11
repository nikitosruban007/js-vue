// names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Emiliia"]
//
// names2 = []
// names2.push("Vlada")
// names2.push("Miroslava")
//
// names2.pop()
// names2.unshift("Miroslava", "Miroslava");
//
// names2.shift()
//
// names.slice(1, 4)

// names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Emiliia"]
//
// let deleted = names.splice(2, 1)
// names.splice(1, 0, "Bohdan");
// name.splice(0, 1, "Mariia", "Ksu");
//
// console.log(names)
// console.log(deleted)

// function register(name) {
//     if(name.trim().length === 0) {
//         alert("Please enter your name");
//         return;
//     }
//
//     let duplicate = false;
//     for (let i = 0; i < names.length; i++) {
//         if (names[i] === name) {
//             duplicate = true;
//             break;
//         }
//     }
//
//     if (duplicate) {
//         alert("This name is already taken " + name);
//         return;
//     }
//
//     names.push(name);
//     alert("You have successfully registered, " + name + "")
// }
//
// function deleted(name) {
//     let index = -1
//     for (let i = 1; i < names.length; i++) {
//         if (names[i] === name) {
//             index = i;
//             break
//         }
//     }
//
//     if (index === -1) {
//         alert("This name is not registered " + name);
//     } else {
//         names.splice(index, 1);
//         alert("You have successfully deleted, " + name + "")
//     }
// }
//
// function count(){
//     alert("Quantity of registered users: " + names.length)
// }
//
// names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Emiliia"]
//
// register("Mykyta");
// register("Ivan");
// register('           ');
// deleted("Ivan");
// count();

// names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Emiliia"]
// for (name of names) {
//     console.log(name)
// }
//
// names.forEach((name, index) => console.log(name));


//__________________________________________________________________#1


// let names = ["Микита", "Олександра", "Влад", "Іван"];
//
// names.push("Влад");
//
// names.unshift("Аліса");
//
// names.pop();
//
// names[2] = "Мирослава";
//
// for (let i = 0; i < names.length; i++) {
//     console.log((i + 1) + ". " + names[i]);
// }
//
// for (let name of names) {
//     console.log(name);
// }
//
// names.forEach((name) => console.log(name + ": " + name.length));

//__________________________________________________________________#2

let prices = [120, 250, 180, 300, 150, 400];

let total = 0;

for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}

console.log("Загальний виторг: " + total);

let count = 0;

for (let price of prices) {
    if (price >= 200) {
        count++;
    }
}

console.log("Квитків від 200 грн: " + count);

let average = total / prices.length;

console.log("Середня ціна: " + average);

let sum2 = 0;
let count2 = 0;

prices.forEach(function(price) {
    sum2 += price;

    if (price >= 200) {
        count2++;
    }
});

console.log("Виторг В-2: " + sum2);
console.log("Кількість В-2: " + count2);
