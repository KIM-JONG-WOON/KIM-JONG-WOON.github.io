
$(document).ready(function(){
    $('.had-ul li').click(function(e){
        e.preventDefault();
        var had_ul_idx = $(this).index();
        console.log(had_ul_idx);

        var had_con = $('.had-con');
        had_con.find('div:nth-child('+(had_ul_idx + 1)+')').toggleClass('active').siblings().removeClass('active');
    });
});