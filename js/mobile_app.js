$(document).ready(function(){
    $(".home-header h1").animate({ fontSize: "2.7rem" }, 1000 );

    // Contact form validate mobile-contact-form
    $( "#mobileModal" ).hide();
    $('#firstNameSpan').hide();
    $('#phoneSpan').hide();
    $('#emailSpan').hide();
    $('#messageSpan').hide();

    $("#btn-submit-mobile").on("click", function() { 
        let firstName = $('#firstName').val();
        let phone = $('#phone').val();
        let email = $('#email').val();
        let message = $('#message').val();

        let firstNameSpan = $('#firstNameSpan');
        let phoneSpan = $('#phoneSpan');
        let emailSpan = $('#emailSpan');
        let messageSpan = $('#messageSpan');

        let flag = true;

        if (firstName === "") {
            firstNameSpan.show();
            flag = false;
        } else {
            firstNameSpan.hide();
            flag = true;
        }

        if (phone === "") {
            phoneSpan.show();
            flag = false;
        } else {
            phoneSpan.hide();
            flag = true;
        }

        if (email === "") {
            emailSpan.show();
            flag = false;
        } else {
            emailSpan.hide();
            flag = true;
        }

        if (message === "") {
            messageSpan.show();
            flag = false;
        } else {
            messageSpan.hide();
            flag = true;
        }

        if (flag) {
            $('#messageSent').show();
        }

        return false;
     });

    //  $('#mobile-contact-form').validate({
    //     rules: {
    //         firstName: {
    //             required: true
    //         },
    //         phone: {
    //             required: true
    //         },
    //         email: {
    //             required: true,
    //             email: true
    //         },
    //         message: {
    //             required: true
    //         }
    //     },
    //     messages: {
    //         firstName: {
    //             required: "Please enter your first name."
    //         },
    //         phone: {
    //             required: "Please enter your last name."
    //         },
    //         email: {
    //             required: "Please enter your email.",
    //             email: "Please enter a valid email."
    //         },
    //         message: {
    //             required: "Please enter a message."
    //         }
    //     },
    //     errorPlacement: function (error, element) {
    //         error.appendTo(element.parent().prev());
    //     },
    //     submitHandler: function () {
            
    //         return false;
    //     }
    // });
});