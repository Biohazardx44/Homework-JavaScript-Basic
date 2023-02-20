var input = prompt("Enter the year you were born:");
var numInput = parseInt(input);
var inputResult = (numInput - 4) % 12;
var zodiacSign;

if (inputResult == 0) {
    zodiacSign = " - Rat";
} else if (inputResult == 1) {
    zodiacSign = " - Ox";
} else if (inputResult == 2) {
    zodiacSign = " - Tiger";
} else if (inputResult == 3) {
    zodiacSign = " - Rabbit";
} else if (inputResult == 4) {
    zodiacSign = " - Dragon";
} else if (inputResult == 5) {
    zodiacSign = " - Snake";
} else if (inputResult == 6) {
    zodiacSign = " - Horse";
} else if (inputResult == 7) {
    zodiacSign = " - Goat";
} else if (inputResult == 8) {
    zodiacSign = " - Monkey";
} else if (inputResult == 9) {
    zodiacSign = " - Rooster";
} else if (inputResult == 10) {
    zodiacSign = " - Dog";
} else if (inputResult == 11) {
    zodiacSign = " - Pig";
} else {
    zodiacSign = " - Something went wrong.Please input a valid year. :(";
}

var result = inputResult + zodiacSign;
console.log(result);