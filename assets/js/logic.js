$(document).ready(function() {

    // Make the banner images scroll
    $('.slider').slider();
    // SideNav functionality
    $(".button-collapse").sideNav({
        draggable: true
    });

    // Submit form functionality
    $('#submit-button').click(function() {
        event.preventDefault();

        var data = {
            firstName: $('#first_name').val(),
            lastName: $('#last_name').val(),
            email: $('#email').val(),
            message: $('#textarea').val()
        };

        $.ajax({
                url: 'email.php',
                type: 'POST',
                data: data,
            })
            .done(function() {
                console.log("success");
                $('#first_name').val("");
                $('#last_name').val("");
                $('#email').val("");
                $('#textarea').val("");
            })
            .fail(function() {
                console.log("error");

            });

    });

});
