$(document).ready(function(){
    var icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };

    $("#bookAccordion").accordion({
        collapsible: true,
        icons: icons,
        heightStyle: "content",
        active: 'none'
    });

    $("#inputFullName").tooltip({
        hide: { effect: "explode", duration: 1000 }
    });
    $("#inputEmail").tooltip({
        hide: { effect: "explode", duration: 1000 }
    });
    $("#inputPhone").tooltip({
        hide: { effect: "explode", duration: 1000 }
    });
    $("#inputDate").tooltip({
        hide: { effect: "explode", duration: 1000 }
    });
    $("#inputTime").tooltip({
        hide: { effect: "explode", duration: 1000 }
    }).timepicker({
        timeFormat: 'h:mm p',
        interval: 30,
        minTime: '8:00am',
        maxTime: '8:30pm',
        defaultTime: '5',
        dynamic: true,
        dropdown: true,
        scrollbar: true
    });;
    
    $( "#inputDate" ).datepicker({
        dateFormat: "yy-mm-dd"
    });
    
    $( "#inputPeople" ).tooltip({
        hide: { effect: "explode", duration: 1000 }
    });

    $("#bookATable-form").validate({
        rules: {
            inputFullName: {
                required: true,
                minlength: 3,
            },
            inputEmail: {
                required: true,
                minlength: 7,
                email: true
            },
            inputPhone: {
                required: true,
                phoneUS: true
            },
            inputDate: {
                required: true,
                dateISO: true
            },
            inputTime: {
                required: true,
                minlength: 3,
            },
            inputPeople: {
                required: true
            }
        },
        messages: {
            inputFullName: {
                required: "Please enter your full name.",
                minlength: "Your full name must consist of at least 3 characters."
            },
            inputEmail: {
                required: "Please enter your email address.",
                minlength: "Your email address must consist of at least 7 characters.",
                email: "Please enter a valid email address",
            },
            inputPhone: {
                required: "Please enter your phone number.",
                phoneUS: "The number must be in the following format: +1-(234)-256-1234"
            },
            inputDate: {
                required: "Please enter the reservation date.",
                dateISO: "Please enter a valid reservation date (YYYY-MM-DD)."
            },
            inputTime: {
                required: "Please enter the reservation time.",
            },
            inputPeople: {
                required: "Please select how many people for the resevation.",
            },
        },
        submitHandler: function() { 
            //

            return false; 
        }
    });
});