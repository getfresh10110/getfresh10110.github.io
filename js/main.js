$(document).ready(function () {
    var currul = window.location.href;
    var spliturl = currul.split('/');
    $.each(spliturl,function(i,item){
        if(item === 'th'){
            $('#language').val('th').prop('selected',true);
        }
    })
    $(".failure-text").hide();
    $(".blank-text").hide();
    $(".main-social-items").hide();
    $("#button").click(function () {
        var zip = $("#zipcode").val();
        if (zip == "10330") {
            window.location.href = "http://MVL.ordernow.getfresh.co.th";
        } else if (zip == "10120") {
            window.location.href = "http://EMP.ordernow.getfresh.co.th";
        } else if (zip == "10110") {
            window.location.href = "http://XCH.ordernow.getfresh.co.th";
        } else if (zip == "10310") {
            window.location.href = "http://SNG.ordernow.getfresh.co.th";
        } else if (zip == "10260") {
            window.location.href = "http://WZD.ordernow.getfresh.co.th";
        } else if (zip == "") {
            $(".blank-text").fadeIn(1000);
        } else {
            $(".delivery").hide();
            $(".main-social-items").fadeIn(1000);
        }
    });
    $(document).on("change",'#language',function(){
        var val = $(this).val(),
            currul = window.location.href;
            var spliturl = currul.split('/');
            console.log(currul.indexOf("/th"));
        if(val === 'en' && currul.indexOf("/th") == 0 ){
            window.location.href = "/";
            // if( currul.indexOf("stores.html") > 0  ){
            //     window.location.href = "/stores.html";
            // }
            // else if( currul.indexOf("delivery.html") > 0 ){
            //     window.location.href = "/delivery.html";
            // }
            // else{
            //     window.location.href = "/";
            // }
        }
        else {
            window.location.href = "/th";
            // if( $.inArray( currul.indexOf("stores.html") > 0 )){
            //     window.location.href = "/th/stores.html";
            // }
            // else if( $.inArray( currul.indexOf("delivery.html") > 0 )){
            //     window.location.href = "/th/delivery.html";
            // }
            // else{
            //     window.location.href = "/th";
            // }
            
        }   
    });
});