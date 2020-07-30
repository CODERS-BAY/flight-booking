$(document).ready(function () {
    console.log('seat-select.js loaded');
    generateBusinessSeats();
    generateEconomySeats();

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    let bookedSeats = url.searchParams.get("passenger");
});

//------------------ GENERATE BUSINESS SEATS -------------------//
let rowsBusiness = 8;
let seatsBusiness = 6;
function generateBusinessSeats() {
    let i = 1;
    let j = 1;

    for (i; i <= rowsBusiness; i++) {
        $('#seatBusinessContainer').append("" +
            //"<div class='row'>" +
            "<div class='col-12 rowBusiness'>" +
            getBusinessSeat(seatsBusiness, i) +
            "</div>");
    }
    $(".rowBusiness").css("flex-direction", "row");
}
let rowsEconomy = 20;
let seatsEconomy = 9;
//------------------ GENERATE ECONOMY SEATS -------------------//
function generateEconomySeats() {
    let i = 9;
    let j = 0;
    for (i; i <= rowsEconomy; i++) {
        $('#seatEconomyContainer').append("" +
            //"<div class='row'>" +
            "<div class='col-12 rowEconomy' >" +
            getEconomySeat(seatsEconomy, i) +
            "</div>");
    }

    $(".rowEconomy").css("flex-direction", "row");
}

//------------- JSON SELECTED FLIGHT TO BACKEND -----------------//
function getBusinessSeat(seats, rowNum) {
    let row = "";
    let number = rowNum;
    let alphabet = getAlphabet('A', 'Z'); // ["a", ..., "z"]

    for(let i = 1; i <= seats; i++){
        let id = alphabet[i-1];
        let number = rowNum;
        // row += "<div class='seatBusiness' id='"+ id + "" + number + "' data-id='"+ id + "" + number + "'><strong>" + id + "</strong>" + rowNum + "</div>";
        row += "<div class='seatBusiness' id='seatBusiness' data-id='"+ id + "" + number + "'><strong>" + id + "</strong>" + rowNum + "</div>";
    }
    return row;
}

function getEconomySeat(seats, rowNum) {
    let row = "";
    let alphabet = getAlphabet('A', 'Z'); // ["a", ..., "z"]
    for(let i = 1; i <= seats; i++){
        let id = alphabet[i-1];
        let number = rowNum;
        row += "<div class='seatEconomy' data-id='"+ id + "" + number + "'><strong>" + id + "</strong>" + rowNum + "</div>";
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

$('#seatBusiness').each(function() {
    $(this).click(function() {

        let test = $(this).attr('data-id');
        console.log(test);

    });
});