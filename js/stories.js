$(document).ready(function(){
    
    // Start the JQuery carousel plugin
    $(".jcarousel").jcarousel({
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