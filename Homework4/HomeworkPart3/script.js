let array = ["Hello", "there", "students", "of", "SEDC", "!"];

function helloSEDC(text) {
    let sum = "";
    for (arrayItem of text) {
        sum = sum + arrayItem + ` `;
    }
    return sum;
}

let result = helloSEDC(array);
console.log(result);