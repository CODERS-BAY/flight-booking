let depAp;
let arrAp;
let date;
let passenger;
let flightID;
let business;
let seats;
let firstNames;
let lastNames;
let fName;
let lName;

$(document).ready(function () {

    //console.log('seat-select.js loaded');


    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);

    date = url.searchParams.get("date");
    depAp = url.searchParams.get("depAp");
    arrAp = url.searchParams.get("arrAp");
    passenger = url.searchParams.get("passenger");
    flightID = url.searchParams.get("flightID");
    business = url.searchParams.get("business");

    seats = url.searchParams.get("bookedSeats");
    console.log(seats);
    takenSeats = seats.split(',');
    console.log(takenSeats);

    firstNames = url.searchParams.get("firstNames");
    console.log(firstNames);
    fName = firstNames.split(',');
    console.log(fName);

    lastNames = url.searchParams.get("lastNames");
    console.log(lastNames);
    lName = lastNames.split(',');
    console.log(lName);


    $('#passengerData').append("<div class='col-12 passengerRow'>" +
        "<h2>" + depAp + " - " + arrAp + "</h2>" +
         "<ul><li></li></ul>" +
        "</div>");

});

$('#ticketButton').on('click', function () {

    location.href  = "ticket.html?&date=" + date + "&firstNames=" + firstNames + "&lastNames=" + lastNames + "&passenger="  + passenger +
                     "&bookedSeats="  + seats + "&flightID=" + flightID + "&business=" + business + "&depAp=" + depAp + "&arrAp=" + arrAp;

});
