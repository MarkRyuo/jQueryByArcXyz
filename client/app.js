


$(document).ready(function() {
    // chain method

    const $display = $("#display");

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/",
        success: function(data){
            console.log(data)
            $display.text(`Message: ${data.message}`)
        }
    })

})