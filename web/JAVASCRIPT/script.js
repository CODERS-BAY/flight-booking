
$(document).ready(function () {
    console.log("js loaded");
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


    $.getJSON( "http://lisacarina.at/bfi/flights.json", function( data ) {

        console.log(data[0]);
        var items = [];
        for (i = 0; i <= data.length; i++) {
            $("#airportContainer").append("<li>" + data[i]["city"] + "</li>");
            console.log(data[i]['city']);
        }
    });

}

$("#depAirport").keyup( function () {


});