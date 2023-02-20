let rootNode = document.getElementById("root");
let rowsNode = document.getElementById("rows");
let columnsNode = document.getElementById("columns");
let buttonNode = document.getElementById("button");

buttonNode.addEventListener("click", function () {
    let tableNode = document.createElement("table");
    rootNode.append(tableNode);
    let tbodyNode = document.createElement("tbody");
    tableNode.append(tbodyNode);

    for (let i = 0; i < rowsNode.value; i++) {
        let trNode = document.createElement("tr");
        tbodyNode.append(trNode);

        for (let j = 0; j < columnsNode.value; j++) {
            let tdNode = document.createElement("td");
            trNode.append(tdNode);
        }
    }
    return tableNode;
});