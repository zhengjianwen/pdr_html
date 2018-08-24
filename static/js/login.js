$('#getSms').on('click', function () {
    var num = 60;
    var times = setInterval(function () {
        $("#getSms").text(num-- + "秒重试");
        $("#getSms").attr('disabled','disabled');
        if (num == 0) {
            clearInterval(times);
            $("#getSms").attr('disabled',false);
            $("#getSms").text("获取验证码");
        }
    }, 1000);
})

// 获取验证码
// function getCode(postParams) {
//     $.ajax({
//         url: rootPath + '/login/sms',
//         type: 'POST',
//         dataType: 'json',
//         data: postParams,
//         success: function (data) {
//             if (data.success) {
//                 var num = 120;
//                 var times = setInterval(function () {
//                     $("#getnums span").text(num-- + "秒重试");
//                     $("#getnums").attr("data-send", "true");
//                     if (num == 0) {
//                         clearInterval(times);
//                         $("#getnums").attr("data-send", "false");
//                         $("#getnums span").text("获取验证码");
//                     }
//                 }, 1000);
//             } else {
//                 mui.alert(data.message, "提示", "确定");
//                 $("#getnums span").text("获取验证码");
//             }
//         },
//         error: function () {
//             window.location.reload();
//         }
//     });
// }