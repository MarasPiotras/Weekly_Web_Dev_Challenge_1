// text field growing on focus
$("input, textarea").focus(function () {
    $(this).parent().addClass("active");

}).blur(function () {
    $(this).parent().removeClass("active");
})
// end of text field growing function

//password match function
$('#password, #password-confirmation').focusout(function () {
    // get values on the focusout event
    var pass = $('#password').val();
    var pass2 = $('#password-confirmation').val();
    // test if passwords match
    //if passwords don't match
    if (pass != pass2) {
        $("#submit").attr("disabled", true);
        $("#submit").text("Passwords must be equal!");
        $("#submit").removeClass("enabled");
        $("#submit").addClass("disabled");
    }
    //if passwords match
    else {
        $("#submit").removeAttr("disabled");
        $("#submit").addClass("enabled");
        $("#submit").removeClass("disabled");
        $("#submit").text("Sign up");
    }
});
//end of password match function