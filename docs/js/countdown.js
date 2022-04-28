$(document).ready(function () {

    $(".countdown").countdown("2022/5/6", function(e) {
        $("#days").text(
            e.strftime('%D')
        );
        $("#hours").text(
            e.strftime('%H')
        );
        $("#minutes").text(
            e.strftime('%M')
        );
        $("#seconds").text(
            e.strftime('%S')
        );
    });
});