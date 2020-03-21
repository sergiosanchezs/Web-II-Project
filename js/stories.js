$(document).ready(function(){
    
    $('.jcarousel').jcarousel({
        // Core configuration goes here
        center: true
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
});