$(function(){
    $('.tabM a').click(function(){
        $('.tabM a').removeClass('act');
        $(this).addClass('act');
        
        var i = $(this).index();
        
        $('.tabC > div').hide();
        $('.tabC > div').eq(i).show();
        
        return false;
    });
});