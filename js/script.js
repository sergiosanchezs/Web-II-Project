$(document).ready(function(){
    
    // Adding the active class to the current page
    var main = $("main");

    main.load("home.html");

    $(".main_nav").click(function() {   // This get any element with the class "main_nav" on it and add the click event.
        var urlHashTag = this.getAttribute("href");     // This line will get the href. For instance: #menu
        var urlReal = urlHashTag.substring(1, urlHashTag.lenght) + ".html";     // this line will format to the link. Example: "menu.html"
        main.load(urlReal, function(){      // This will load the page
            $(".main_nav").removeClass("active");   // after page loaded, all the elements with the class "main_nav" will be selected and remove active class
            $(urlHashTag).addClass("active");      // It will add active class to the element clicked.
        });
    });

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