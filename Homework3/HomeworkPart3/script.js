let moneyInAccount = 50000;

function ATM() {
    let amountOfMoney = prompt("Enter the amount of money you want to withdraw.");
    let moneyConverted = parseInt(amountOfMoney);
    let balanceInAccount = moneyInAccount - amountOfMoney;
    if (moneyConverted <= moneyInAccount) {
        console.log(`You have withdrawn ${moneyConverted}$ and you have ${balanceInAccount}$ left in your bank account!`);
    } else if (moneyConverted > moneyInAccount) {
        console.log(`Not enough money!`);
    } else {
        console.log(`Enter a valid number!`)
    }
}

ATM();