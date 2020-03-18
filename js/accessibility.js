$(document).ready(function(){
    
    $( "#dialog-terms" ).hide();
    $("#dialog-test").hide();

    // Activate the tooltip widget for each input box
    $(".tooltip-control").tooltip({
        position: {
            my: "left top",
            at: "left bottom+2",
            collision: "none"
        },
        open: function( event, ui ) {
            ui.tooltip.animate({ top: ui.tooltip.position().top + 8 }, "fast" );
        }
    });

    $(".date-tooltip-control").tooltip({
        position: {
            my: "left top",
            at: "right+50 top-10",
            collision: "none"
        }
    });


    $(".btn-submit").click(function(){

        // Checks if the form is valid when submited
        var form = $("#disabilitySubmitForm");
        if (form.valid()) {
            alert("valid!");
        }

        // Prevents the tooltip action when the submit button is pressed
        $( "[title]" ).tooltip("disable");

        return false;
    });

    // Datepicker widget for the user visualize better the date.
    $("#inputDate").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,

        showOn: "button",
        buttonImage: "images/calendar-icon.png",
        buttonImageOnly: true,
        buttonText: "Select date"
    });

    // Format the date
    $("#inputDate").datepicker("option", "dateFormat", "d MM, y")

    // Validation plugin used for form validation
    $("#disabilitySubmitForm").validate({
        rules: {
            inputFirstName: {
                required: true,
                minlength: 3,
            },
            inputEmail: {
                required: true,
                email: true
            },
            inputDate: {
                date: true
            },
            inputDescription: {
                required: true
            },
            confirmDisability: {
                required: true
            }
        },
        messages: {
            inputFirstName: {
                required: "Please enter your first name.",
                minlength: "Your full name must consist of at least 3 characters."
            },
            inputEmail: {
                required: "Please enter your email address.",
                email: "Please enter a valid email address",
            },
            inputDate: {
                date: "Date required"
            },
            inputDescription: {
                required: "Please, you must provide a description."
            },
            confirmDisability: {
                required: "Term and Conditions is required."
            }
        }
    });

    // Terms and Conditions dialog
    $( ".terms-and-conditions" ).on( "click", function() {
        $( "#dialog-terms" ).dialog({
            position: { my: "center", at: "center top-5" },
            height: 800,
            width: 600,
            modal: true
          });
      });
});