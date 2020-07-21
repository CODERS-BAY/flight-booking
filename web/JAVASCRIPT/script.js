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

 // ------ DEPARTURE AIRPORT -----//

function get_json(url) {

    $.getJSON("http://lisacarina.at/bfi/flights.json", function (data) {

        for (let i = 0; i < data.length; i++) {
            //console.log(data[i]);
            $("#depAirportList").append("<li data-id='" + i + "' data-city='" + data[i]['city'].toLowerCase() + "'data-iac='" + data[i]['IAC'].toLowerCase() + "' data-name='" + data[i]['name'].toLowerCase() + "' " +
                "data-state='" + data[i]['state'].toLowerCase() + "' class='text' >" + data[i]['name'] + "<strong> (" + data[i]['IAC'] + ") " + "</strong> " + data[i]['state'].toUpperCase() + " </li>");

            // ---- nur zum TESTEN --- //
            $("#arrAirportList").append("<li data-id='" + i + "' data-city='" + data[i]['city'].toLowerCase() + "'data-iac='" + data[i]['IAC'].toLowerCase() + "' data-name='" + data[i]['name'].toLowerCase() + "' " +
                "data-state='" + data[i]['state'].toLowerCase() + "' class='text' >" + data[i]['name'] + "<strong> (" + data[i]['IAC'] + ") " + "</strong> " + data[i]['state'].toUpperCase() + " </li>");

        }
    });

};

$("#depAirport").keyup(function () {
    $("#depAirportList").css("display", "none");
    $("#depAirportList li").css("display", "none");
    let inputValue = $(this).val().toLowerCase();
    $("#depAirportList li").each(function () {

        if ($(this).data('name').indexOf(inputValue) > -1 || $(this).data('state').indexOf(inputValue) > -1 || $(this).data('iac').indexOf(inputValue) > -1 || $(this).data('city').indexOf(inputValue) > -1) {
            $(this).css("display", "block");
        } else {
            $("#depAirportList").css("display", "block")
        }
    });
});

$(".dropdownList").on('click','li',function (){
    let depID = ($(this).attr('data-iac'));
    let text = ($(this).text());
    console.log(depID);
    console.log(text);

    $('#depAirport').text(text);

    
});



/*$('.dropdownList li').click(function() {
    console.log("TEST");

    let depIAC = $(this).attr('data-id');
    let depAirport = $(this).find('.text');
    let text = $(depIAC).find('.text').text();


    console.log(depIAC);
    console.log(text);

    $('#depAirport').text(text);

    let textarea = $('#depAirport');
    //console.log($(textarea));
    $(textarea).attr('data-iac');
});*/



    // ------ ARRIVAL AIRPORT -----//


$("#arrAirport").keyup(function () {
    $("#arrAirportList").css("display", "none");
    $("#arrAirportList li").css("display", "none");
    let inputValue2 = $(this).val().toLowerCase();
    $("#arrAirportList li").each(function () {

        if ($(this).data('name').indexOf(inputValue2) > -1 || $(this).data('state').indexOf(inputValue2) > -1 || $(this).data('iac').indexOf(inputValue2) > -1 || $(this).data('city').indexOf(inputValue2) > -1) {
            $(this).css("display", "block");
        } else {
            $("#arrAirportList").css("display", "block")
        }
    });
});

