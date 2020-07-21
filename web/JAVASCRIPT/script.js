$(document).ready(function () {
    //console.log("js loaded");
    get_json("hallo");

    $(".loginButton").click(function () {

        $(".popUp").css("display", "block");
        $(".greyBg").css("display", "none");
    });

    $(".fa-times").click(function () {

        $(".popUp").css("display", "none");
        $(".greyBg").css("display", "block");
    });
});

function get_json(url) {

    $.getJSON("http://lisacarina.at/bfi/flights.json", function (data) {

        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            $("#depAirportList").append("<li data-city='" + data[i]['city'].toLowerCase() + "'data-iac='" + data[i]['IAC'].toLowerCase() + "' data-name='" + data[i]['name'].toLowerCase() + "' " +
                "data-state='" + data[i]['state'].toLowerCase() + "' >" + data[i]['name'] + "<strong> (" + data[i]['IAC'] + ") " + "</strong> " + data[i]['state'].toUpperCase() +" </li>");
        }
    });

};


$("#depAirport").keyup(function () {
    $("#depAirportList").css("display", "none");
    $("#depAirportList li").css("display", "none");
    let inputValue = $(this).val().toLowerCase();
    $("#depAirportList li").each(function () {

        if ($(this).data('name').indexOf(inputValue) > -1 /*|| $(this).data('state').indexOf(inputValue) > -1  */|| $(this).data('iac').indexOf(inputValue) > -1 || $(this).data('city').indexOf(inputValue) > -1){
            $(this).css("display", "block");
        }else {
            $("#depAirportList").css("display", "block")
        }



    });


});


function printallAirports() {
    console.log("Test");
    let container = "<div class='airport_container'>";
    let i = 0;
    for (data in employee) {
        if (i == 0) {
            container += "<p><strong>" + employee[data].toUpperCase() + "</strong></p>";
        } else {
            container += "<p><strong> " + data + ": </strong>" + employee[data] + "</p>";
        }
        i++;
    }
    container += "</div>";
    $('#results').append(container);
};