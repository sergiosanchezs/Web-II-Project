$(document).ready(function(){

    var tabs = $("#tabs").tabs();

    // JQuery UI Interactions** (sortable)
    tabs.find(".ui-tabs-nav").sortable({
        axis: "x",
        stop: function() {
          tabs.tabs("refresh");
        }
    });

    var breakfastTitle = $("#breakfast-heading");
    var cards = $(".pricing-card");

    // Hide both the heading and the cards array
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

    // Cards animation (after the title animation is complete)
    setTimeout(unFoldCards, 2000);
    
    function unFoldCards() {
        cards.show("drop", {direction:'left'}, 1000);
    }

    // Activates the animation when any ancor tag is clicked
    $(".menu-nav").click(function() {
        
        var sectionID = this.getAttribute("href");
        var titleID = $(sectionID + "-heading");

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