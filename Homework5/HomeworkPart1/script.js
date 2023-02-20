let paragraphs = document.getElementsByTagName("p");
let header1 = document.getElementsByTagName("h1");
let header3 = document.getElementsByTagName("h3");

function changedText(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].textContent = "New text";
    };
};

changedText(paragraphs);
changedText(header1);
changedText(header3);