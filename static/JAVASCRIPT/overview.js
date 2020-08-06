let depAp;
let arrAp;
let date;
let passenger;
let flightID;
let business;
let seats;
let firstNames;
let lastNames;
let depTime;
let arrTime;
let price;

$(document).ready(function () {

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);

    date = url.searchParams.get("date");
    depAp = url.searchParams.get("depAp");
    arrAp = url.searchParams.get("arrAp");
    passenger = url.searchParams.get("passenger");
    flightID = url.searchParams.get("flightID");
    business = url.searchParams.get("business");
    bookedSeats = url.searchParams.get("bookedSeats");
    depTime = url.searchParams.get("depTime");
    arrTime = url.searchParams.get("arrTime");
    firstNames = url.searchParams.get("firstNames");
    lastNames = url.searchParams.get("lastNames");
    price = url.searchParams.get("price");

    let flightClass;

    let endPrice = price * passenger;

    if (business == 1) {
            flightClass = "Business";
    } else {
        flightClass = "Economy"
    }



    $('#orderData').append("<div class='col-12 passengerRow'>" +
        "<ul><li><h3>" + depAp + " - " + arrAp + "</h3></li><h3>" +
        "<li class='overview'>" + "Flug ID : " + flightID + "</li>" +
        "<li class='overview'>" + "Passagiere : " + passenger + "</li>" +
        "<li class='overview'>" + "Klasse : " + flightClass + "</li>" +
        "<li class='overview'>" + "Sitzpl&auml;tze : " + bookedSeats + "</li>" +
        "<li class='overview'>" + "Preis : " + endPrice + "&#8364;" + "</li>" +
        "</ul>" +
        "</div>");

});

$('#ticketButton').on('click', function () {

    location.href  = "ticket.html?&date=" + date + "&firstNames=" + firstNames + "&lastNames=" + lastNames + "&passenger="  + passenger + "&depTime=" + depTime + "&arrTime=" + arrTime +
                     "&bookedSeats="  + bookedSeats + "&flightID=" + flightID + "&business=" + business + "&depAp=" + depAp + "&arrAp=" + arrAp;

});
