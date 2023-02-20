let firstNames = ["Bob", "Jill", "Big"];
let lastNames = ["Gregory", "Wurtz", "Potato"];

function listOfNames() {
    let names = [];
    for (let i = 0; i < firstNames.length; i++) {
        names.push(i + 1 + "." + firstNames[i] + " " + lastNames[i]);
    }
    console.log(names);
}

listOfNames();