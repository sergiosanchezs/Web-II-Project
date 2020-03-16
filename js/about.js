$(document).ready(function(){

	$( "#tabs" ).tabs({
        collapsible: true
	});
	
	var title = $( ".slogan_about" );
	var subTitle = $( "#title" );

	title.hide();
	subTitle.hide();
	
	setTimeout(function() {
		title.show("fade", 1000);
	}, 300);

	setTimeout(function() {
		subTitle.show("fade", 1000);
	}, 300);

	var main = $("main");

	$(".btn-accessibility").click(function() {
		main.load("accessibility.html");
	});

	$(".number").counterUp({delay: 10, time: 2000});

});