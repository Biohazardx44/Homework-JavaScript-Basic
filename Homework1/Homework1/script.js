var phonePrice = 119.95;
var tax = (phonePrice / 100) * 5;
var numberOfPhones = 30;

console.log('The price of 30 Phones is', numberOfPhones * phonePrice, "$ and with tax deducted it's", numberOfPhones * phonePrice - numberOfPhones * tax, '$.');