let flightID;
let passenger;
let business = false;
let depIac
let depAp;
let arrAp;
let arrIac;
let date;
let depTime;
let arrTime;
let price;

$(document).ready(function () {
//------- GET PARAMETERS FROM URL ------//

    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    passenger = url.searchParams.get("passenger");
    depIac = url.searchParams.get("depIac");
    arrIac = url.searchParams.get("arrIac");
    date = url.searchParams.get("date");
    depAp = url.searchParams.get("depAp");
    arrAp = url.searchParams.get("arrAp");
    date = url.searchParams.get("date");

    $(".myFlight").append("<h3>" + depAp +" - "+ arrAp +"</h3>");

//------- AJAX CALL FOR AVAILABLE FLIGHTS -------//
    let flightData = {departureIac : depIac, arrivalIac : arrIac, departureTime : date , arrivalTime: date };
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
                    let businessPrice = data[i]["price"] + 100;
                    let inputBusiness = $("<input id='business-" + data[i]['flightId'] + "' type=radio class='checkbox' name='flights' data-id='" + data[i]['flightId'] + "' depTime='" + data[i]['departureTime'] + "' arrTime='" + data[i]['arrivalTime'] + "' price='" + data[i]['price'] + "'>");
                    $(inputBusiness).click(function () {
                        flightID = $(this).attr("data-id");
                        depTime = $(this).attr("depTime");
                        arrTime = $(this).attr("arrTime");
                        price = $(this).attr("price");
                        business = 1;
                        buttonActive();
                    })

                    let inputEconomy = $("<input id='economy-" + data[i]['flightId'] + "' type=radio class='checkbox' name='flights' data-id='" + data[i]['flightId'] + "'depTime='" + data[i]['departureTime'] + "' arrTime='" + data[i]['arrivalTime'] + "' price='" + data[i]['price'] + "'>");
                    $(inputEconomy).click(function () {
                        flightID = $(this).attr("data-id");
                        business = 0;
                        depTime = $(this).attr("depTime");
                        arrTime = $(this).attr("arrTime");
                        price = $(this).attr("price");
                        buttonActive();
                    })
                    let row = $("<tr><td class='flights'><strong>" + data[i]["departureTime"] + " - " + data[i]["arrivalTime"] + "</strong><br>" +
                        depAp + " - " + arrAp +"</td><td class='business'><div class='checkContainer'><ul><li>Gep&auml;ck (23kg) <i class=\"fas fa-check\"></i></li><li>Handgep&auml;ck (8kg) <i class=\"fas fa-check\"></i></li><li>Boarding <i class=\"fas fa-check\"></i></li><li>Bordrestaurant <i class=\"fas fa-check\"></i></li></ul></div></td>" +
                        "<td class='economy'><div class='checkContainer'><ul><li>Gep&auml;ck (23kg) <i class=\"fas fa-times-circle\"></i></li><li>Handgep&auml;ck (8kg) <i class=\"fas fa-check\"></i></li><li>Boarding <i class=\"fas fa-times-circle\"></i></li><li>Bordrestaurant <i class=\"fas fa-times-circle\"></i></li></ul></div></td></tr>");

                    $("#availableFlights").append($(row));
                    $(row).find(".business .checkContainer").append($(inputBusiness));
                    $(row).find(".business .checkContainer").append("<div style='font-family: Roboto, sans-serif; font-size: 1.5rem'>" + businessPrice + "&#8364;" + "</div>");
                    $(row).find(".economy .checkContainer").append($(inputEconomy));
                    $(row).find(".economy .checkContainer").append("<div style='font-family: Roboto, sans-serif; font-size: 1.5rem'>" + data[i]["price"] + "&#8364;" + "</div>");
                }
            }
        }
    });
});

function buttonActive() {
    $("#seatsButton").attr("disabled", false);
}

$('#seatsButton').on('click', function () {

    let url_string = window.location.href;
    let url = new URL(url_string);
    location.href  = "seat-select.html?depIac=" + depIac + "&arrIac=" + arrIac + "&date=" + date + "&depTime=" + depTime + "&arrTime=" + arrTime + "&price=" + price +
        "&passenger=" + passenger + "&flightID=" + flightID + "&business=" + business + "&depAp=" + depAp + "&arrAp=" + arrAp;
});
