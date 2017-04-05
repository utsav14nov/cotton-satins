$( document ).ready(function() {
    $("#submit").click(function(){
        var sEmail = $('#fname').val();
        if (validateEmail(sEmail)) {
            console.log("10");
            ajaxInsert(sEmail);
            $(".second_col").hide();
            $(".second_col_thankyou").show();
            
        }else {
            console.log("100");
            $(".error-msg").html("Please enter a valid email address");
            // setTimeout(function() {
            //     $(".error-msg").hide()
            // }, 5000);
        }
    });
    function validateEmail(sEmail) {
        var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        if (filter.test(sEmail)) {
            return true;
        }
    }

    function ajaxInsert(sEmail){
        $.ajax({

            url : 'controller.php',
            type : 'POST',
            data : {
                'sEmail' : sEmail
            },
            dataType:'json',
            success : function(data) {              
            }
        });
    }
});