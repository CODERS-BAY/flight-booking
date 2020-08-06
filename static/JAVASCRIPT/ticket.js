let depAp;let arrAp;let date;let passenger;let flightID;let business;
let seats;let firstNames;let lastNames;let fName;let lName;let bookedClass;
let depTime;let arrTime;let dateArray;let depTimeArray;let arrTimeArray;

$(document).ready(function () {
    console.log('ticket.js loaded');

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);

    date = url.searchParams.get("date");
    console.log(date);
    dateArray = date.split('T');
    console.log(dateArray);
    depAp = url.searchParams.get("depAp");
    arrAp = url.searchParams.get("arrAp");
    depTime = url.searchParams.get("depTime");
    console.log(depTime);
    depTimeArray = depTime.split(',');
    arrTime = url.searchParams.get("arrTime");
    console.log(arrTime);
    arrTimeArray = arrTime.split(',');
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

    if(business == 1){
        bookedClass = "Business";
    }else if(business == 0){
        bookedClass = "Economy";
    }

    generateTickets(passenger);
});


function generateTickets(persons) {
    let i = 0;

    for (i; i < persons; i++) {

        $('#ticketAllContainer').append("" +
            "<div class='container ticketContainer'>"+
                "<div class='row ticketRow'>" +
                    "<div class='col-6'><img src='static/IMAGES/coders.air.png' alt='logo' height='50px'></div>" +
                    "<div class='col-6'>BOARDING PASS</div>" +
                "</div>" +
                "<div class='row ticketRow'>" +
                    "<div class='col-4'><h4>Name of Passenger: </br>"+ fName[i] +" "+ lName[i] +"</h4></div>" +
                    "<div class='col-4'><h4>Flight No: </br>"+ flightID +"</h4></div>" +
                    "<div class='col-4'><h4>Class: </br> "+ bookedClass +"</h4></div>" +
                "</div>" +
                "<div class='row ticketRow'>" +
                    "<div class='col-4'><h4>From: "+ depAp +" </br> To: "+ arrAp +" </h4></div>" +
                    "<div class='col-4'><h4>Date: "+ dateArray[0]+" </br> "+ depTimeArray[2] + " -"+ arrTimeArray[2] +"</h4></div>" +
                    "<div class='col-4'><h4>Seat: </br> "+ takenSeats[i] +"</h4></div>" +
                "</div>"+
                "<div class='row ticketRow'>" +
                    "<div class='col-6' style='color: darkorange; font-size: 1.25rem; font-family: Roboto, sans-serif;'>GATE </br>CB20</div>" +
                    "<div class='col-6' style='color: darkorange; font-size: 1.25rem; font-family: Roboto, sans-serif;' >DEPARTURE TIME </br>"+ depTimeArray[2] + "</div>" +
                "</div>" +
            "</div>" +
            "<p>&nbsp;</p>"
        );
    }


}