$(document).ready(function(){
    
    // Start the JQuery carousel plugin
    $(".jcarousel").jcarousel();

    // Auto Scroll
    $(".jcarousel").jcarouselAutoscroll({
            interval: 4000
        });
    
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

    $(".jcarousel-pagination").jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });

    $('.jcarousel').on('jcarousel:scrollend', function(event, carousel) {
        carousel.jcarouselAutoscroll({
            interval: 4000,
            target: '-=3'
        });
    });
});