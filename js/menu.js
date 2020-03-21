$(document).ready(function(){

    $( "#tabs" ).tabs();

    var breakfastTitle = $("#breakfast-heading");
    var cards = $(".pricing-card");

    breakfastTitle.hide();
    cards.hide();
    

    

    // Title animation (when the page is loaded)
    setTimeout(function() {
        breakfastTitle.show("fade", 1000);
    }, 300);

    setTimeout(function() {
        breakfastTitle.effect("pulsate", function(){
            breakfastTitle.addClass("heading-effect");
        });
    }, 600);

    // Cards animation
    setTimeout(unFoldCards, 2000);
    
    function unFoldCards() {
        cards.show("drop", {direction:'left'}, 1000);
    }

    // Activates when any ancor tag is clicked
    $(".menu-nav").click(function() {
        
        var sectionRawID = this.getAttribute("href");
        var titleID = $(sectionRawID + "-heading");

        cards.hide();
        titleID.hide();

        if (titleID.hasClass("heading-effect")){
            titleID.removeClass("heading-effect")
        }

        setTimeout(function() {
            titleID.show("fade", 1000);
        }, 300);

        setTimeout(function() {
            titleID.effect("pulsate", function() {
                titleID.addClass("heading-effect");
            });
        }, 600);

        setTimeout(unFoldCards, 2000);
    });
});