$(document).ready(function () {


//------- GET PARAMETERS FROM URL ------//

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    let depIac = url.searchParams.get("depIac");
    let arrIac = url.searchParams.get("arrIac");
    let date = url.searchParams.get("date");
    let depAp = url.searchParams.get("depAp");
    let arrAp = url.searchParams.get("arrAp");
    //console.log(depAp);
    //console.log(date);


    $(".myFlight").append("<h3>" + depAp + "- " + arrAp + "</h3>");

//------- AJAX CALL FOR AVAILABLE FLIGHTS -------//

    let flightData = {departureIac : depIac, arrivalIac : arrIac, departureTime : date};

    $.ajax({
        type: "post",
        data: JSON.stringify(flightData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "http://localhost:8080/FlightBooking/api/getSelectedFlight",
        success: function (data) {
            console.log(data);
            if (data == "") {

                $("#availableFlights").append("<tr><td colspan='3' span='2' class='flights'><strong>Keine Fl&uuml;ge verf&uuml;gbar!</strong></td></tr>");

            } else {
                for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
                let businessPrice = data[i]["price"] + 100;
                console.log(data[i]["flightId"]);
                $("#availableFlights").append("<tr><td class='flights'><strong>" + data[i]["departureTime"] + " - " + data[i]["arrivalTime"] + "</strong><br>" +
                    depAp + " - " + arrAp +"</td><td class='business'><div class='checkContainer'><input id='business-" + data[i]['flightId'] + "' type=radio class='checkbox' name='flights' onclick='activeButton()'>" + businessPrice + "&#8364;" + "</div></td>" +
                    "<td class='economy'><div class='checkContainer'><input id='economy-" + data[i]['flightId'] + "' type=radio class='checkbox' name='flights' onclick='activeButton()'>" + data[i]["price"] + "&#8364;" + "</div></td></tr>");
                    $('#business-' + data[i]["flightId"]).attr('flightId', data[i]['flightId']);
                    $('#economy-' + data[i]["flightId"]).attr('flightId', data[i]['flightId']);

                }

            }
        }

    });

});

function activeButton() {
    //console.log("click");
    $('#seatsButton').attr("disabled", false);
    let flightId = $(this).data("flightId");
    console.log(flightId);

};

$('#seatsButton').on('click', function () {

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    let passenger = url.searchParams.get("passengers");

    location.href  = "seat-select.html?passenger=" + passenger;

});



