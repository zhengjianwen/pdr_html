// 跳转
var classNa;
$('.cateUl li').on('click', function () {
    classNa = $(this).attr('class');
    switch (classNa) {
        case 'comments':
            window.location.href = './comments.html'
            break;
        case 'myPost':
            window.location.href = './myPost.html'
            break;
        case 'mylike':
            window.location.href = './mylike.html'
            break;
        case 'look':
            window.location.href = './look.html'
            break;
        case 'fans':
            window.location.href = './fans.html'
            break;
    }
})