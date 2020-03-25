$(document).ready(function(){
    
    // Start the JQuery carousel plugin
    var jcarousel = $('.jcarousel');

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            var width = jcarousel.innerWidth();
            jcarousel.jcarousel('items').css('width', width + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });

    // Auto Scroll
    $(".jcarousel").jcarouselAutoscroll();

    // On mouse hover Stop Auto Scroll
    // $('.jcarousel').jcarouselAutoscroll({
    //     autostart: false
    // });

    // Set the controls
    $(".jcarousel-control-prev").jcarouselControl({
        target: '-=1'
    });

    $(".jcarousel-control-next").jcarouselControl({
        target: '+=1'
    });

});