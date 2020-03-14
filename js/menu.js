$(document).ready(function(){

    // Put the Menu page code in here
    $( "#tabs" ).tabs();

    var sectionTitle = $("#breakfast");
    var cards = $(".pricing-card");
    cards.hide();
    sectionTitle.hide();

    // Display the hided title with an animation
    setTimeout(displayTitle, 700);
    function displayTitle() {
        sectionTitle.show("fade", 1000)
    }

    // Display the hided pricing cards with an animation
    setTimeout(unFoldCards, 1300);
    function unFoldCards() {
        cards.show("drop", {direction:'up'}, 1000);
    }
});