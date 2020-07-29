$(document).ready(function () {


//------- GET PARAMETERS FROM URL ------//

    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var depAp = url.searchParams.get("depIac");
    var arrAp = url.searchParams.get("arrIac");
    var date = url.searchParams.get("date");
    //console.log(depAp);
    //console.log(arrAp);
    //console.log(date);

//------- AJAX CALL FOR AVAILABLE FLIGHTS -------//

    let flightData = {departureIac : depAp, arrivalIac : arrAp, departureTime : date};

    $.ajax({
        type: "post",
        data: JSON.stringify(flightData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "http://localhost:8080/FlightBooking/api/getSelectedFlight",
        success: function (data) {
            console.log(data);
            $("#arrAirportList").append("<tr><td>" + data + "</td></tr>");

        }

    });

});