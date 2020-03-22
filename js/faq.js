$(document).ready(function(){
    

    
    // Remove the placeholder when the input box is selected
    $(".FAQsInput").focus(function () {
        $(this).attr("rel", $(this).attr("placeholder"));
        $(this).removeAttr("placeholder");
    });
    $(".FAQsInput").blur(function () {
        $(this).attr("placeholder", $(this).attr("rel"));
        $(this).removeAttr("rel");
    });

    var availableTags = $("#accordion h3, #accordion2 h3");
    var availableTagsArray = []

    for (var i = 0; i < availableTags.length; i++){
        // each item (I need to append to an array)
        var eachQuestion = availableTags[i].innerText;

        availableTagsArray.push(eachQuestion);
    }

    $(".FAQsInput").autocomplete({
        source: availableTagsArray
    });

    
    // Acordion

    $("#accordion, #accordion2").accordion({
        collapsible: true,
        active: 'none'
    });

    	
    
    // Load the book a table page

    $("#bookATable").click(function() {
		$("main").load("bookatable.html");
    });

    $(".contact-button").click(function() {
		$("main").load("contact.html");
    });

});