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
let seats;

$(document).ready(function () {
    console.log('seat-select.js loaded');


    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);

    depIac = url.searchParams.get("depIac");
    arrIac = url.searchParams.get("arrIac");
    date = url.searchParams.get("date");
    depAp = url.searchParams.get("depAp");
    arrAp = url.searchParams.get("arrAp");
    bookedSeats = url.searchParams.get("bookedSeats");
    flightID = url.searchParams.get("flightID");
    console.log(flightID);
    business = url.searchParams.get("business");
    //console.log(bookedSeats + " Passenger");

    let string = url.searchParams.get("seats");
    console.log(string);
    takenSeats = string.split(',');
    console.log(takenSeats);

    generatePassengerForm(bookedSeats);
});

function generatePassengerForm(persons) {
    let i = 0;

    for (i; i < persons; i++) {

        $('#passengerData').append("<div class='col-12 passengerRow'>" +
            "<form class='passengerForm'>" +
                    "<input id='firstname-" + i + "' class='paymentInput' type='text' name='fistName' placeholder='Vorname' required>" +
                    "<input id='lastname-" + i + "' class='paymentInput' type='text' name='lastName' placeholder='Nachname' required>" +
                    "<input id='street-" + i + "' class='paymentInput' type='text' name='street' placeholder='Stra&szlig;e + Hausnummer'>" +
                    "<input id='zip-" + i + "' class='paymentInput' type='number' name='zip' placeholder='PLZ'>" +
                    "<input id='city-" + i + "' class='paymentInput' type='text' name='city' placeholder='Stadt'>" +
                    "<input id='state-" + i + "' class='paymentInput' type='text' name='state' placeholder='Land'>" +
                    "<input id='email-" + i + "' class='paymentInput' type='email' name='email' placeholder='E-Mail Adresse' required>" +
                    "<input id='phone-" + i + "' class='paymentInput' type='number' name='phonenumber' placeholder='Telefonnummer'>" +
                "</form>" +
            "</div>");
    }

    $(".passengerRow").css("flex-direction", "column");

}

$("#cardNumber").keyup( function () {
   let cardNumber = $("#cardNumber").val();
   //console.log(cardNumber);
   let cardType = cardNumber.charAt(0);
   //console.log(cardType);
    if (cardType == "5") {
        $("#paymentData #cardSelect #mastercard").attr('selected','selected');
    }
    else if (cardType == "4") {
        $("#paymentData #cardSelect #visa").attr('selected','selected');
    } else {
        $("#paymentData #cardSelect #noCard").attr('selected','selected');
    }
});

console.log(takenSeats);

$("#payButton").click( function () {




    let cardNumber = $("#cardNumber").val();
    let validityDate = $("#validityDate").val();
    let verNumber = $("#verNumber").val();
    let cardOwner = $("#cardOwner").val();
    let cardTyp = $("#cardSelect").val();


        let passenger = [];
        let i = 0;

        for (i; i < passenger; i++) {

            let fnameId = "firstname-" + i;
            let lnameId = "lastname-" + i;
            let streetId = "street-" + i;
            let zipId = "zip-" + i;
            let cityId = "city-" + i;
            let stateId = "state-" + i;
            let emailId = "email-" + i;
            let phoneId = "phone-" + i;

            passenger[i] = {
                "firstname": $("#" + fnameId).val(),
                "lastname": $("#" + lnameId).val(),
                "postCode": $("#" + zipId).val(),
                "street": $("#" + streetId).val(),
                "city": $("#" + cityId).val(),
                "state": $("#" + stateId).val(),
                "email": $("#" + emailId).val(),
                "phone": $("#" + phoneId).val()
            };

            //console.log(passenger[i]);
            console.log(passenger);

        }

    console.log(takenSeats);

        let paymentData = {
            "payment": {
                "cardNumber": cardNumber, "validityDate": validityDate,
                "verificationNumber": verNumber, "cardOwner": cardOwner,
                "cardTyp": cardTyp
            },
            "passengers": passenger,
            "seats" : takenSeats,
            "flightId": flightID ,
            "business" : business ,
        };

        console.log(paymentData);
        let temp = JSON.stringify(paymentData);
        console.log(temp);

    $.ajax({
        url: 'http://localhost:8080/FlightBooking/api/createTickets',
        type: "post",
        data: temp,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            let ticketId = data;

            //location.href  = "order-overview.html?ticketId=" + ticketId;
        }
    });

    location.href = "order-overview.html?depIac=" + depIac + "&arrIac=" + arrIac + "&date=" + date +
        "&bookedSeats=" + bookedSeats + "&flightID=" + flightID + "&business=" + business + "&depAp=" + depAp + "&arrAp=" + arrAp + "&takenSeats=" + takenSeats;

});



$('#prevButton').on('click', function () {

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);

    location.href = "seat-select.html?depIac=" + depIac + "&arrIac=" + arrIac + "&date=" + date +
        "&bookedSeats=" + bookedSeats + "&flightID=" + flightID + "&business=" + business + "&depAp=" + depAp + "&arrAp=" + arrAp;
});
