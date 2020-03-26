$(document).ready(function(){

	$( "#tabs" ).tabs({
        collapsible: true
	});

	var title = $( "#title" );

	title.hide();
	
	setTimeout(function() {
		title.show("fade", 1000);
	}, 300);

	var main = $("main");

	function updateURI(page) {
        var origin = window.location.origin;
        var pathname = window.location.pathname;
        window.location.href = origin + pathname + "#" + page;
    }

	$(".btn-accessibility").click(function() {
		updateURI("accessibility");
        $(".main_nav").removeClass("active");
		main.load("accessibility.html");
		$(window).scrollTop(0);
	});

	$(".btn-donations").click(function() {
		updateURI("donations");
        $(".main_nav").removeClass("active");
		main.load("donations.html");
		$(window).scrollTop(0);
	});

	$(".btn-deals").click(function() {
		updateURI("catering");
        $(".main_nav").removeClass("active");
		main.load("catering.html");
		$(window).scrollTop(0);
	});

	$(".number").counterUp({delay: 10, time: 2000});

});