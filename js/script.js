$(document).ready(function(){
    
    var main = $("main");

    $("#bookATable").click(function() { 
        main.html("Here si going to be the code of each page");
    });
    
    $("#about").click(function() {
        // alert("about clicked")
        main.load("about.html", function(){
            // alert("The about page was loaded");
        });
    });

    $("#menu").click(function(){
        main.load("menu.html", function(){
        });
    });

    $("#stories").click(function(){
        main.load("stories.html", function(){
        });
    });

    $("#contact").click(function(){
        main.load("contact.html", function(){
        });
    });

});




