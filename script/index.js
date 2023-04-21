$(document).ready(function(){
    $(window).scroll(function(){
        //到下面的距離
        let scrollBotton = $(document).height()-$(this).height()-$(this).scrollTop()
        
        //go to top btn
        if($(this).scrollTop() > 100){
            $("#btn-gotop").fadeIn(300)
        }
        else{
            $("#btn-gotop").fadeOut(300)
        }

        //footer text
        if(scrollBotton < 50){
            $('.footer p').fadeIn(1000)
        }
        else{
            $('.footer p').fadeOut(1000)
        }
    })
    
    //go to top
    $("#btn-gotop").on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        })
    })

    $("#btn-gotop").on('touchend', function(){
        $(this).blur()
        console.log('touchend', $(this))
    })
})