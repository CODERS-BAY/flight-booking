$(document).ready(function () {


//------- GET PARAMETERS FROM URL ------//

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    let depIac = url.searchParams.get("depIac");

    let arrIac = url.searchParams.get("arrIac");
    let date = url.searchParams.get("date");
    let passenger = url.searchParams.get("passenger");
    let depAp = url.searchParams.get("depAp");
    let arrAp = url.searchParams.get("arrAp");
    //console.log(depAp);
    //console.log(arrAp);
    //console.log(date);

    //$(".myFlight").append("<h2>" + depAp + "-" + arrAp + "</h2>");

//------- AJAX CALL FOR AVAILABLE FLIGHTS -------//

    let flightData = {departureIac : depIac, arrivalIac : arrIac, departureTime : date};

    $.ajax({
        type: "post",
        data: JSON.stringify(flightData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "http://localhost:8080/FlightBooking/api/getSelectedFlight",
        success: function (data) {

            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
                $("#availableFlights").append("<tr><td>" + data[i]["departureTime"] + " - " + data[i]["arrivalTime"] +
                    data[i]["departureIac"] + " - " + data[i]["arrivalIac"] +"</td><td><input type=checkbox>" + data[i]["price"] + "</td>" +
                    "<td><input type=checkbox> </td></tr>");

            }
        }

    });

});

$('#seatsButton').on('click', function (passenger) {

    location.href  = "seat-select.html?passenger=" + passenger;



});