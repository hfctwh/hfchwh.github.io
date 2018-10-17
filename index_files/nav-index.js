$(document).ready(function () {
    var is_nav_show = false;
    $(document).scroll(function(){
        if($(document).scrollTop()>=$("#index-head-background")[0].height){
            if(!is_nav_show){
                $('.fiui-nav').animate({top: '0px'}, 400);
                is_nav_show=true;
            }
        }else{
            if(is_nav_show){
                $('.fiui-nav').animate({top: '-64px'}, 400);
                is_nav_show=false;
            }
        }
    });
});