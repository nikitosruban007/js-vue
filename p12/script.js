// let scores = [12, 5, 4, 11, 10, 9]
//
// let highScores = scores.filter(score => score >= 10);
// console.log(highScores);

// let courses = [
//     {
//         id: 1,
//         title: "HTML",
//         description: "HTML is the standard markup language for creating web pages.",
//         price: 300,
//         active: false
//     },
//     {
//         id: 2,
//         title: "CSS",
//         description: "CSS is used to style the HTML elements.",
//         price: 200,
//         active: true
//     },
//     {
//         id: 3,
//         title: "JavaScript",
//         description: "JavaScript is used to add interactivity to web pages.",
//         price: 500,
//         active: true
//     },
//     {
//         id: 4,
//         title: "Vue",
//         description: "Vue is a JavaScript framework for building user interfaces.",
//         price: 600,
//         active: false
//     }
// ];


// let idCourse = +prompt("Enter course id");
// let course = courses.find(course => course.id === idCourse);
//
// if (course) {
//     let status = course.active ? "active" : "inactive";
//     alert(`ID: ${course.id} \ntitle: ${course.title} \ndescription: ${course.description} \nprice: ${course.price} \nstatus: ${status}`);
// } else {
//     alert("Course not found");
// }
//
// let activeCourses = courses.filter(course => course.active);
// console.log(activeCourses);
//
// let newPricesForCourses = courses.map(course => ({
//     title: course.title,
//     price: course.price * 2
// }));
//
// console.log(newPricesForCourses);
//
// let coursesWithJavaScript = courses.filter(course => course.description.toLowerCase().includes("javascript"));
// console.log(coursesWithJavaScript);

// let books = [
//     {
//         id: 1,
//         title: "HTML for newbie",
//         author: "HTML Author",
//         year: 2020,
//         price: 300,
//         isAvailable: true
//     },
//     {
//         id: 2,
//         title: "CSS for newbie",
//         author: "CSS Author",
//         year: 2021,
//         price: 200,
//         isAvailable: true
//     },
//     {
//         id: 3,
//         title: "JavaScript for newbie",
//         author: "JavaScript Author",
//         year: 2022,
//         price: 500,
//         isAvailable: false
//     },
//     {
//         id: 4,
//         title: "Vue for newbie",
//         author: "Vue Author",
//         year: 2023,
//         price: 600,
//         isAvailable: false
//     }
// ]
//
// let yearOfPublication = +prompt("Enter year of publication");
// let booksByYear = books.filter(book => book.year === yearOfPublication);
// console.log(booksByYear);
//
// let titleBooks = books.map(book => book.title);
// console.log(titleBooks);
//
// let search = books.filter(book => book.title.toLowerCase().includes("newbie"));
// console.log(search);

// let aa = [500, 2000, 700]
// console.log(aa.sort((a, b) => a - b))

// let books = [
//     {
//         id: 1,
//         title: "HTML for newbie",
//         author: "HTML Author",
//         year: 2020,
//         price: 300,
//         isAvailable: true
//     },
//     {
//         id: 2,
//         title: "CSS for newbie",
//         author: "CSS Author",
//         year: 2021,
//         price: 200,
//         isAvailable: true
//     },
//     {
//         id: 3,
//         title: "JavaScript for newbie",
//         author: "JavaScript Author",
//         year: 2022,
//         price: 500,
//         isAvailable: false
//     },
//     {
//         id: 4,
//         title: "Vue for newbie",
//         author: "Vue Author",
//         year: 2023,
//         price: 600,
//         isAvailable: true
//     }
// ]
//
// let lowerUpper = [...books].sort((a, b) => a.year.localeCompare(b.year));
// console.log(lowerUpper);
//
// let existingBooks = books
//     .filter(book => book.isAvailable === true)
//     .sort((a, b) => a.year - b.year)
//     .map(book => `${book.title} by ${book.author} (${book.year})`);
//
// console.log(existingBooks);

