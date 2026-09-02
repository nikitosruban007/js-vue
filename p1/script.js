let productName = prompt("Enter your product name");
let productPrice = +prompt("Enter your product price");
let productCount = +prompt("Enter your product count");
let delivery = +prompt("Enter your delivery");
let discount = +prompt("Enter discount percent");
let MoneyIs = +prompt("Enter money");

let priceWithoutDiscount = productPrice * productCount;
let discountPrice = priceWithoutDiscount * discount / 100;
let totalPrice = priceWithoutDiscount - discountPrice + delivery;

console.log(`Product name: ${productName} на суму: ${totalPrice}, чи вистачить ${MoneyIs-totalPrice > 0}`);

alert(
    "Product is " + productName +
    "\nDiscount is " + discount + "%" +
    "\nTotal price is " + totalPrice
);