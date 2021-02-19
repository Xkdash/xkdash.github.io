var firstFieldFocus = $(':input').filter(":enabled:visible").not(":checkbox").not(":button").first();
var varFormID = $("#FormValues");
var varUsernameFormID = $("#username");
var varSubmitButton = $("#SubmitButton");

$( varFormID ).submit(function(event) {
//    event.preventDefault();
    varUsernameFormID.val(varUsernameFormID.val().toLowerCase());
//    varSubmitButton.submit();
});

