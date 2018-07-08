$(function () {
    getData();
    tabShow();
    // isScroll();
})

function getData() {
    var isMobile = true;
    $.ajax({
        type: "get",
        url: "./data/carousel.json",
        success: function (res) {
            if ($(window).width() > 768) {
                isMobile = false;
            }
            var strhtml = template("carTem", {
                "isMobile": isMobile,
                "list": res
            });
            $(".carousel-inner").html(strhtml);
            // 轮播图小圆点
            var generic = '';
            for (var i = 0; i < res.length; i++) {
                generic += '<li data-target="#carousel-example-generic" data-slide-to="' + i + '" class="' + (i == 0 ?"active":"" ) + '"></li>';
            }
            $('.carousel-indicators').html(generic);
        }
    })
}

function tabShow(){
    $(".wjs_product .row .nav-tabs li a").click(function(e){
        e.preventDefault();
        $(this).tab('show');
    })
}

// function isScroll(){
//     var myScroll = new IScroll('.wrapper',{
//         scrollX:true,
//         scrollY:false,
//         click:true
//     });
// }