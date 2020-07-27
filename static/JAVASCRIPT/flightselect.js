function get_json() {

    $.ajax({
        type: "post",
        data: data,
        url: "http://localhost:8080/FlightBooking/getSelectedFlight",
        success: function () {
            console.log('TEST')
        }
    })
}