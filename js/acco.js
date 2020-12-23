$(function(){
    var sta = false; //시작하자마자 안보임 상태 저장
    $('.q').click(function(){
        //$('.a').hide();
        //$(this).next('.a').slideDown();
        
        //$('.icon').removeClass('act');
        //$(this).children('.icon').addClass('act');
        if(sta){ //보일때 코드
            $(this).next('.a').slideUp();
            $(this).children('.icon').removeClass('act');
            sta = false; //안보임 상태 저장
        }else{ //안보일때 코드
            $('.a').hide();
            $(this).next('.a').slideDown();
            $(this).children('.icon').addClass('act');
            sta = true; //보임 상태 저장
        }
    });
});