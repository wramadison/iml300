$(document).ready(function () {
    $('.plant').click(function () {
        $('.keys').toggle();
    });
    $('.flower').click(function () {
        $(this).toggleClass("zoom");
    });
});
