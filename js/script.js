$(function () {
    $('.nav-btn').on('click', function () {
        $(this).toggleClass('open');
    });

    var $backgroundImage = $('.image-infinite-bg');
    var images = $backgroundImage.data('images');

    if (!images || images.length === 0) return;

    $backgroundImage.css('background-image', "url('" + images[0] + "')");

    if (images.length > 1) {
        var currentIndex = 0;
        setInterval(function () {
            currentIndex = (currentIndex + 1) % images.length;
            $backgroundImage.css('background-image', "url('" + images[currentIndex] + "')");
        }, 5000);
    }
});
