let rootNode = document.getElementById("root");
let array = [2, 4, 5];

function printNumAndSum(arr) {
    let ulNode = document.createElement("ul");
    rootNode.append(ulNode);
    let pNode = document.createElement("p");
    rootNode.append(pNode);
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let liNode = document.createElement("li");
        ulNode.append(liNode);
        liNode.textContent = arr[i];

        if (i === arr.length - 1) {
            pNode.textContent += `${arr[i]}=`;
        } else {
            pNode.textContent += `${arr[i]}+`;
        }
        sum = sum + arr[i];
    }
    pNode.textContent = pNode.textContent + sum;
}

printNumAndSum(array);