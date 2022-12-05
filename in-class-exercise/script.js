$(document).ready(function () {
    $('.keys').hover(function () {
        $('.plant').toggle();
    });
    $('.flower').click(function () {
        $(this).toggleClass("zoom");
    });
});
