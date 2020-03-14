$(document).ready(function(){
    setTimeout(() => {  // After 1 second this will be executed!
        $("#about_test").html("ABOUT is Executing properly!");
    }, 1000);

    $( "#tabs" ).tabs({
        event: "mouseover",
        collapsible: true
      });

    // //   var counter = function() {
		
	// 	$('#section-counter').waypoint( function( direction ) {

	// 		if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

	// 			var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
	// 			$('.number').each(function(){
	// 				var $this = $(this),
	// 					num = $this.data('number');
	// 					console.log(num);
	// 				$this.animateNumber(
	// 				  {
	// 				    number: num,
	// 				    numberStep: comma_separator_number_step
	// 				  }, 7000
	// 				);
	// 			});
				
	// 		}

	// 	} , { offset: '95%' } );

	// // }
	// // counter();
});