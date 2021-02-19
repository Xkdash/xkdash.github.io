var firstFieldFocus = $(':input').filter(":enabled:visible").not(":checkbox").not(":button").first();

$( document ).ready(function() {
    firstFieldFocus.focus();
});
