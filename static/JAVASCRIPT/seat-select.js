let takenSeats = [];
let selectedSeats = [];
let bookedSeats;
let passenger;
let chosenSeats = 0;
let business;
let flight;
let flightID;
let depIac;
let arrIac;
let depAp;
let arrAp;
let date;
let depTime;
let arrTime;



$(document).ready(function () {

    console.log('seat-select.js loaded');

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    depIac = url.searchParams.get("depIac");
    arrIac = url.searchParams.get("arrIac");
    date = url.searchParams.get("date");
    depAp = url.searchParams.get("depAp");
    arrAp = url.searchParams.get("arrAp");
    passenger = url.searchParams.get("passenger");
    flightID = url.searchParams.get("flightID");
    business = url.searchParams.get("business");
    depTime = url.searchParams.get("depTime");
    arrTime = url.searchParams.get("arrTime");
    console.log(flight);
    console.log(bookedSeats + " Passenger");

    let flightJSON = {flightId : flightID};
    console.log(flightJSON);
    // console.log(takenSeats);

    $(".myFlight").append("<h3>" + depAp +" - "+ arrAp +"</h3>");

    $.ajax({
        url: 'http://localhost:8080/FlightBooking/api/getAvailableSeats',
        type: "post",
        data: JSON.stringify(flightJSON),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (seatData) {
            for (let i = 0; i < seatData.length; i++) {
                //console.log(seatData);

                takenSeats.push(seatData[i]);
                // takenSeats.push(seatData[i]['seatNumber']);
                // takenSeats.push(seat);

            }
            console.log(business);
            //$.trim(business);

            if (business == 1){
                generateBusinessSeats();
                console.log("Business");
            }else{
                generateEconomySeats();
                console.log("Economy");
            }

            //console.log(takenSeats.length);

        },
        error: function (xhr, status, error) {
            let errorMessage = xhr.status + ': ' + xhr.statusText
            console.log('Error - ' + errorMessage);

        }
    });

});


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
            seat = "<div  class='seatBusiness seatTaken' id='" + id + "" + number + "' data-id='" + id + "" + number + "' disabled='true'>" + id + rowNum + "</div>";

        } else {
            seat = $("<div class='seatBusiness seatFree' id='" + id + "" + number + "' data-id='" + id + "" + number + "' disabled='false'>" + id + rowNum + "</div>");


            $(seat).click(function () {
                chosenSeats ++;
                let seatID = $(this).data('id');

                selectedSeats.push($(this).data('id'));

                console.log(selectedSeats);
                console.log(chosenSeats);
                console.log(bookedSeats);


                if(chosenSeats == 1){
                    $('#seatBusinessResult').append("Sitze");
                }

                $('#seatBusinessResult').append("<div>" + seatID + "</div>");
                $(this).addClass("select");


                // if(chosenSeats >= bookedSeats){
                //     selectedSeats.shift();
                // }
                if (chosenSeats > passenger){
                    let firstSeat = $("#seatBusinessResult div:first-of-type").text();
                    $("#seatBusinessResult div:first-of-type").remove();
                    $('#' + firstSeat).removeClass("select");
                    selectedSeats.shift();
                }
                if(chosenSeats == passenger){
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
            seat = "<div class='seatEconomy seatTaken' id='" + id + "" + number + "' data-id='" + id + "" + number + "' disabled='true'>" + id + rowNum + "</div>";
        } else {
            seat = $("<div class='seatEconomy seatFree' id='" + id + "" + number + "' data-id='" + id + "" + number + "' disabled='true'>" + id + rowNum + "</div>");

            $(seat).click(function () {
                chosenSeats ++;
                let seatID = $(this).data('id');
                selectedSeats.push($(this).data('id'));
                console.log(chosenSeats);
                console.log(bookedSeats);

                if(chosenSeats == 1){
                    $('#seatBusinessResult').append("Sitze");
                }

                $(this).addClass("select");
                $('#seatEconomyResult').append("<div>" + seatID + "</div>");


                // if(chosenSeats >= bookedSeats){
                //     selectedSeats.shift();
                // }

                if (chosenSeats >  passenger){

                    let seatNumber = $("#seatEconomyResult div:first-of-type").text();
                    $("#seatEconomyResult div:first-of-type").remove();
                    $('#' +seatNumber).removeClass("select");
                    selectedSeats.shift();

                }

                if(chosenSeats == passenger){
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

console.log(selectedSeats);

$('#paymentButton').on('click', function () {

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);

    bookedSeats = selectedSeats.toString();
    console.log(bookedSeats);

    location.href  = "payment.html?depIac=" + depIac + "&arrIac=" + arrIac + "&date=" + date + "&depTime=" + depTime + "&arrTime=" + arrTime +
        "&passenger="  + passenger + "&bookedSeats="  + bookedSeats + "&flightID=" + flightID + "&business=" + business + "&depAp=" + depAp + "&arrAp=" + arrAp;

});

$('#prevButton').on('click', function () {

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);


    location.href  = "flightselect.html?depIac=" + depIac + "&arrIac=" + arrIac + "&date=" + date +
        "&passenger="  + passenger + "&bookedSeats="  + bookedSeats + "&flightID=" + flightID + "&business=" + business + "&depAp=" + depAp + "&arrAp=" + arrAp;



});


