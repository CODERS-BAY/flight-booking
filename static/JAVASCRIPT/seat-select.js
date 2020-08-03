let takenSeats = [];
let bookedSeats;
let chosenSeats = 0;
$(document).ready(function () {
    console.log('seat-select.js loaded');

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    bookedSeats = url.searchParams.get("passenger");
    console.log(bookedSeats + " Passenger");


    // $('.seatBusiness').on('click', function () {
    //     console.log('Klick');
    //     let test = $(this).attr('data-id');
    //     console.log(test);
    //
    // });

    getTakenSeatsFromJson();
    // console.log(takenSeats);

});



function getTakenSeatsFromJson() {

    $.ajax({
        url: "http://lisacarina.at/bfi/seat.json",
        // url:  "http://localhost:8080/FlightBooking/api/getAvailableSeats",
        method: "POST",
        success: function (seatData) {
            for (let i = 0; i < seatData.length; i++) {
                //console.log(seatData);

                // takenSeats.push(seatData[i]);
                takenSeats.push(seatData[i]['seatNumber']);
                //takenSeats.push(seat);

            }
            generateBusinessSeats();
            generateEconomySeats();
            //console.log(takenSeats.length);

        },
        error: function (xhr, status, error) {
            let errorMessage = xhr.status + ': ' + xhr.statusText
            console.log('Error - ' + errorMessage);

        }
    });

}

//------------------ GENERATE BUSINESS SEATS -------------------//
let rowsBusiness = 8;
let seatsBusiness = 6;

function generateBusinessSeats() {
    let i = 1;
    let j = 1;
    // console.log(takenSeats);
    // console.log(takenSeats.length);
    for (i; i <= rowsBusiness; i++) {
        let row = $("<div class='rowBusiness'></div>");
        $('#seatBusinessContainer').append(row);

        getBusinessSeat(seatsBusiness, i, row);
    }
    $(".rowBusiness").css("flex-direction", "row");
}

function getBusinessSeat(seats, rowNum, row) {

    let seat;
    //let number = rowNum;
    let alphabet = getAlphabet('A', 'Z'); // ["a", ..., "z"]
    // console.log(takenSeats);

    for (let i = 1; i <= seats; i++) {
        let found = false;
        let id = alphabet[i - 1];
        let number = rowNum;

        for (let k = 0; k < takenSeats.length; k++) {
            // console.log(k);
            // console.log(takenSeats[k]);

            if (takenSeats[k] == (id + number)) {
                found = true;
            }
        }

        if (found) {
            seat = "<div class='seatBusiness seatTaken' id='" + id + "" + number + "' data-id='" + id + "" + number + "'>" + id + rowNum + "</div>";
        } else {
            seat = $("<div class='seatBusiness seatFree' id='" + id + "" + number + "' data-id='" + id + "" + number + "'>" + id + rowNum + "</div>");

            $(seat).click(function () {
                chosenSeats ++;
                let seatID = $(this).data('id');
                console.log(chosenSeats);
                console.log(bookedSeats);

                    $('#seatResult').append("<li>" + seatID + "</li>");
                    $(this).addClass("select");
                if (chosenSeats >  bookedSeats){

                    let seatNumber = $("#seatResult li:first-of-type").text();
                    $("#seatResult li:first-of-type").remove();
                    $('#' +seatNumber).removeClass("select");
                    $('#paymentButton').attr("disabled", false);
                }


            });
        }

        $(row).append(seat);

    }
}


//------------------ GENERATE ECONOMY SEATS -------------------//
let rowsEconomy = 20;
let seatsEconomy = 9;

function generateEconomySeats() {
    let i = 9;
    let j = 0;

    for (i; i <= rowsEconomy; i++) {
        let row = $("<div class='rowEconomy'></div>");
        $('#seatEconomyContainer').append(row);

        getEconomySeat(seatsEconomy, i, row);
    }
    $(".rowEconomy").css("flex-direction", "row");

}


function getEconomySeat(seats, rowNum, row) {
    let seat;
    //let number = rowNum;
    let alphabet = getAlphabet('A', 'Z'); // ["a", ..., "z"]
    // console.log(takenSeats);

    for (let i = 1; i <= seats; i++) {
        let found = false;
        let id = alphabet[i - 1];
        let number = rowNum;

        for (let k = 0; k < takenSeats.length; k++) {
            // console.log(k);
            // console.log(takenSeats[k]);

            if (takenSeats[k] == (id + number)) {
                found = true;
            }
        }

        if (found) {
            seat = "<div class='seatEconomy seatTaken' id='" + id + "" + number + "' data-id='" + id + "" + number + "'>" + id + rowNum + "</div>";
        } else {
            seat = $("<div class='seatEconomy seatFree' id='" + id + "" + number + "' data-id='" + id + "" + number + "'>" + id + rowNum + "</div>");

            $(seat).click(function () {
                chosenSeats ++;
                let seatID = $(this).data('id');
                console.log(chosenSeats);
                console.log(bookedSeats);

                $('#seatResult').append("<li>" + seatID + "</li>");
                $(this).addClass("select");
                if (chosenSeats >  bookedSeats){

                    let seatNumber = $("#seatResult li:first-of-type").text();
                    $("#seatResult li:first-of-type").remove();
                    $('#' +seatNumber).removeClass("select");
                    $('#paymentButton').attr("disabled", false);
                }


            });
        }
        $(row).append(seat);
    }
}

function getAlphabet(first, last) {
    let alphabet = [];
    for (let z = first.charCodeAt(0); z <= last.charCodeAt(0); ++z) {
        alphabet.push(String.fromCharCode(z));
    }
    return alphabet;
}

$('#paymentButton').on('click', function () {

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    let passenger = url.searchParams.get("passenger");

    location.href = "payment.html?passenger=" + passenger;

});


