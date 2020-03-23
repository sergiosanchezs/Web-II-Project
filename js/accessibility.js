$(document).ready(function(){
    
    // Hide the two dialog elements
    $("#dialog-terms").hide();
    $("#confirmation-dialog").hide();

    // Hide the calendar
    $(".calendar").hide();

    // Activate the tooltip widget for each input box (exept date)
    $(".tooltip-control").tooltip({
        position: {
            my: "left top",
            at: "left bottom+2",
            collision: "none"
        },
        open: function( event, ui ) {
            ui.tooltip.animate({ top: "+=8" }, "fast" ); // Move to the bottom direction
        }
    });

    // Customized tooltip position for the date input box
    $(".date-tooltip-control").tooltip({
        // JQuery UI Utility** (position)
        position: {
            my: "left top",
            at: "right+2 top-10",
            collision: "none"
        },
        open: function( event, ui ) {
            ui.tooltip.animate({left: "+=8"}, "fast"); // Move to the right direction
        }
    });

    $(".btn-submit").click(function(){
        var form = $("#disabilitySubmitForm");
        var inputEmail = $("#inputEmail");
        var emailDialog = $("#emailDialog");

        // Checks if the form is valid when submited and display a dialog to the user
        if (form.valid()) {
            $("#confirmation-dialog").dialog({
                modal: true,
                height: 280,
                width: 500,
                buttons: {
                    "OK": function() {
                        $(this).dialog("close");
                    }
                },
                open: function(){
                    emailDialog.text(inputEmail.val());
                    emailDialog.addClass("text-lowercase");
                }
              });
        }

        // Prevents tooltip default action when the submit button is pressed
        $("[title]").tooltip("option", "hide");
    });

    // Phone Formatter Plugin for auto formating the phone input box
    $('#inputPhone').usPhoneFormat({
        format: '(xxx) xxx-xxxx'
      });

    // Calendar Plugin for the user visualize better the date.
    let c = $('.calendar');
    let calendar = new Calendar(c);

    // Show the calendar when it's on focus
    $("#inputDate").focus(function () {
        $(".calendar").show("blind", "slow");
    });

    // Gets the full date to the input box and close the calendar when the OK button is clicked
    c.find('.ok-btn1').on('click', function() {
        var dateValue = calendar.getSelectedDate().fullDate;
        $("#inputDate").val(dateValue);
        $(".calendar").hide("blind", "slow");
      });

    // Hide the calendar when the CANCEL button is clicked
    c.find('.cancel-btn1').on('click', function() {
        $(".calendar").hide("blind", "slow");
    });

    // Hide the calendar when the user focus on another input box
    $(".input-form").focus(function () {
        $(".calendar").hide("blind", "slow");
    });


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
            },
            inputDate: {
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
                email: "Please enter a valid email address"
            },
            inputDescription: {
                required: "Please, you must provide a description."
            },
            confirmDisability: {
                required: "Term and Conditions is required."
            },
            inputDate: {
                required: "Please, you must provide a date."
            }
        }
    });

    // Terms and Conditions dialog
    $(".terms-and-conditions").click(function() {
        $("#dialog-terms").dialog({
            height: 1000,
            width: 600,
            modal: true
          });
      });
});