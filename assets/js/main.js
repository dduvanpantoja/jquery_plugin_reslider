/**
 * Created by Jacobwang on 15/4/15.
 */

var salala = {
    init:function(){
        this.setIndexImg();
        this.resNav();
        this.maskShow()
    },
    setIndexImg:function(){

        var $Height = $(window).height();
        //$('.wrap-index').css({
        //    'max-height':$Height-20
        //})

        //console.log($Height)
        //$('.slider img').css({
        //    'height': $Height
        //})
    },
    resNav:function(){
        var isShow = true;

        $('.repo-btn').on('click',function(){
            if(isShow){
                $('.nav-group').slideDown(200);
                isShow = false
            }else{
                $('.nav-group').slideUp(200);
                isShow = true
            }

        })
    },
    maskShow:function(){
        $('.nav-order').on('click',function(){
            if($(window).width()<768){
                window.location.href = 'http://www.baidu.com'
            }else{
                $('.mask-area').show();
                $('.mask-alert').show();
            }

        })

        $('.mask-close').on('click',function(){
            $('.mask-area').hide();
            $('.mask-alert').hide();
        })
    }
}