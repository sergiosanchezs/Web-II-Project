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

    // Get all the innerText in the h3 tags inside the accordions (Questions)
    var availableQuestions = $("#accordion h3, #accordion2 h3");
    var availableQuestionsArray = []; // Array of Questions

    // Append each question to the availableQuestionsArray array
    for(var i = 0; i < availableQuestions.length; i++){
        var eachQuestion = availableQuestions[i].innerText;

        availableQuestionsArray.push(eachQuestion);
    }

    var availableAnswers = $("#accordion p, #accordion2 p");
    // template '[[question1, answer1], [question2, answer2], [question3, answer3]]'
    var questionAndAnswerArray = [] // 2D array of questions and answers

    // Create the questionAndAnswerArray 2D array by pushing arrays inside
    for(var i = 0; i < availableQuestions.length; i++){
        questionAndAnswerArray.push([]);
    }

    for(var i=0; i<availableQuestions.length; i++){

        //Return each Question and Answer text
        var eachQuestion = availableQuestions[i].innerText;
        var eachAnswer = availableAnswers[i].innerText;

        for(var j=0; j<2; j++){
            // if 0, append a question. else, append an answer
            if(j==0){
                questionAndAnswerArray[i].push(eachQuestion)
            } else{
                questionAndAnswerArray[i].push(eachAnswer)
            }
            
        }
    }

    // Set the autocomplete widget
    $(".FAQsInput").autocomplete({
        source: availableQuestionsArray
    });

    // Get the user clicked question
    $(".ui-autocomplete").click(function(){
        // Pass the question to the modal
        var userQuestion = $(".FAQsInput").val();
        $(".userClickedQuestion").text(userQuestion);

        for(var i = 0; i < questionAndAnswerArray.length; i++){
            // Loop through the array and get each question
            var arrayQuestions = questionAndAnswerArray[i][0];
            var arrayAnswer = questionAndAnswerArray[i][1];

            //Compare the user choosen question to the arrayQuestions
            if(userQuestion == arrayQuestions){
                // If matches, change the 'p' inner text to the answer
                $(".userClickedAnswer").text(arrayAnswer);
            }
        }

        // Show Bootstrap modal
        $("#exampleModal").modal('show');
    });

    // clear the input box when the modal button is clicked
    $(".modal-btn").click(function(){
        $(".FAQsInput").val("");
        $(".FAQsInput").focus();
    });

    // Set the accordion widget
    $("#accordion, #accordion2").accordion({
        collapsible: true,
        active: 'none'
    });

    // Load the book a table page
    $("#bookATable").click(function() {
        $("main").load("bookatable.html");
        // Scroll the window to the top
        $(window).scrollTop(0);
    });

    // Load the contact page
    $(".contact-button").click(function() {
        $("main").load("contact.html");
        $(window).scrollTop(0);
    });

});