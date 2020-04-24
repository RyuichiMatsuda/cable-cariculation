$(function () {
    $("#total_sum").on('click', function () {
        let num1 = $("#box1").val();
        let num2 = $("#box2").val();
        let total = 0
        if (!num1 || !num2) {
            $("#lbl_total").text("は?");
            $("#lbl_total").css('font-size', '300px')
        } else {
            total = parseInt(num1) + parseInt(num2)
            $("#lbl_total").text(total);
            comparison(total);
        }
    });
});

function comparison(total) {
    $(".num_all").each(function (index, element) {
        let td = $(element).text();
        if (td < total) {
            $(element).css('background-color', 'white');
        } else if (td == total) {
            $(element).css('background-color', 'yellow');
        } else if (td > total) {
            $(element).css('background-color', 'red');
        }
    });

}
