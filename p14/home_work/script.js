let confirmButton = document.querySelector('#confirm-button');
let profileStatus = document.querySelector('#profile-status');
let profileName = document.querySelector('#profile-name');
let themeSelect = document.querySelector('#theme-select');
let infoToggle = document.querySelector('#info-toggle');
let profileInfo = document.querySelector('#profile-info');
let profileCard = document.querySelector('#profile-card');

confirmButton.addEventListener('click', () => {
    let name = profileName.value.trim();

    if (name === "") {
        profileStatus.textContent = "Будь ласка, введіть ім’я";
        profileCard.classList.remove('is-confirmed');
    } else {
        profileStatus.textContent = `Профіль ${name} підтверджено!`;
        profileCard.classList.add('is-confirmed');
    }
});

profileName.addEventListener('input', () => {
    let name = profileName.value.trim();

    if (name === "") {
        profileStatus.textContent = "Введіть ім’я мандрівника";
    } else {
        profileStatus.textContent = `Вітаємо, ${name}!`;
    }

    profileCard.classList.remove('is-confirmed');
});

themeSelect.addEventListener('change', () => {
    document.body.classList.remove('theme-ember', 'theme-ash');

    if (themeSelect.value === 'ember') {
        document.body.classList.add('theme-ember');
    } else if (themeSelect.value === 'ash') {
        document.body.classList.add('theme-ash');
    }
});

infoToggle.addEventListener('click', () => {
    profileInfo.classList.toggle('is-hidden');

    if (profileInfo.classList.contains('is-hidden')) {
        infoToggle.textContent = "Додаткова інформація +";
        infoToggle.setAttribute('aria-expanded', 'false');
    } else {
        infoToggle.textContent = "Додаткова інформація −";
        infoToggle.setAttribute('aria-expanded', 'true');
    }
});