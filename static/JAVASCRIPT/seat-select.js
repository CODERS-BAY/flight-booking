//let takenSeats = [];
$(document).ready(function () {
    console.log('seat-select.js loaded');

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    let bookedSeats = url.searchParams.get("passenger");
    console.log(bookedSeats + " Passenger");


    $('.seatBusiness').on('click', function () {
        console.log('Klick');
        // let test = $(this).attr('data-id');
        // console.log(test);

    });
    let takenSeats = getTakenSeatsFromJson();
    console.log(takenSeats);
    generateBusinessSeats(takenSeats);
    generateEconomySeats(takenSeats);

});

function getTakenSeatsFromJson() {
    let takenSeats = [];
    $.ajax({
        url: "http://lisacarina.at/bfi/seat.json",
        method: "POST",
        success: function (seatData) {
            for (let i = 0; i < seatData.length; i++) {
                //console.log(seatData);

                takenSeats.push(seatData[i]['seatNumber']);
                //takenSeats.push(seat);

            }
        },
        error: function (xhr, status, error) {
            let errorMessage = xhr.status + ': ' + xhr.statusText
            console.log('Error - ' + errorMessage);
        }
    });
    console.log(takenSeats);
    return takenSeats;
}

//------------------ GENERATE BUSINESS SEATS -------------------//
let rowsBusiness = 8;
let seatsBusiness = 6;

function generateBusinessSeats(takenSeats) {
    let i = 1;
    let j = 1;
    console.log(takenSeats);
    console.log(takenSeats.length);
    for (i; i <= rowsBusiness; i++) {
        $('#seatBusinessContainer').append("" +
            //"<div class='row'>" +
            "<div class='col-12 rowBusiness'>" +
            getBusinessSeat(seatsBusiness, i, takenSeats) +
            "</div>");
    }
    $(".rowBusiness").css("flex-direction", "row");
}

function getBusinessSeat(seats, rowNum, takenSeats) {
    let found = false;
    let row = "";
    //let number = rowNum;
    let alphabet = getAlphabet('A', 'Z'); // ["a", ..., "z"]
    console.log(takenSeats.length + "Business SITZ");
    for (let i = 1; i <= seats; i++) {
        let id = alphabet[i - 1];
        let number = rowNum;

        for (let k = 0; k < takenSeats.length; k++) {
            console.log(k);
            console.log(takenSeats[k]);

            if (takenSeats[k] == (id + number)) {
                found = true;
            }
        }

        // if (found) {
        row += "<div class='seatBusiness seatdeactivated' id='" + id + "" + number + "' data-id='" + id + "" + number + "'><strong>" + id + "</strong>" + rowNum + "</div>";
        // } else {
        //     row += "<div class='seatBusiness' id='" + id + "" + number + "' data-id='" + id + "" + number + "'><strong>" + id + "</strong>" + rowNum + "</div>";
        // }
    }
    return row;
}


//------------------ GENERATE ECONOMY SEATS -------------------//
let rowsEconomy = 20;
let seatsEconomy = 9;
function generateEconomySeats(takenSeats) {
    let i = 9;
    let j = 0;
    for (i; i <= rowsEconomy; i++) {
        $('#seatEconomyContainer').append("" +
            //"<div class='row'>" +
            "<div class='col-12 rowEconomy' >" +
            getEconomySeat(seatsEconomy, i, takenSeats) +
            "</div>");
    }

    $(".rowEconomy").css("flex-direction", "row");
}



function getEconomySeat(seats, rowNum, takenSeats) {
    let row = "";
    let alphabet = getAlphabet('A', 'Z'); // ["a", ..., "z"]
    for (let i = 1; i <= seats; i++) {
        let id = alphabet[i - 1];
        let number = rowNum;
        row += "<div class='seatEconomy' data-id='" + id + "" + number + "'><strong>" + id + "</strong>" + rowNum + "</div>";
    }
    return row;
}

function getAlphabet(first, last) {
    let alphabet = [];
    for (let z = first.charCodeAt(0); z <= last.charCodeAt(0); ++z) {
        alphabet.push(String.fromCharCode(z));
    }
    return alphabet;
}

$('#prevButton').on('click', function () {

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    let passenger = url.searchParams.get("passenger");

    location.href  = "payment.html?passenger=" + passenger;



});
