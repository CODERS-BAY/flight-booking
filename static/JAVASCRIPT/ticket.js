let depAp;let arrAp;let date;let passenger;let flightID;let business;
let seats;let firstNames;let lastNames;let fName;let lName;let bookedClass;
let depTime;let arrTime;let dateArray;let depTimeArray;let arrTimeArray;

$(document).ready(function () {
    console.log('ticket.js loaded');

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);

    date = url.searchParams.get("date");
    dateArray = date.split('T');
    depAp = url.searchParams.get("depAp");
    arrAp = url.searchParams.get("arrAp");
    depTime = url.searchParams.get("depTime");
    depTimeArray = depTime.split(',');
    arrTime = url.searchParams.get("arrTime");
    arrTimeArray = arrTime.split(',');
    passenger = url.searchParams.get("passenger");
    flightID = url.searchParams.get("flightID");
    business = url.searchParams.get("business");
    seats = url.searchParams.get("bookedSeats");
    takenSeats = seats.split(',');
    firstNames = url.searchParams.get("firstNames");
    fName = firstNames.split(',');
    lastNames = url.searchParams.get("lastNames");
    lName = lastNames.split(',');

    if(business == 1){
        bookedClass = "Business";
    }else if(business == 0){
        bookedClass = "Economy";
    }
    generateTickets(passenger);

    $('#printButton').on('click', function () {
        window.print();

    });

});

function generateTickets(persons) {
    let i = 0;

    for (i; i < persons; i++) {
        $('#ticketAllContainer').append("" +
            "<div class='container ticketContainer'>"+
                "<div class='row ticketRow'>" +
                    "<div class='col-6'><img src='static/IMAGES/coders.air.png' alt='logo' height='60px'></div>" +
                    "<div class='col-6' style='color: darkorange; font-size: 1.5rem; font-family: Roboto, sans-serif; border-radius: 10px'>BOARDING PASS</div>" +
                "</div>" +
                "<div class='row ticketRow'>" +
                    "<div class='col-5'><h4>Name of Passenger: </br>"+ fName[i] +" "+ lName[i] +"</h4></div>" +
                    "<div class='col-4'><h4>Flight No: </br>"+ flightID +"</h4></div>" +
                    "<div class='col-3'><h4>Class: </br> "+ bookedClass +"</h4></div>" +
                "</div>" +
                "<div class='row ticketRow'>" +
                    "<div class='col-6'><h4>FROM: "+ depAp +" </br> TO:" +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ arrAp +" </h4></div>" +
                    "<div class='col-4'><h4>Date: "+ dateArray[0]+" </br> "+ depTimeArray[2] + " -"+ arrTimeArray[2] +"</h4></div>" +
                    "<div class='col-2'><h4>Seat: </br> "+ takenSeats[i] +"</h4></div>" +
                "</div>"+
                "<div class='row ticketRow'>" +
                    "<div class='col-6' style='color: darkorange; font-size: 1.25rem; font-family: Roboto, sans-serif;'>GATE </br>CB20</div>" +
                    "<div class='col-6' style='color: darkorange; font-size: 1.25rem; font-family: Roboto, sans-serif;' >DEPARTURE TIME </br>"+ depTimeArray[2] + "</div>" +
                "</div>" +
            "</div>" +
            "<p>&nbsp;</p>"
        );
    }
    $('#ticketAllContainer').append("" +
        "<div class='container'>" +
            "<div class='row' id='buttonRow'>" +
            "   <div class='col-3'>" +
            "        <a href='#'><button class='button' id='printButton'>Ticket drucken</button></a>" +
            "   </div>" +
            "</div>" +
        "</div>")
}

