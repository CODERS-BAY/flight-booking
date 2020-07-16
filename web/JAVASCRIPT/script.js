$(document).ready(function () {
    console.log("js loaded");


    $(".loginButton").click(function () {

        console.log("click");

        $(".popUp").css("display", "block");
        $(".greyBg").css("display", "none");

    });

})