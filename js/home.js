$(document).ready(function(){
    titleElement = $( "#title" );
    // titleElement.hide();

    setTimeout(bouncingCardsEffect, 3000);

    function bouncingCardsEffect(){
        var isAtHomePage = $("#home").hasClass("active");
        // console.log(isAtHomePage);
        if (isAtHomePage){
            cards = $(".tiaser-card");
            var element1 = $(cards[0]);
            setTimeout(function() {
                element1.effect( "bounce", "slow" );
            }, 0 );
    
            var element2 = $(cards[1]);
            setTimeout(function() {
                element2.effect( "bounce", "slow" );
            }, 250 );
    
            var element3 = $(cards[2]);
            setTimeout(function() {
                element3.effect( "bounce", "slow" );
            }, 500 );
    
            var element4 = $(cards[3]);
            setTimeout(function() {
                element4.effect( "bounce", "slow" );
            }, 750 );
            
        }
    }

    // runinng the title pulstate effect
    setTimeout(function() {
        titleElement.show( "pulsate", 5000); 
      }, 1000 );
    
});