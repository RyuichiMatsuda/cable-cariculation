$(function () {
    $("#total_sum").on('click', function () {
        let num1 = $("#box1").val();
        let num2 = $("#box2").val();
        let total = 0

        if (!num1 || !num2) {


            $("#lbl_total").text("は?");
            $("#lbl_total").animate({
                'font-size':'300px'
            },500
            )
        } else {
            total = parseInt(num1) + parseInt(num2)
            $("#lbl_total").text(total);
            $("#lbl_total").animate({
                'font-size': '20px'
            }, 500)
            comparison(total);
        }
    });
});

function comparison(total) {
    $(".num_all").each(function (index, element) {
        let td = $(element).text();
        if (td < total) {
            $(element).animate(
                {
                    'opacity': 1,
                    'backgroundColor': 'white'
                }, 300
            );
        } else if (td == total) {
            $(element).animate(
                {
                    'opacity': 0.9,
                    'backgroundColor': '#ffffe0'
                }, 500
            );
        } else if (td > total) {
            $(element).animate(
                {
                    'opacity': 0.8,
                    'backgroundColor': '#ff6347'
                }, 800
            );
        }
    });

}
