$(document).ready(function () {
     $('.image-1').click(function () {
        $(this).toggleClass('.reveal-1');
    });
    $('.image-2').click(function () {
        $('.reveal-2').toggle();
    });
    $('.image-3').click(function () {
        $('.reveal-3').toggle();
    });
    $('.image-4').click(function () {
        $('.reveal-4').toggle();
    });
});
