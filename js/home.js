$(document).ready(function(){
    titleContainer = $("#title_container");
    titleElement = $( "#home_title" );
    subTitleElement = $( "#home_subtitle" );
    titleElement.hide();
    subTitleElement.hide();

    $('#home_img1').zoom();
    $('#home_img2').zoom();
    $('#home_img3').zoom();
    $('#home_img4').zoom();

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

    var fadeTime = 70;
    function showTitlte() {
        titleElement.toggle( "blind", 1600, function(){
            subTitleElement.show( "puff", 1600, function(){
                for (i = 0; i < 15; i++){
                    subTitleElement.fadeOut(fadeTime).fadeIn(fadeTime);
                }
            });
        });
    }
    
    showTitlte();

});