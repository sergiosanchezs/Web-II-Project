$(document).ready(function(){

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

    $('#inputPhone').usPhoneFormat({
        format:'(xxx) xxx-xxxx'
    });

    $(".btn-send-message").click(function(){

        // Checks if the form is valid when submited
        var form = $("#contact-form");
        var firstName = $("#inputFirstName"), email = $("#inputEmail"), message = $("#inputMessage");

        if (form.valid()) {
            $("#contactModal").modal('show'); 
        }

        if (firstName.valid()) {
            firstName.removeClass("errorClass");
        }
        else {
            firstName.addClass("errorClass");  
        }
        if (email.valid()) {
            email.removeClass("errorClass");
        }
        else {
            email.addClass("errorClass");  
        }
        if (message.valid()) {
            message.removeClass("errorClass");
        }
        else {
            message.addClass("errorClass");  
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
        },
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