$(document).ready(function(){
    
    $("#inputDate").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,

        showOn: "button",
        buttonImage: "images/calendar-icon.png",
        buttonImageOnly: true,
        buttonText: "Select date"
      });
    $("#inputDate").datepicker("option", "dateFormat", "d MM, y")

    $("#disabilitySubmitForm").validate({
        rules: {
            inputFirstName: {
                required: true,
                minlength: 6,
            },
            inputEmail: {
                required: true,
                minlength: 7,
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
                minlength: "Your full name must consist of at least 6 characters."
            },
            inputEmail: {
                required: "Please enter your email address.",
                minlength: "Your email address must consist of at least 7 characters.",
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
});