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


    for (i; i < persons; i++) {

        $('#passengerData').append("<div class='col-12 passengerRow'>" +
            "<form class='passengerForm'>" +
                    "<input type='text' name='fistName' placeholder='Vorname' required>" +
                    "<input type='text' name='lastName' placeholder='Nachname' required>" +
                    "<input type='text' name='street' placeholder='Stra&szlig;e + Hausnummer' required>" +
                    "<input type='number' name='zip' placeholder='PLZ' required>" +
                    "<input type='text' name='city' placeholder='Stadt' required>" +
                    "<input type='text' name='state' placeholder='Land' required>" +
                    "<input type='email' name='email' placeholder='E-Mail Adresse' required>" +
                    "<input type='number' name='phonenumber' placeholder='Telefonnummer' required>" +
                "</form>" +
            "</div>");
    }

    $(".passengerRow").css("flex-direction", "column");

}
