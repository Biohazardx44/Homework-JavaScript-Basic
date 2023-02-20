function humanYearsToDog() {
    let humanAge = prompt("Find out your dogs age! Enter how old your dog is in human years.");
    let humanAgeConverted = parseInt(humanAge);
    let dogAge = humanAgeConverted * 7;
    let result = `Your dogs age is ${dogAge}`;
    switch (dogAge) {
        case dogAge:
            dogAge === Number;
            console.log(result);
            break;

        default:
            console.log("Enter a valid number!");
            break;
    }
}

humanYearsToDog();

function dogYearsToHuman() {
    let dogAge = prompt("Find out your human age! Enter how old you are in dog years.");
    let dogAgeConverted = parseInt(dogAge);
    let humanAge = dogAgeConverted / 7;
    let result = `Your human age is ${humanAge}`;
    switch (humanAge) {
        case humanAge:
            humanAge === Number;
            console.log(result);
            break;

        default:
            console.log("Enter a valid number!");
            break;
    }
}

dogYearsToHuman();