$(document).ready(function(){
    // Put the Contact page code in here

    $("#dialog-terms").hide();

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

    $(".btn-send-message").click(function(){

        // Checks if the form is valid when submited
        var form = $("#contact-form");
        if (form.valid()) {
            alert("Message sent!");
        }
        else {
            $("#inputFirstName").addClass("errorClass");
            $("#inputEmail").addClass("errorClass");
            $("#inputMessage").addClass("errorClass");
        }

        return false;
    });

    $("#contact-form").validate({
        rules: {
            inputFirstName: {
                required: true,
                minlength: 3,
            },
            inputEmail: {
                required: true,
                email: true
            },
            inputMessage: {
                required: true
            },
            termsAndConditionsCheckbox: {
                required: true
            }
        },
        messages: {
            inputFirstName: {
                required: "First name is required.",
                minlength: "Your first name must be at least 3 characters long."
            },
            inputEmail: {
                required: "Email is required.",
                email: "Please, enter a valid email address",
            },
            inputMessage: {
                required: "Message is required."
            },
            termsAndConditionsCheckbox: {
                required: "Term and Conditions is required."
            }
        }

    });

    $( ".terms-and-conditions" ).on( "click", function() {
        $( "#dialog-terms" ).dialog({
            position: { my: "center", at: "center top-5" },
            height: 600,
            width: 500,
            modal: true
          });
      });
});