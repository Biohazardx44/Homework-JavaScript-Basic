let array = [4, 22, 58, 7, 14];

function calculateNumbers(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(calculateNumbers(array));