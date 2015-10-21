$(function() {
    $("img.lazyimg").lazyload({
        effect: "fadeIn"
    });
    window.scrollTo(0, 1);

    // $(".list-figure").on("click","p", function(event) {
    //     var _this = this;
    //     var url="http://42.62.50.126/activity/beautiful/remark.php"
    //     var id=$("body").attr("id");
    //     var tid=$("body").attr("tid");
    //     var poid = $(this).parent().parent().attr("data-key");
    //     var flag = $(this).attr("data-id");
    //     if (flag == 0) {
    //         $(this).attr("data-id", 1);
    //         var value = $(this).children(".likecount").text();
    //         value++;
    //         $(this).children(".likecount").append("<span style='position:absolute;right:0rem;bottom:-0.8rem;'>+1</span>");
    //         $(this).children(".likecount").children("span").fadeOut("slow");
    //         $.post(url,{id:id,type:1,poid:poid,tid:tid},function(data){
    //             if (data.status==1) {
    //                 $(_this).children(".likecount").html(value);
    //                 $(_this).attr("data-id", 0);
    //                 $(".btn-style").attr("href","tzbl://?chance="+data.luckyDraw);
    //             }else{
    //                 alert(data.msg);
    //             }
    //         },"json");
    //     }
    // });

    $(".confirm").on("click", function(event) {
        var _this = this;
        if ($(_this).attr("data-gender")==1) {
            var gender="他";
        }else{
            var gender="她";
        }
        layer.open({
            content: '是否确认押宝'+gender+"？",
            btn: ['确认押宝', '我再想想'],
            shadeClose: false,
            yes: function(index){
                var url="http://42.62.50.126/activity/beautiful/remark.php"
                var id=$("body").attr("id");
                var tid=$("body").attr("tid");
                var poid = parseInt($(_this).parent().parent().attr("data-key"))+1;
                $.post(url,{id:id,type:2,poid:poid,tid:tid},function(data){
                    if (data.status==1) {
                        $(".onit").hide();
                        $(_this).parent().prev(".list-figure").find(".onit").show();
                        $(".confirm").hide();
                    }else{
                        alert(data.msg);
                    }
                },"json");
                layer.close(index)
            },
        });
    });
});