let button = $("#button");

button.after("<h1></h1>");
button.click(function () {
    $("h1").text(`Hello there ${$("#inputName").val()}!`);
});