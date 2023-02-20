function planets(data) {
    let tableBody = document.getElementById("tableBody");

    for (let i = 0; i < data.results.length; i++) {
        let rows = document.createElement("tr");
        tableBody.append(rows);

        let firstTd = document.createElement("td");
        rows.append(firstTd);
        firstTd.textContent = data.results[i].name;

        let secondTd = document.createElement("td");
        rows.append(secondTd);
        secondTd.textContent = data.results[i].population;

        let thirdTd = document.createElement("td");
        rows.append(thirdTd);
        thirdTd.textContent = data.results[i].climate;

        let fourthTd = document.createElement("td");
        rows.append(fourthTd);
        fourthTd.textContent = data.results[i].gravity;
    };
};

function getPlanets() {
    fetch("https://swapi.dev/api/planets/?page=1")
        .then((response) => {
            response.json()
                .then((serverInfo) => {
                    planets(serverInfo);
                });
        });
};

let btn = document.getElementById(`btn`);
btn.addEventListener("click", getPlanets);