$(document).ready(function (loginData) {
    console.log("js loaded");


    generateBusinessSeats();
    generateECONOMYSeats()
    let userLogin = true;
    if (userLogin == true) {

        $(".loginButton").css("display", "none");
        $(".logoutButton").css("display", "block");
    }

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

//-------------------- JSON FOR FLIGHT SEARCH --------------------//


function get_json(url) {

    $.getJSON("http://lisacarina.at/bfi/flights.json", function (data) {
        for (let i = 0; i < data.length; i++) {
            //console.log(data[i]);
            $("#depAirportList").append("<li data-id='" + i + "' data-city='" + data[i]['city'].toLowerCase() + "'data-iac='" + data[i]['IAC'].toLowerCase() + "' data-name='" + data[i]['name'].toLowerCase() + "' " +
                "data-state='" + data[i]['state'].toLowerCase() + "' class='text' >" + data[i]['name'] + "<strong> (" + data[i]['IAC'] + ") " + "</strong> " + data[i]['state'].toUpperCase() + " </li>");
            // ---- nur zum TESTEN --- //
            $("#arrAirportList").append("<li data-id='" + i + "' data-city='" + data[i]['city'].toLowerCase() + "'data-iac='" + data[i]['IAC'].toLowerCase() + "' data-name='" + data[i]['name'].toLowerCase() + "' " +
                "data-state='" + data[i]['state'].toLowerCase() + "' class='text' >" + data[i]['name'] + "<strong> (" + data[i]['IAC'] + ") " + "</strong> " + data[i]['state'].toUpperCase() + " </li>");
            let iac = data[i]['IAC'];
            console.log(iac);
        }
    });
    // $.ajax({
    //     url: 'http://lisacarina.at/bfi/flights.json',
    //     //url: 'http://localhost:8080/FlightBooking/api/getAllAirports',
    //     method: "POST",
    //     success: function (data) {
    //         $.each(data, function (key, airport) {
    //             console.log(airport.city);
    //             $("#depAirportList").append("<li data-id='" + key + "' data-city='" + airport.city.toLowerCase() + "'data-iac='" + airport.IAC.toLowerCase() + "' data-name='" + airport.name.toLowerCase() + "' " +
    //                 "data-state='" + airport.state.toLowerCase() + "' class='text' >" + airport.name + "<strong> (" + airport.IAC + ") " + "</strong> " + airport.state.toUpperCase() + " </li>");
    //
    //             $("#arrAirportList").append("<li data-id='" + key + "' data-city='" + airport.city.toLowerCase() + "'data-iac='" + airport.iac.toLowerCase() + "' data-name='" + airport.name.toLowerCase() + "' " +
    //                 "data-state='" + airport.state.toLowerCase() + "' class='text' >" + airport.name + "<strong> (" + airport.IAC + ") " + "</strong> " + airport.state.toUpperCase() + " </li>");
    //         });
    //     },
    //     error: function (xhr, status, error) {
    //         var errorMessage = xhr.status + ': ' + xhr.statusText
    //         console.log('Error - ' + errorMessage);
    //     }
    // });
}

//-------------------- DEPARTURE AIRPORT --------------------//
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
        checkInputValue()
    });
});

$("#depAirportList").on('click', 'li', function () {
    let depIAC = $(this).attr('data-iac');
    let depAirport = $(this).text();

    $('#depAirport').val(depAirport);

    $('#depAirport').attr({'data-iac': depIAC});
    //$('#depAirport').('iac', depIAC);
    $("#depAirportList").css("display", "none");

    let data = {depIAC};
    $.ajax({
        type: "post",
        data: data,
        url: "http://lisacarina.at/bfi/login.json",
        success: function () {
            console.log('TEST')
        }
    })
});

//-------------------- ARRIVAL AIRPORT --------------------//
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
        checkInputValue()
    });
});

$("#arrAirportList").on('click', 'li', function () {
    let arrID = $(this).attr('data-iac');
    let arrAirport = $(this).text();

    $('#arrAirport').val(arrAirport);
    $('#arrAirport').attr({'data-iac': arrID});
    $("#arrAirportList").css("display", "none");
});

//-------------------- Login --------------------//
$("#login").submit(function (e) {

    e.preventDefault()
    let userEmail = $("#email").val();
    let loginData = {"email": userEmail, "password": $("#password").val()};

    $.ajax({
        type: "post",
        data: loginData,
        url: "http://lisacarina.at/bfi/login.json",
        success: function () {
            setCookie("email", $("#email").val(), 20);
            $(".loginButton").css("display", "none");
            $(".logoutButton").css("display", "block");
        }
    })
});

//-------------------- Logout --------------------//
$(".logoutButton").click(function () {

    deleteCookie("email");
    $(".loginButton").css("display", "block");
    $(".logoutButton").css("display", "none");
    $(".popUp").css("display", "none");
    $(".greyBg").css("display", "block");
});

//-------------------- SEARCHBUTTON ONCLICK --------------------//
$('#searchButton').on('click', function (url) {
    urlCreator();
    $('#searchButton').append("<a href='" + url + "'</a>");


});

//-------------------- FUNCTIONS --------------------//

//------------------ Set Cookie -------------------//
function setCookie(cname, cvalue, exdays) {
    //console.log(cname);
    //console.log(cvalue);
    //console.log(exdays);
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
    console.log("cookie saved");
}

//------------------ Delete Cookie -------------------//
function deleteCookie(cname) {

    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    //console.log("Cookie deleted");
}

//------------------ CREATE URL -------------------//
function urlCreator() {
    $('#searchButton').attr('href', function (index, href) {
        const url = new URL("file:///C:/xampp/Project/flight-booking/WEB-INF/flightselect.html");
        console.log(url);
        url.searchParams.append('dep', $('#depAirport').attr('data-iac'));
        url.searchParams.append('arr', $('#arrAirport').attr('data-iac'));
        console.log(url);
        return url;
    });
}

//------------------ CHECK INPUTVALUE FOR SEARCHBUTTON -------------------//
function checkInputValue() {

    if ($('#depAirport').val().length != 0 && $('#arrAirport').val().length != 0) {
        $('#searchButton').attr("disabled", false);
    } else {
        $('#searchButton').attr("disabled", true);
    }
}

//------------------ GENERATE BUSINESS SEATS -------------------//

let rowsBusiness = 8;
let columnsBusiness = 1;
let seatsBusiness = 6;
function generateBusinessSeats() {

    function getAlphabet(first, last) {
        let alphabet = [];

        for (let z = first.charCodeAt(0); z <= last.charCodeAt(0); ++z) {
            alphabet.push(String.fromCharCode(z));
        }

        return alphabet;
    }

    // Calling the function
    let alphabet = getAlphabet('A', 'Z'); // ["a", ..., "z"]
    console.log(alphabet);
    // Printing the array inside the .letters element
    $.each(alphabet, function (index, element) {
        $(".columnBusiness").append("<div>" + element + "</div>");
    });

    let i = 1;
    let j = 1;
    let k = 1;
    let l = 1;


    for (i = 1; i <= rowsBusiness; i++) {
        $('#seatBusinessContainer').append("<div class='col-12 rowBusiness' id='rowBusiness" + i + "'><!--"+ i +"--></div>");
    }
    for (j = 1; j <= columnsBusiness; j++) {
       $('.rowBusiness').append("<div class='col-12 columnBusiness ' id='columnBusiness" + j + "'></div>");
    }

    for (k = 0; k < seatsBusiness; k++) {
        for (let l = 1; l < rowsBusiness; l++) {
        }
        $('.columnBusiness').append("<div class='seatBusiness' id='seatBusiness" + k + "'>" + alphabet[k] + "</div>");
    }

    $(".rowBusiness").css("flex-direction", "row");
    $(".columnBusiness").css("display", "flex", "flex-direction", "row");


}

//------------------ GENERATE ECONOMY SEATS -------------------//
function generateECONOMYSeats() {

    function getAlphabet(first, last) {
        let alphabet = [];

        for (let z = first.charCodeAt(0); z <= last.charCodeAt(0); ++z) {
            alphabet.push(String.fromCharCode(z));
        }

        return alphabet;
    }

    // Calling the function
    let alphabet = getAlphabet('A', 'Z'); // ["a", ..., "z"]
    console.log(alphabet);
    // Printing the array inside the .letters element
    $.each(alphabet, function (index, element) {
       //$(".columnBusiness").append("<div>" + element + "</div>");
    });

    let i = 11;
    let j = 1;
    let k = 1;
    let l = 1;
    let rowsEconomy = 20;
    let columnsEconomy = 1;
    let seatsEconomy = 9;

    for (i; i <= rowsEconomy; i++) {
        $('#seatEconomyContainer').append("<div class='col-12 rowEconomy' id='rowEconomy" + i + "'><!--"+ i +"--></div>");
    }
    for (j = 1; j <= columnsEconomy; j++) {
        $('.rowEconomy').append("<div class='col-12 columnEconomy ' id='columnEconomy" + j + "'></div>");
    }

    for (k = 0 ; k < seatsEconomy; k++) {
        for (l = 1; l < rowsEconomy; l++) {
        }
        $('.columnEconomy').append("<div class='seatEconomy' id='seatEconomy" + k + "'>" + alphabet[k] + "</div>");
    }

    $(".rowEconomy").css("flex-direction", "row");
    $(".columnEconomy").css("display", "flex", "flex-direction", "row");


}