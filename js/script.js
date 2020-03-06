$(document).ready(function(){
    
    // hide Modals
    $("#subscribeModal").hide();
    $("#confirmModal").hide();

    // Adding the active class to the current page
    var main = $("main");
    main.load("home.html");     // Loading the default home page

    // Behavior of the Navigation bar on click event to load the new page
    $(".main_nav").click(function() {   // This get any element with the class "main_nav" on it and add the click event.
        var urlHashTag = this.getAttribute("href");     // This line will get the href. For instance: #menu
        var urlReal = urlHashTag.substring(1, urlHashTag.lenght) + ".html";     // this line will format to the link. Example: "menu.html"
        main.load(urlReal, function(){      // This will load the page
            $(".main_nav").removeClass("active");   // after page loaded, all the elements with the class "main_nav" will be selected and remove active class
            $(urlHashTag).addClass("active");      // It will add active class to the element clicked.
        });
    });

    $("#emailSubsForm").validate({
        rules: {
            nameInput: {
                required: true,
                minlength: 6,
            },
            emailInput: {
                required: true,
                minlength: 7,
                email: true
            },
        },
        messages: {
            nameInput: {
                required: "Please enter your full name.",
                minlength: "Your full name must consist of at least 6 characters."
            },
            emailInput: {
                required: "Please enter your email address.",
                minlength: "Your email address must consist of at least 7 characters.",
                email: "Please enter a valid email address",
            },
        },
        submitHandler: function() { 
            emailFormSubmitted();
            return false; 
        }
    });

    // Subcribe button click event to pops up the respective modals
    // $( "#emailSubsBtn").click(function(e) {
    var emailFormSubmitted = function (){
        // e.preventDefault();
        
        var confirmModal = $("#confirmModal");
        var subscribeModal = $("#subscribeModal");
        var nameInput = $("#nameInput");
        var emailInput = $("#emailInput");
        var nameModal = $("#nameModal");
        var emailModal = $("#emailModal");

        confirmModal.dialog({
            modal: true,
            minWidth: 300,
            buttons: {
                "Subscribe": function() {
                    subscribeModal.dialog({
                        modal: true,
                        buttons: {
                            "OK": function() {
                                $(this).dialog("close");
                                nameInput.val("");
                                emailInput.val("");
                            }
                        },
                        open: function( event, ui ){
                            confirmModal.dialog("close");
                        },
                    });


                    },
                Cancel: function() {
                    $(this).dialog("close");
                }
            },
            open: function( event, ui ){
                nameModal.text(nameInput.val());
                emailModal.text(emailInput.val());
            },
        });
    }

    // On every type of the user transform the text to capitalize
    // Activating the tooltip at the end
    $("#nameInput").keyup(function () {
        $(this).css('textTransform', 'capitalize');  
    }).tooltip();

    // On every keyup transform the email text to capitalize if empty else lowercase
    // Activating the tooltip at the end
    $("#emailInput").keyup(function () {  
        if (this.val() == ""){
            $(this).css('textTransform', 'capitalize');  
        } else {
            $(this).css('textTransform', 'lowercase');
        }
    }).tooltip();

    // $("#bookATable").click(function() { 
    //     main.load("bookATable.html", function(){
    //         $("a").removeClass("active");
    //     });
    // });
    
    // $("#about").click(function() {
    //     main.load("about.html", function(){
    //         $("a").removeClass("active");
    //         $("#about").addClass("active");
    //     });
    // });

    // $("#menu").click(function(){
    //     main.load("menu.html", function(){
    //         $("a").removeClass("active");
    //         $("#menu").addClass("active");
    //     });
    // });

    // $("#stories").click(function(){
    //     main.load("stories.html", function(){
    //         $("a").removeClass("active");
    //         $("#stories").addClass("active");
    //     });
    // });

    // $("#contact").click(function(){
    //     main.load("contact.html", function(){
    //         $("a").removeClass("active");
    //         $("#contact").addClass("active");
    //     });
    // });
    // $("#home").click(function(){
    //     main.load("home.html", function(){
    //         $("a").removeClass("active");
    //         $("#home").addClass("active");
    //     });
    // });
    // $("#logo").click(function(){
    //     main.load("home.html", function(){
    //         $("a").removeClass("active");
    //         $("#home").addClass("active");
    //     });
    // });
  
});