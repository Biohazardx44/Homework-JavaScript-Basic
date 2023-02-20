let button = $("#button");

button.after("<h1></h1>");
button.click(function () {
    $("h1").text("");
    $("h3").text("");
    if ($("#text").val() === "" || $("color").val() === "") {
        $("h3").text("Error! Invalid text or color!");
    } else {
        $("h1").css("color", `${$("#color").val()}`).text(`${$("#text").val()}`);
    }
});