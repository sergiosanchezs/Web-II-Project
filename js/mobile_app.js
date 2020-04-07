$(document).ready(function(){
    $(".home-header h1").animate({ fontSize: "2.7rem" }, 1000 );

    // Contact form validate mobile-contact-form
    $( "#mobileModal" ).hide();

    $("#btn-submit-mobile").on("click", function() {
        $("#firstName").animate("bounce", { times: 3 }, "slow");
     });
});