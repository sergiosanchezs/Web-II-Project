$(document).ready(function(){
    
    // hide Modals
    $("#subscribeModal").hide();
    $("#confirmModal").hide();
    $('#imgF1').zoom();
    $('#imgF2').zoom();
    $('#imgF3').zoom();
    $('#imgF4').zoom();
    $('#imgF5').zoom();
    $('#imgF6').zoom();

    // Adding the active class to the current page
    var main = $("main");

    // Checking the url to load the correct page 
    var url = window.location.href;
    arr = url.split('#');
    if (arr.length > 1){
        var page = arr[1];
        nav =  $(".main_nav");
        // Check if the page belongs to one on the main_nav
        var urlHashTag = "#"+page;
        var isOnNavBar = false
        for (var i = 0; i < nav.length - 1; i++){       // Excluding bookATable
            urlHashTagElement = nav[i].getAttribute("href")
            if (urlHashTagElement === urlHashTag)
                isOnNavBar = true;
        }
        if (isOnNavBar){
            main.load(page + ".html", function(){
                $(".main_nav").removeClass("active");
                $(urlHashTag).addClass("active");
                $(window).scrollTop(0);
            });
        } else {
            main.load(page + ".html", function(){
                $(window).scrollTop(0);
            });
        }
    } 
    else {  // if there is no # after index
        var urlHashTag = "#home";
        main.load("home.html", function(){
            $("#home").addClass("active");
        });     // Loading the default home page
    }

    // Behavior of the Navigation bar on click event to load the new page
    $(".main_nav").click(function() {   // This get any element with the class "main_nav" on it and add the click event.
        var urlHashTag = this.getAttribute("href");     // This line will get the href. For instance: #menu
        var urlReal = urlHashTag.substring(1, urlHashTag.lenght) + ".html";     // this line will format to the link. Example: "menu.html"
        main.load(urlReal, function(){      // This will load the page
            $(".main_nav").removeClass("active");   // after page loaded, all the elements with the class "main_nav" will be selected and remove active class
            $(urlHashTag).addClass("active");      // It will add active class to the element clicked.
            $(window).scrollTop(0);
        });
    });

	$(".faq-button").click(function() {
        main.load("faq.html");
        $(window).scrollTop(0);
    });

    $(".bookATable-button, #bookATable").click(function() {
        var url = window.location.href;
        var origin = window.location.origin;
        var pathname = window.location.pathname;
        window.location.href = origin + pathname + "#" + "bookATable";
        $(window).scrollTop(0);
        location.reload();
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
    }).tooltip({
        hide: { effect: "explode", duration: 1000 }
    });

    // On every keyup transform the email text to capitalize if empty else lowercase
    // Activating the tooltip at the end
    $("#emailInput").keyup(function () {
        value = $("#emailInput").val();  
        if (value == ""){
            $(this).css('textTransform', 'capitalize');  
        } else {
            $(this).css('textTransform', 'lowercase');
        }
    }).tooltip({
        hide: { effect: "explode", duration: 1000 }
    });
});