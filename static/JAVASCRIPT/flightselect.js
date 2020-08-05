let flightID;
let business = false;
let depIac
let depAp;
let arrAp;
let arrIac;
let date;

$(document).ready(function () {
//------- GET PARAMETERS FROM URL ------//

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    depIac = url.searchParams.get("depIac");
    arrIac = url.searchParams.get("arrIac");
    date = url.searchParams.get("date");
    depAp = url.searchParams.get("depAp");
    arrAp = url.searchParams.get("arrAp");
    date = url.searchParams.get("date");
    //console.log(depAp);
    //console.log(date);


    $(".myFlight").append("<h3>" + depAp +" - "+ arrAp +"</h3>");

//------- AJAX CALL FOR AVAILABLE FLIGHTS -------//

    let flightData = {departureIac : depIac, arrivalIac : arrIac, departureTime : date};
    console.log(depIac + " " + arrIac + " " + date);
    $.ajax({
        type: "post",
        data: JSON.stringify(flightData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "http://localhost:8080/FlightBooking/api/getSelectedFlight",
        success: function (data) {
            console.log(data);
            if (data == "") {

                $("#availableFlights").append("<tr><td colspan='3' span='2' class='noFlights'><strong>Keine Fl&uuml;ge verf&uuml;gbar!</strong></td></tr>");

            } else {
                for (let i = 0; i < data.length; i++) {
                    console.log(data[i]);
                    let businessPrice = data[i]["price"] + 100;
                    console.log(data[i]["flightId"]);

                    let inputBusiness = $("<input id='business-" + data[i]['flightId'] + "' type=radio class='checkbox' name='flights' data-id='" + data[i]['flightId'] + "'>");
                    $(inputBusiness).click(function () {
                        flightID = $(this).attr("data-id");
                        business = 1;
                        console.log(flightID);
                        buttonActive();
                    })

                    let inputEconomy = $("<input id='economy-" + data[i]['flightId'] + "' type=radio class='checkbox' name='flights' data-id='" + data[i]['flightId'] + "'>");
                    $(inputEconomy).click(function () {
                        flightID = $(this).attr("data-id");
                        business = 0;
                        console.log(flightID);
                        buttonActive();
                    })
                    let row = $("<tr><td class='flights'><strong>" + data[i]["departureTime"] + " - " + data[i]["arrivalTime"] + "</strong><br>" +
                        depAp + " - " + arrAp +"</td><td class='business'><div class='checkContainer'><ul><li>Gep&auml;ck (23kg) <i class=\"fas fa-check\"></i></li><li>Handgep&auml;ck (8kg) <i class=\"fas fa-check\"></i></li><li>Boarding <i class=\"fas fa-check\"></i></li><li>Bordrestaurant <i class=\"fas fa-check\"></i></li></ul></div></td>" +
                        "<td class='economy'><div class='checkContainer'><ul><li>Gep&auml;ck (23kg) <i class=\"fas fa-times-circle\"></i></li><li>Handgep&auml;ck (8kg) <i class=\"fas fa-check\"></i></li><li>Boarding <i class=\"fas fa-times-circle\"></i></li><li>Bordrestaurant <i class=\"fas fa-times-circle\"></i></li></ul></div></td></tr>");

                    $("#availableFlights").append($(row));
                    $(row).find(".business .checkContainer").append($(inputBusiness));
                    $(row).find(".business .checkContainer").append("<div>" + businessPrice + "&#8364;" + "</div>");
                    $(row).find(".economy .checkContainer").append($(inputEconomy));
                    $(row).find(".economy .checkContainer").append("<div>" + data[i]["price"] + "&#8364;" + "</div>");


                }
                //console.log(flightID);

            }
        }

    });

});

function buttonActive() {
    $("#seatsButton").attr("disabled", false);
}


$('#seatsButton').on('click', function () {

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    let passenger = url.searchParams.get("passengers");


    location.href  = "seat-select.html?depIac=" + depIac + "&arrIac=" + arrIac + "&date=" + date +
        "&passengers=" + passenger + "&flightID=" + flightID + "&business=" + business + "&depAp=" + depAp + "&arrAp=" + arrAp;



});
