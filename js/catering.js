$(document).ready(function(){

    var title = $( "#title" );
    var title2 = $( ".title2" );

    title.hide();
    title2.hide();
	
	setTimeout(function() {
		title.show("fade", 1000);
    }, 300);
    
    setTimeout(function() {
		title2.show("slide", 1000);
    }, 300);

    var main = $("main");

    $("#btn-menu").click(function() {
		main.load("menu.html");
		$(window).scrollTop(0);
    });
    
    $("#btn-contact").click(function() {
		main.load("contact.html");
		$(window).scrollTop(0);
	});

    var showMenuCl = $( "#show-menu-classic");
    var showMenuP = $( "#show-menu-premium");
    var showMenuCt = $( "#show-menu-carte");

    showMenuCl.hide();
    showMenuCt.hide();
    showMenuP.hide();

    $("#img1").hover(
        function () {
           $("#show-menu-classic",this).fadeIn("fast");
        },
        function () {
           $("#show-menu-classic",this).fadeOut("fast");
        }
     );

     $("#img2").hover(
        function () {
           $("#show-menu-premium",this).fadeIn("fast");
        },
        function () {
           $("#show-menu-premium",this).fadeOut("fast");
        }
     );

     $("#img3").hover(
        function () {
           $("#show-menu-carte",this).fadeIn("fast");
        },
        function () {
           $("#show-menu-carte",this).fadeOut("fast");
        }
     );

     $('.arrow-up').scrollAnchor({
        scrollStart: function () {
          $(".popup").text("Scrolling...");
        },
        scrollEnd: function () {
          $(".popup").text("Done!");
        }
      });

    
});