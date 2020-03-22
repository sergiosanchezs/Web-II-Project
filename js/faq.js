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

    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
      $(".FAQsInput").autocomplete({
        source: availableTags
      });

});