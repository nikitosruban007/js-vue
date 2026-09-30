const correctPIN = 2026;

let attempts = 3;

while (attempts > 0) {
    let pin = +prompt("Введіть PIN-код:");

    if (pin === correctPIN) {
        alert("Доступ дозволено");
        break;
    }

    attempts--;

    if (attempts > 0) {
        alert("Залишилося спроб: " + attempts);
    } else {
        alert("Доступ заблоковано");
    }
}