let bookedSeats;
let takenSeats;
let business;
let flight;
let flightID;
let depIac;
let arrIac;
let depAp;
let arrAp;
let date;
let passenger;
let ticketId;

$(document).ready(function () {
    console.log('ticket.js loaded');


    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);

    depIac = url.searchParams.get("depIac");
    arrIac = url.searchParams.get("arrIac");
    date = url.searchParams.get("date");
    depAp = url.searchParams.get("depAp");
    arrAp = url.searchParams.get("arrAp");
    passenger = url.searchParams.get("passenger");
    flightID = url.searchParams.get("flightID");
    console.log(flightID);
    console.log(passenger);
    business = url.searchParams.get("business");

    // let string = url.searchParams.get("bookedSeats");
    // console.log(string);
    // takenSeats = string.split(',');
    // console.log(takenSeats);

    // generateTickets(passenger);
    generateTickets();
});




function generateTickets(persons) {
    let i = 0;

    for (i; i < persons; i++) {

        $('#ticketAllContainer').append("" +
            "<div class='container' id='ticketContainer'>"+
                "<div class='row ticketRow'>" +
                    "<div class='col-6'><img src='static/IMAGES/coders.air.png' alt='logo' height='50px'></div>" +
                    "<div class='col-6'>BOARDING PASS</div>" +
                "</div>" +
                "<div class='row ticketRow'>" +
                    "<div class='col-4'><h4>Name of Passenger: </br>Hans Wurst</h4></div>" +
                    "<div class='col-4'><h4>Flight No: </br> 251541</h4></div>" +
                    "<div class='col-4'><h4>Class: </br> Business</h4></div>" +
                "</div>" +
                "<div class='row ticketRow'>" +
                    "<div class='col-4'><h4>From: </br> To: </h4></div>" +
                    "<div class='col-4'><h4>Date: </br> 01/08/2020</h4></div>" +
                    "<div class='col-4'><h4>Seat: </br> 5C</h4></div>" +
                "</div>"+
                "<div class='row ticketRow'>" +
                    "<div class='col-6' style='color: darkorange; font-size: 1.25rem; font-family: Roboto, sans-serif;'>GATE </br>CB20</div>" +
                    "<div class='col-6' style='color: darkorange; font-size: 1.25rem; font-family: Roboto, sans-serif;' >BOARDING TIME </br>07:20</div>" +
                "</div>" +
            "</div>"
        );
    }


}