$(document).ready(function(){
    // alert("working");

    $("#donationsModal").hide();

    var title = $( "#title" );

	title.hide();
	
	setTimeout(function() {
		title.show("fade", 1000);
	}, 300);

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

    $('#inputOrgPhone').usPhoneFormat({
            format:'(xxx) xxx-xxxx'
    });

    $('#inputPhone').usPhoneFormat({
        format:'(xxx) xxx-xxxx'
    });
        

    $("#form").validate({
        rules: {
            inputTaxID: {
                required: true
            },
            inputZip1: {
                required: true
            },
            inputOrganizationName: {
                required: true
            },            
            inputStreet1: {
                required: true
            },
            inputCity1: {
                required: true
            },
            inputState1: {
                required: true
            },
            inputArea: {
                required: true
            },
            inputOrgPhone: {
                required: true
            },
            inputOrgEmail: {
                required: true,
                email: true
            },
            inputMission: {
                required: true
            },
            inputFirstName: {
                required: true,
                minlength: 3
            },
            inputPhone: {
                required: true
            },
            inputEmail: {
                required: true
            },
            inputTitle: {
                required: true
            },
            inputFile1: {
                required: true
            },
            inputStreet2: {
                required: true
            },
            inputCity2: {
                required: true
            },
            inputState2: {
                required: true
            },
            inputZip2: {
                required: true
            },
            checkboxYo: {
                required: true
            }
        
        },
        messages: {
            inputTaxID: {
                required: "Tax ID is required"
            },
            inputZip1: {
                required: "Zip code is required"
            },
            inputOrganizationName: {
                required: "Select organization type"
            },
            inputStreet1: {
                required: "Street address is required"
            },
            inputCity1: {
                required: "City is required"
            },
            inputState1: {
                required: "State is required"
            },
            inputArea: {
                required: "Select area"
            },
            inputOrgPhone: {
                required: "Phone is required"
            },
            inputOrgEmail: {
                required: "Email is required",
                email: "Please, enter a valid email address",
            },
            inputMission: {
                required: "Message is required"
            },
            inputFirstName: {
                required: "First name is required",
                minlength: "Your first name must be at least 3 characters long"
            },
            inputPhone: {
                required: "Phone is required"
            },
            inputEmail: {
                required: "Email is required"
            },
            inputTitle: {
                required: "Title is required"
            },
            inputFile1: {
                required: "Attach at least one document."
            },
            inputStreet2: {
                required: "Street is required"
            },
            inputCity2: {
                required: "City is required"
            },
            inputState2: {
                required: "Province is required"
            },
            inputZip2: {
                required: "Zip is required"
            },
            checkboxYo: {
                required: "Please, check the box to continue"
            }
        },

        submitHandler: function() { 
            var donationsModal = $("#donationsModal");
            donationsModal.dialog({
                modal: true,
                buttons: {
                    "OK": function() {
                        $(this).dialog("close");
                    }
                }
                
            });
            return false; 
        }
    });


    
    $('#checkboxAddress').click(function(){
        var checkboxAddress = $("#checkboxAddress");
        if (checkboxAddress.is(":checked")) {
            $('#inputZip2').val($('#inputZip1').val());
            $('#inputZip2').attr('disabled', 'disabled');

            $('#inputStreet2').val($('#inputStreet1').val());
            $('#inputStreet2').attr('disabled', 'disabled');

            $('#inputCity2').val($('#inputCity1').val());
            $('#inputCity2').attr('disabled', 'disabled');

            $('#inputState2').val($('#inputState1').val());
            $('#inputState2').attr('disabled', 'disabled');
          } else {
            $('#inputStreet2').removeAttr('disabled');
            $('#inputCity2').removeAttr('disabled');
            $('#inputState2').removeAttr('disabled');
            $('#inputZip2').removeAttr('disabled');
          }
    });

    $("#line").animate(
        { width: 800 },
        3000
    );

    var availableTags = [
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Northwest Territories",
        "Nova Scotia",
        "Nunavut",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
        "HasYukonkell",
      ];
      $( "#inputState1" ).autocomplete({
        source: availableTags
      });
        
    

});