let courses = [
    {
        id: 1,
        title: "HTML",
        category: "IT",
        price: 300,
        duration: 20,
        rating: 4.5,
        available: true
    },
    {
        id: 2,
        title: "CSS",
        category: "IT",
        price: 400,
        duration: 25,
        rating: 4.3,
        available: true
    },
    {
        id: 3,
        title: "JavaScript",
        category: "IT",
        price: 800,
        duration: 40,
        rating: 4.9,
        available: true
    },
    {
        id: 4,
        title: "Python",
        category: "IT",
        price: 900,
        duration: 45,
        rating: 4.8,
        available: false
    },
    {
        id: 5,
        title: "Web Design",
        category: "Design",
        price: 600,
        duration: 30,
        rating: 4.6,
        available: true
    },
    {
        id: 6,
        title: "Graphic Design",
        category: "Design",
        price: 700,
        duration: 35,
        rating: 4.4,
        available: false
    },
    {
        id: 7,
        title: "English B2",
        category: "Languages",
        price: 1200,
        duration: 60,
        rating: 4.7,
        available: true
    },
    {
        id: 8,
        title: "Marketing",
        category: "Business",
        price: 500,
        duration: 25,
        rating: 4.2,
        available: true
    }
];

let showCourses = courseList => {
    if (courseList.length === 0) {
        alert("Курси не знайдено");
        return;
    }

    let result = courseList.map(course =>
        `ID: ${course.id}\nНазва: ${course.title}\nКатегорія: ${course.category}\nЦіна: ${course.price} грн\nТривалість: ${course.duration} год\nРейтинг: ${course.rating}\nДоступність: ${course.available ? "так" : "ні"}`
    );

    alert(result.join("\n\n"));
};

let findCourseById = id => courses.find(course => course.id === id);

let findCoursesByCategory = category =>
    courses.filter(course => course.category.toLowerCase() === category.toLowerCase());

let findCoursesByPrice = price => courses.filter(course => course.price <= price);

let findCoursesByTitle = title =>
    courses.filter(course => course.title.toLowerCase().includes(title.toLowerCase()));

let getCourseTitles = () => courses.map(course => course.title);

let getDiscountedCourses = () => courses.map(course => ({
    title: course.title,
    price: Number((course.price * 0.85).toFixed(2))
}));

let formatDiscountedCourses = discountedCourses =>
    discountedCourses.map(course => `${course.title}: ${course.price.toFixed(2)} грн`);

let sortCoursesByPrice = () => [...courses].sort((a, b) => a.price - b.price);

let sortCoursesByRating = () => [...courses].sort((a, b) => b.rating - a.rating);

let sortCoursesByTitle = () => [...courses].sort((a, b) => a.title.localeCompare(b.title));

let calculateAvailableCoursePrices = () => {
    let availableCourses = courses.filter(course => course.available);
    let totalPrice = availableCourses.reduce((sum, course) => sum + course.price, 0);
    let averagePrice = availableCourses.length > 0 ? totalPrice / availableCourses.length : 0;

    return { totalPrice, averagePrice };
};

let getValidNumber = (message, isInteger = false) => {
    let input = prompt(message);

    if (input === null) {
        return null;
    }

    if (input.trim() === "") {
        alert("Некоректне введення");
        return null;
    }

    let number = Number(input);

    if (!Number.isFinite(number) || number < 0 || (isInteger && (!Number.isInteger(number) || number === 0))) {
        alert("Некоректне введення");
        return null;
    }

    return number;
};

let repeat;

do {
    let choice = prompt(`Оберіть операцію:
                                        1. Знайти курс за ID
                                        2. Показати курси за категорією
                                        3. Знайти курси за максимальною ціною
                                        4. Знайти курси за частиною назви
                                        5. Показати назви всіх курсів
                                        6. Показати ціни зі знижкою 15%
                                        7. Сортувати за зростанням ціни
                                        8. Сортувати за спаданням рейтингу
                                        9. Сортувати за назвою
                                        10. Обчислити загальну та середню вартість доступних курсів`);

    if (choice === null) {
        repeat = false;
        break;
    }

    switch (choice) {
        case "1": {
            let id = getValidNumber("Введіть ID курсу", true);

            if (id !== null) {
                let course = findCourseById(id);
                course ? showCourses([course]) : alert("Курс не знайдено");
            }
            break;
        }
        case "2": {
            let category = prompt("Введіть категорію");

            if (category !== null) {
                if (category.trim() === "") {
                    alert("Некоректне введення");
                } else {
                    showCourses(findCoursesByCategory(category.trim()));
                }
            }
            break;
        }
        case "3": {
            let price = getValidNumber("Введіть максимальну вартість");

            if (price !== null) {
                showCourses(findCoursesByPrice(price));
            }
            break;
        }
        case "4": {
            let title = prompt("Введіть частину назви курсу");

            if (title !== null) {
                if (title.trim() === "") {
                    alert("Некоректне введення");
                } else {
                    showCourses(findCoursesByTitle(title.trim()));
                }
            }
            break;
        }
        case "5":
            alert(getCourseTitles().join("\n"));
            break;
        case "6":
            alert(formatDiscountedCourses(getDiscountedCourses()).join("\n"));
            break;
        case "7":
            showCourses(sortCoursesByPrice());
            break;
        case "8":
            showCourses(sortCoursesByRating());
            break;
        case "9":
            showCourses(sortCoursesByTitle());
            break;
        case "10": {
            let prices = calculateAvailableCoursePrices();
            alert(`Загальна вартість доступних курсів: ${prices.totalPrice} грн\nСередня вартість: ${prices.averagePrice.toFixed(2)} грн`);
            break;
        }
        default:
            alert("Некоректний пункт меню");
    }

    repeat = confirm("Повернутися до меню?");
} while (repeat);
