
// 문서가 준비 되었을 때, 실행되는 함수

$(function() {
    // $('#itme1').on('이벤트타입', '콜백함수');
    $('#item1').on('click', () => {
        $('#item1').css('color', 'hotpink');
    });

    $('#item2').on('click', function() {
        $(this).css('color', 'hotpink');
    });

    $('#item3').on('mouseover', function() {
        $('#item3').css('color', 'hotpink')
        $('#item3').css('background', 'royalblue')
    });
    
    $('#item3').on('mouseout', function() {
        $('#item3').css('color', 'white')
        $('#item3').css('background', '#3498db')
    });

    $('#item4')
        .on('mouseover', function() {
            $('#item4').css('color', 'hotpink')
            $('#item4').css('background', 'royalblue')
        })
        .on('mouseout', function() {
            $('#item4').css('color', 'white')
            $('#item4').css('background', '#3498db')
        });

// 메서드 체인은 이어지는 것이므로 중간에 세미콜론을 입력하지 않는다.

$('#item5')
        .on('mouseover', function() {
            $('#item5').css('color', 'hotpink')
            $('#item5').css('background', 'royalblue')
        })
        .on('mouseout', function() {
            $('#item5').css('color', 'white')
            $('#item5').css('background', '#3498db')
        })
        .on('click', function() {
            $('#item5').css('color', 'purple')
            $('#item5').css('background', 'cornflowerblue')
        })
        .on('dblclick', function() {
            $('#item5').css('color', 'red')
            $('#item5').css('background', 'black')
        });


});

