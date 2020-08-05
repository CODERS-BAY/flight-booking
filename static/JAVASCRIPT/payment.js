let bookedSeats;
let takenSeats;
let flightId;
let business;
$(document).ready(function () {
    console.log('seat-select.js loaded');

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    bookedSeats = url.searchParams.get("passenger");
    flightId = url.searchParams.get("flightID");
    business = url.searchParams.get("business");
    console.log(bookedSeats + " Passenger");

    let string = url.searchParams.get("seats");
    console.log(string);
    takenSeats = string.split(',');
    console.log(flightId);

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

    console.log(bookedSeats);


    let cardNumber = $("#cardNumber").val();
    let validityDate = $("#validityDate").val();
    let verNumber = $("#verNumber").val();
    let cardOwner = $("#cardOwner").val();
    let cardTyp = $("#cardSelect").val();


        let passenger = [];
        let i = 0;

        for (i; i < bookedSeats; i++) {

            let fnameId = "firstname-" + i;
            let lnameId = "lastname-" + i;
            let streetId = "street-" + i;
            let zipId = "zip-" + i;
            let cityId = "city-" + i;
            let stateId = "state-" + i;
            let emailId = "email-" + i;
            let phoneId = "phone-" + i;

            passenger[i] = {
                "firstName": $("#" + fnameId).val(),
                "lastName": $("#" + lnameId).val(),
                "postCode": $("#" + zipId).val(),
                "streetNumber": $("#" + streetId).val(),
                "city": $("#" + cityId).val(),
                "state": $("#" + stateId).val(),
                "email": $("#" + emailId).val(),
                "phoneNumber": $("#" + phoneId).val()
            };

            //console.log(passenger[i]);

        }

    console.log(flightId);

        let paymentData = {
            "payment": {
                "cardNumber": cardNumber, "validityDate": validityDate,
                "verificationNumber": verNumber, "cardOwner": cardOwner,
                "cardType": cardTyp
            },
            "passengers": passenger,
            "seats" : takenSeats,
            "flightId": flightId,
            "business" : business

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

});
