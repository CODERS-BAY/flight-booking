
$(document).ready(function () {
    console.log("js loaded");


    $(".loginButton").click(function () {

        $(".popUp").css("display", "block");
        $(".greyBg").css("display", "none");

    });

    $(".fa-times").click(function () {

        $(".popUp").css("display", "none");
        $(".greyBg").css("display", "block");
    });

});