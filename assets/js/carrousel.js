window.addEventListener("load", function() {
    new Glider(document.querySelector('.container'), {
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: true
    });
});