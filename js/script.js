$(document).ready(function(){
    
    // Adding the active class to the current page
    $("#home").addClass("active");

    var main = $("main");

    main.load("home.html");

    $("#bookATable").click(function() { 
        main.load("bookATable.html", function(){
            $("a").removeClass("active");
        });
    });
    
    $("#about").click(function() {
        main.load("about.html", function(){
            $("a").removeClass("active");
            $("#about").addClass("active");
        });
    });

    $("#menu").click(function(){
        main.load("menu.html", function(){
            $("a").removeClass("active");
            $("#menu").addClass("active");
        });
    });

    $("#stories").click(function(){
        main.load("stories.html", function(){
            $("a").removeClass("active");
            $("#stories").addClass("active");
        });
    });

    $("#contact").click(function(){
        main.load("contact.html", function(){
            $("a").removeClass("active");
            $("#contact").addClass("active");
        });
    });
    $("#home").click(function(){
        main.load("home.html", function(){
            $("a").removeClass("active");
            $("#home").addClass("active");
        });
    });
    $("#logo").click(function(){
        main.load("home.html", function(){
            $("a").removeClass("active");
            $("#home").addClass("active");
        });
    });
});




