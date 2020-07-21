$(document).ready(function (loginData) {
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

//-------------------- Flug Suche --------------------//

function get_json(url) {

    $.getJSON("http://lisacarina.at/bfi/flights.json", function (data) {

        for (let i = 0; i < data.length; i++) {
            //console.log(data[i]);
            $("#depAirportList").append("<li data-city='" + data[i]['city'].toLowerCase() + "'data-iac='" + data[i]['IAC'].toLowerCase() + "' data-name='" + data[i]['name'].toLowerCase() + "' " +
                "data-state='" + data[i]['state'].toLowerCase() + "' >" + data[i]['name'] + "<strong> (" + data[i]['IAC'] + ") " + "</strong> " + data[i]['state'].toUpperCase() + " </li>");
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

//-------------------- Login --------------------//

$("#login").submit(function (e) {

    e.preventDefault()
    let userEmail = $("#email").val();

    let loginData = {"email": userEmail, "password": $("#password").val()};

    $.ajax ({
        type: "post",
        data: loginData,
        url: "http://lisacarina.at/bfi/login.json",
        success: function() {
            setCookie("email", $("#email").val(), 20);
            $(".loginButton").css("display", "none");
            $(".logoutButton").css("display", "block");
        }
    })
});

//-------------------- Logout --------------------//

$(".logoutButton").click( function () {
    deleteCookie("email");
    $(".loginButton").css("display", "block");
    $(".logoutButton").css("display", "none");
    $(".popUp").css("display", "none");
    $(".greyBg").css("display", "block");
});

//------------------ Set Cookie -------------------//

function setCookie(cname, cvalue, exdays) {
    //console.log(cname);
    //console.log(cvalue);
    //console.log(exdays);
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
    console.log("cookie saved");
}

//------------------ Delete Cookie -------------------//

function deleteCookie(cname) {

    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    console.log("Cookie deleted");

}










