$(document).ready(function() {
    $("input[name$='optradio']").click(function() {
        var question_val = $(this).val();

        $("div.description").hide();
        $("#optradio_" + question_val + "_sub").show();
    });
});