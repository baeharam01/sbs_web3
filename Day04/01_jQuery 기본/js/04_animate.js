
// 문서가 준비 되었을 때, 실행되는 함수

$(function() {
    
    $('#item1 .hide').on('click', function() {
        $('#item1 .inner').hide();
    });

    $('#item1 .show').on('click', function() {
        $('#item1 .inner').show();
    });

    $('#item1 .hide1000').on('click', function() {
        $('#item1 .inner').hide(1000);
    });

    $('#item1 .show1000').on('click', function() {
        $('#item1 .inner').show(1000);
    });

    //페이드
    $('#item2 .fadeOut').on('click', function() {
        $('#item2 .inner').fadeOut(2000);
    });

    $('#item2 .fadeIn').on('click', function() {
        $('#item2 .inner').fadeIn(2000);
    });

    $('#item2 .fadeToggle').on('click', function() {
        $('#item2 .inner').fadeToggle();
    });

    $('#item2 .fadeTo').on('click', function() {
        $('#item2 .inner').fadeTo('slow', 0.4);
    });

    //slide
    $('#item3 .slideDown').on('click', function() {
        $('#item3 .inner').slideDown();
    });

    $('#item3 .slideUp').on('click', function() {
        $('#item3 .inner').slideUp();
    });

    $('#item3 .slideToggle').on('click', function() {
        $('#item3 .inner').slideToggle();
    });

    //animate
    $('#item4 .animate').on('click', function() {
        // .animate( CSS 속성, 지속시간 );
        $('#item4 .inner').animate({
            'left': '400px',
            'opacity': '0.5',
            'color': 'red'
        }, 1000);
    });

    //mouseover animate
    // $('#item5')
    //     .on('mouseover', function() {
    //          $('#item5 .inner').animate({
    //              'opacity': '0.2'          
    //     }, 1000);
    //     })
    //     .on('mouseout', function() {
    //         $('#item5 .inner').animate({
    //             'opacity': '0.9'
    //         }, 1000)
    //     });

   
    // 애니메이션 취소 후 진행 => 반복이 사라짐
     $('#item5')
    .on('mouseover', function() {
         $('#item5 .inner').stop().animate({
             'opacity': '0.2'          
    }, 1000);
    })
    .on('mouseout', function() {
        $('#item5 .inner').stop().animate({
            'opacity': '0.9'
        }, 1000)
    });
    




});

