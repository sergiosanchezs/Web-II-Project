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

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .on('click', function(e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            perPage: 1,
            item: function(page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        });
});