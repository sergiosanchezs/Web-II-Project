$(document).ready(function(){
    
    // Start the JQuery carousel plugin
    var jcarousel = $('.jcarousel');

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            var width = jcarousel.innerWidth();
            jcarousel.jcarousel('items').css('width', width + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });

    // Auto Scroll
    $(".jcarousel").jcarouselAutoscroll();

    // On mouse hover Stop Auto Scroll
    $(".jcarousel").on({
        mouseenter: function(){
            $('.jcarousel').jcarouselAutoscroll('stop');
        },
        mouseleave: function(){
            $('.jcarousel').jcarouselAutoscroll('start');
        }
    });

    
    // Set the controls
    $(".jcarousel-control-prev").jcarouselControl({
        target: '-=1'
    });

    $(".jcarousel-control-next").jcarouselControl({
        target: '+=1'
    });

    // Validation plugin used for form validation
    $("#testimonialForm").validate({
        rules: {
            inputName: {
                required: true,
                minlength: 3,
            },
            inputDescription: {
                required: true
            }
        },
        messages: {
            inputName: {
                required: "Please enter your full name.",
                minlength: "Your full name must consist of at least 3 characters."
            },
            inputDescription: {
                required: "Please, you must provide a description."
            }
        }
    });

    $(".btn-submit").click(function(){
        var form = $("#testimonialForm");

        // Checks if the form is valid when submited and display a dialog to the user
        if (form.valid()) {

            // Show Bootstrap modal
            $("#confirmationModal").modal('show');

            // $("#confirmation-dialog").dialog({
            //     modal: true,
            //     height: 280,
            //     width: 500,
            //     buttons: {
            //         "OK": function() {
            //             $(this).dialog("close");
            //         }
            //     },
            //     open: function(){
            //         emailDialog.text(inputEmail.val());
            //         emailDialog.addClass("text-lowercase");
            //     }
            //   });
        }
    });
});