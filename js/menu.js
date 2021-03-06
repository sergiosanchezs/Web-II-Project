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
        breakfastTitle.fadeIn(1000);
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
            titleID.fadeIn(1000);
        }, 300);

        setTimeout(function() {
            titleID.effect("pulsate", function() {
                titleID.addClass("heading-effect");
            });
        }, 600);

        setTimeout(unFoldCards, 2000);
    });

    function updateURI(page) {
        var origin = window.location.origin;
        var pathname = window.location.pathname;
        window.location.href = origin + pathname + "#" + page;
    }

    // Load Book a table on click of the "Make a reservation" button
    $(".pricing-card button").click(function() {
        updateURI("bookatable");
        $(".main_nav").removeClass("active");
        // $("main").load("bookatable.html");
        // Scroll the window to the top
        $(window).scrollTop(0);
        location.reload();
    });
});