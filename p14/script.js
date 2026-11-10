let enrollBtn = document.querySelector('#enrollBtn');
let status = document.querySelector('#status');
let studentsName = document.querySelector('#studentsName');
let welcome = document.querySelector('#welcome');
let format = document.querySelector('#format');
let price = document.querySelector('#price');
let detailBtn = document.querySelector('#detailBtn');
let details = document.querySelector('#details');
let card = document.querySelector('#card');
let themeBtn = document.querySelector('#themeBtn');



enrollBtn.addEventListener('click', () => {
    status.textContent = "Ви записані на курс!"
    status.classList.add('success');
    enrollBtn.disabled = true;
    enrollBtn.textContent = "Запис оформлено"
});

studentsName.addEventListener('input', () =>{
    let name = studentsName.value.trim();
    if (name === "") {
        welcome.textContent = "Вітаємло Гостю"
    } else {
        welcome.textContent = `Вітаємо, ${name}!`
    }
})

format.addEventListener('change', () => {
    price.textContent = format.value + " грн.";
});

detailBtn.addEventListener('click', () => {
    details.classList.toggle('hidden')
    if (details.classList.contains('hidden')) {
        detailBtn.textContent = "Показати опис"
    } else {
        detailBtn.textContent = "Сховати опис"
    }
});

themeBtn.addEventListener('click', () => {
    card.classList.toggle('dark');
    if (card.classList.contains('dark')) {
        themeBtn.textContent = "Світла тема"
    } else {
        themeBtn.textContent = "Темна тема"

    }
});