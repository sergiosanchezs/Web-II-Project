$(document).ready(function(){
    
    $( "#dialog-terms" ).hide();

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

    // Prevents the tooltip action when the submit button is pressed
    $(".btn-submit").click(function(){
        $( "[title]" ).tooltip("disable");
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
            inputDescription: {
                required: "You must give a description."
            },
            confirmDisability: {
                required: "Term and Conditions is required."
            }
        }
    });

    // Terms and Conditions dialog

    $( ".terms-and-conditions" ).on( "click", function() {
        $( "#dialog-terms" ).dialog({
            position: { my: "center", at: "center top" },
            height: 800,
            width: 600,
            modal: true
          });
        // alert("here");
      });
});