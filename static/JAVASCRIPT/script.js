let allAirports = [];
$(document).ready(function (loginData) {
    console.log("js loaded");
    let date = new Date();
    let month = (date.getMonth() + 1);
    let day = date.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    let today = date.getFullYear() + '-' + month + '-' + day;
    $('#startDate').val(today);
    let userLogin = false;
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
    $.ajax({
        url: 'http://localhost:8080/FlightBooking/api/getAllAirports',
        method: "POST",
        success: function (data) {
            for (let i = 0; i < data.length; i++) {
                $("#depAirportList").append("<li data-id='" + i + "' data-city='" + data[i]['city'].toLowerCase() + "'data-iac='" + data[i]['iac'].toLowerCase() + "' data-name='" + data[i]['name'].toLowerCase() + "' " +
                    "data-state='" + data[i]['state'].toLowerCase() + "' class='text' >" + data[i]['name'] + "<strong> (" + data[i]['iac'] + ") " + "</strong> " + data[i]['state'].toUpperCase() + " </li>");
                allAirports[data[i]['iac']] = {
                    city: data[i]['city'],
                    name: data[i]['name'],
                    state: data[i]['state'],
                };
            }
        },
        error: function (xhr, status, error) {
            let errorMessage = xhr.status + ': ' + xhr.statusText
            console.log('Error - ' + errorMessage);
        }
    });
}

//-------------------- DEPARTURE AIRPORT --------------------//
$("#depAirport").keyup(function () {
    $("#depAirportList").css("display", "none");
    $("#depAirportList li").css("display", "none");
    let airport = false;
    let inputValue = $(this).val().toLowerCase();
    if (inputValue != "") {
        $("#depAirportList li").each(function () {
            if ($(this).data('name').indexOf(inputValue) > -1 || $(this).data('state').indexOf(inputValue) > -1 || $(this).data('iac').indexOf(inputValue) > -1 || $(this).data('city').indexOf(inputValue) > -1) {
                $(this).css("display", "block");
                airport = true;
            };
        });
    }
    checkInputValue();
    if (airport) {
        $('#depAirportList').css("display", "block");
    }
});

$("#depAirportList").on('click', 'li', function () {
    let depIAC = $(this).attr('data-iac').toUpperCase();
    let depAirport = $(this).text();

    $('#depAirport').val(depAirport);
    $('#depAirport').attr('data-iac', depIAC);
    $("#depAirportList").css("display", "none");
    $.ajax({
        type: "post",
        data: depIAC,
        //dataType:'text',
        //contentType: "application/json",
        url: "http://localhost:8080/FlightBooking/api/getArrivalAirports",
        success: function (data) {
            //console.log(data);
            if(data == ""){
                $("#arrAirportList").append("<li><strong>Keine Fl&uuml;ge verf&uuml;gbar!</strong></li>");
            }

            for (let i = 0; i < data.length; i++) {
                let curdata = allAirports[data[i]];
                $("#arrAirportList").append("<li data-id='" + i + "' data-city='" + curdata['city'].toLowerCase() + "'data-iac='" + data[i].toLowerCase() + "' data-name='" + curdata['name'].toLowerCase() + "' " +
                    "data-state='" + curdata['state'].toLowerCase() + "' class='text' >" + curdata['name'] + "<strong> (" + data[i] + ") " + "</strong> " + curdata['state'].toUpperCase() + " </li>");
            }
        },
        error: function (err) {
            console.log(err)
        }
    })
});

//-------------------- ARRIVAL AIRPORT --------------------//
$("#arrAirport").keyup(function () {
    $("#arrAirportList").css("display", "none");
    $("#arrAirportList li").css("display", "none");
    let airport = false;
    let inputValue2 = $(this).val().toLowerCase();
    $("#arrAirportList li").each(function () {
        if (inputValue2 != "") {
            if ($(this).data('name').indexOf(inputValue2) > -1 || $(this).data('state').indexOf(inputValue2) > -1 || $(this).data('iac').indexOf(inputValue2) > -1 || $(this).data('city').indexOf(inputValue2) > -1) {
                $(this).css("display", "block");
                airport = true;
            };
        }
        checkInputValue();
    });
    if (airport) {
        $('#arrAirportList').css("display", "block");
    }
});

$("#arrAirportList").on('click', 'li', function () {
    let arrID = $(this).attr('data-iac').toUpperCase();
    let arrAirport = $(this).text();
    $('#arrAirport').val(arrAirport);
    $('#arrAirport').attr('data-iac', arrID);
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
$('#searchButton').on('click', function () {
    post_json();

});
//-------------------- FUNCTIONS --------------------//
//------------------ Set Cookie -------------------//
function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

//------------------ Delete Cookie -------------------//
function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

//------------------ CHECK INPUTVALUE FOR SEARCHBUTTON -------------------//
function checkInputValue() {
    if ($('#depAirport').val().length != 0 && $('#arrAirport').val().length != 0) {
        $('#searchButton').attr("disabled", false);
    } else {
        $('#searchButton').attr("disabled", true);
    }
}

//------------- JSON SELECTED FLIGHT TO BACKEND -----------------//
function post_json() {
    let depIac = $("#depAirport").data("iac");
    let depAp = $("#depAirport").val();
    let arrIac = $("#arrAirport").data("iac");
    let arrAp = $("#arrAirport").val();
    let date = $("#startDate").val() + "T00:00:00.000Z";
    let passenger  = $("#person").val()

    //----- CREATE URL HREF TO FLIGHTSELECT.HTML -------//
    location.href  = "flightselect.html?depIac=" + depIac + "&arrIac=" + arrIac + "&date=" + date +
        "&passenger=" + passenger + "&depAp=" + depAp + "&arrAp=" + arrAp;

}