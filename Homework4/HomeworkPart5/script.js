let numbers = [11, 19, 12, 15, 21, 9];

function findMaxNumber(inputArray) {
    let counter = 0;
    let max = -Infinity;
    while (counter < inputArray.length) {
        if (inputArray[counter] > max) {
            max = inputArray[counter];
        }
        counter++
    }
    return max;
}

function findMinNumber(inputArray) {
    let counter = 0;
    let min = +Infinity;
    while (counter < inputArray.length) {
        if (inputArray[counter] < min) {
            min = inputArray[counter];
        }
        counter++
    }
    return min;
}

let maxOfNumbers = findMaxNumber(numbers);
let minOfNumbers = findMinNumber(numbers);
let sumOfNumbers = maxOfNumbers + minOfNumbers;
let result = (`Max:${maxOfNumbers}` + ` ` + `Min:${minOfNumbers}` + ` ` + `Sum:${sumOfNumbers}`);

console.log(result);