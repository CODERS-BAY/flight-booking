$(document).ready(function () {

    alert("ready");

    alert(window.myFlights);
    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("name");
    console.log(c);


});