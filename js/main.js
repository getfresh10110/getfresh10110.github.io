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
        if (zip == "10700") {
            window.location.href = "http://MVL.ordernow.getfresh.co.th";
        } else if ( (zip == "10160") || (zip == "10170") || (zip == "10500") || (zip == "10600")) {
            window.location.href = "http://EMP.ordernow.getfresh.co.th";
        } else if (zip == "10110") {
            window.location.href = "http://XCH.ordernow.getfresh.co.th";
        } else if ( (zip == "10210") || (zip == "10220" ) || (zip == "10230" ) || (zip == "10240" ) || (zip == "10310" ) || (zip == "10320" ) || (zip == "10400" ) || (zip == "10510" ) ) {
            window.location.href = "http://SNG.ordernow.getfresh.co.th";
        } else if ( (zip == "10250") || (zip == "10260" ) || (zip == "10510" ) || (zip == "10520" ) || (zip == "10530" ) ) {
            window.location.href = "http://WZD.ordernow.getfresh.co.th";
        } else if ( (zip == "10100") || (zip == "10160" ) || (zip == "10170" ) || (zip == "10200" ) || (zip == "10300" ) || (zip == "10400" ) || (zip == "10600" ) || (zip == "10700" ) || (zip == "10800" ) ) {
                window.location.href = "http://SYM.ordernow.getfresh.co.th";
        } else if ( (zip == "10120") || (zip == "10140" ) || (zip == "10150" ) || (zip == "10600" )) {
            window.location.href = "http://NLC.ordernow.getfresh.co.th";
        } else if (zip == "10330")  {
            window.location.href = "http://ASP.ordernow.getfresh.co.th";
        }
        } else if (zip == "") {
            $(".blank-text").fadeIn(1000);
        } else {
            $(".delivery").hide();
            $(".main-social-items").fadeIn(1000);
        }
    });
    $(document).on("click",'.language-switcher-flags li',function(){
        var val = $(this).attr("data-language"),
            currul = window.location.href;
            var spliturl = currul.split('/');
        if(val === 'en' && $.inArray( 'en' , spliturl  ) ){
            window.location.href = "/";
        }
        else {
            window.location.href = "/th";
        }   
    });
});