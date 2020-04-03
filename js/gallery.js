
$(document).ready(function(){
    

$('[data-jcarousel]').each(function() {
    var el = $(this);
    el.jcarousel(el.data());
});

$('[data-jcarousel-control]').each(function() {
    var el = $(this);
    el.jcarouselControl(el.data());
});

var jcarousel = $('.jcarousel');

jcarousel
    .on('jcarousel:reload jcarousel:create', function () {
        var width = jcarousel.innerWidth();
        jcarousel.jcarousel('items').css('width', width + 'px')
    })
    .jcarousel({
        wrap: 'circular'
    });

$('.jcarousel-control-prev')
    .jcarouselControl({
        target: '-=1'
    });

$('.jcarousel-control-next')
    .jcarouselControl({
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

    var galleryCarousel = $("#gallery-carousel");
    var galleryHeader =  $(".header");
    galleryCarousel.hide();
    galleryHeader.hide();

    setTimeout(() => {
        galleryHeader.show( "clip", {}, 800, function (){
            setTimeout(() => {
                galleryCarousel.show( "puff", 800 );
            }, 200);
        });
    }, 100);


    var locationsSection = $("#locationsSection");
    $("#locationsBtn").click(function(){
        locationsSection.toggle("slide", 1500);
        var locationsBtn = $("#locationsBtn");
        var locationsText = $("#locationsBtn").text();
        var arrayText = locationsText.split(" ");
        if (arrayText[0] == "Show")
            locationsBtn.text("Hide Future Locations");
        else if (arrayText[0] == "Hide")
            locationsBtn.text("Show Future Locations");

    })




});

