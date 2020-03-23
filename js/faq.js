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

    // Get all the innerText in the h3 tags inside the accordions
    var availableTags = $("#accordion h3, #accordion2 h3");
    var availableTagsArray = []

    for (var i = 0; i < availableTags.length; i++){
        // Append each h3 text to the array
        var eachQuestion = availableTags[i].innerText;

        availableTagsArray.push(eachQuestion);
    }

    // Set the autocomplete widget
    $(".FAQsInput").autocomplete({
        source: availableTagsArray
    });

    // Get the user clicked question
    $("ul").click(function(){
        // Pass the question to the modal
        var question = $(".FAQsInput").val();
        $(".userClickedQuestion").text(question);

        // Show Bootstrap modal
        $("#exampleModal").modal('show');
    });

    // Set the accordion widget
    $("#accordion, #accordion2").accordion({
        collapsible: true,
        active: 'none'
    });

    // Load the book a table page
    $("#bookATable").click(function() {
		$("main").load("bookatable.html");
    });

    // Load the contact page
    $(".contact-button").click(function() {
		$("main").load("contact.html");
    });

});