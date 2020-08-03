//let takenSeats = [];
$(document).ready(function () {
    console.log('seat-select.js loaded');

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    let bookedSeats = url.searchParams.get("passenger");
    console.log(bookedSeats + " Passenger");

    generatePassengerForm(bookedSeats);
});

function generatePassengerForm(persons) {
    let i = 0;


    $('#paymentData').append("<div class='col-12 passengerRow'>" +
        "<form class='passengerForm'>" +
        "<input id='cardNumber' class='paymentInput' type='text' name='cardNumber' placeholder='Kartennummer' required>" +
        "<input class='paymentInput' type='text' name='validityDate' placeholder='G&uuml;ltigkeitsdatum' required>" +
        "<input class='paymentInput' type='text' name='verififactionNumber' placeholder='CVC' required>" +
        "<input class='paymentInput' type='text' name='cardOwner' placeholder='Karteninhaber' required>" +
        "<select class='paymentInput' for='cardType' name='cardType' ><option value='mastercard'>Mastercard</option><option value='visa'>Visa</option></select> " +
        "</form>" +
        "</div>");



    for (i; i < persons; i++) {

        $('#passengerData').append("<div class='col-12 passengerRow'>" +
            "<form class='passengerForm'>" +
                    "<input class='paymentInput' type='text' name='fistName' placeholder='Vorname' required>" +
                    "<input class='paymentInput' type='text' name='lastName' placeholder='Nachname' required>" +
                    "<input class='paymentInput' type='text' name='street' placeholder='Stra&szlig;e + Hausnummer'>" +
                    "<input class='paymentInput' type='number' name='zip' placeholder='PLZ'>" +
                    "<input class='paymentInput' type='text' name='city' placeholder='Stadt'>" +
                    "<input class='paymentInput' type='text' name='state' placeholder='Land'>" +
                    "<input class='paymentInput' type='email' name='email' placeholder='E-Mail Adresse' required>" +
                    "<input class='paymentInput' type='number' name='phonenumber' placeholder='Telefonnummer'>" +
                "</form>" +
            "</div>");
    }

    $(".passengerRow").css("flex-direction", "column");

}

$("#cardNumber").keyup( function () {
   let cardNumber = $("#cardNumber").val();
   
});
