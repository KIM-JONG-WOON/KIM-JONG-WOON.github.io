
$(document).ready(function(){
    $('.had-ul li').click(function(){
        var had_ul_idx = $(this).index();
        console.log(had_ul_idx);

        $('.had-con div:nth-child('+(had_ul_idx + 1)+')').toggleClass('active').siblings().removeClass('active');
        //had_con.find('div:nth-child('+(had_ul_idx + 1)+')   ').addClass('active'); 
    });

    $('.Hlamp').click(function(){
        $('body').toggleClass('change-b');

        var fill = $('.LampC').attr('fill');

        if( fill == "#ffffff") {
            $('.LampC').attr('fill',"#000000");
        } else {
            $('.LampC').attr('fill',"#ffffff");
        }

        $('.Hlamp label, .who-img li, .who-text li, .tech-label label, .had-ul li, .copy label').toggleClass('change-c');

        var me1 = $('.img-me1 img');
        console.log(me1);
        if (me1.attr('src') == "assets/me1.png") {
            me1.attr('src','assets/me2.png')
        } else {
            me1.attr('src','assets/me1.png')
        }

        var me2 = $('.who-img img');
        if (me2.attr('src') == "assets/me3.png") {
            me2.attr('src','assets/me4.png')
        } else {
            me2.attr('src','assets/me3.png')
        }
    });




});