$(document).ready(function() {
    $("input[name$='optradio']").click(function() {
        var question_val = $(this).val();

        $("div.description").hide();
        $("#optradio" + question_val).show();
    });
});