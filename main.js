function initializeApp(data) {
    liff.getProfile().then(function (profile) {
        $('#username')[0].textContent = profile.displayName;
    }).catch(function (error) {
        $('#username')[0].textContent = '找不到使用者名稱';
    });
}

$(window).on('load', function () {
    liff.init(function (data) {
        initializeApp(data);
    });

    $('#today')[0].valueAsDate = new Date();
    $('.btn').on('click', function () {
        $(this).toggleClass('active');
    })

    $('#submit').on('click', function () {
        $('.sk-circle').addClass('display');
        let services = $('.active');
        let serviceStr = [];
        for (const i of services) {
            serviceStr.push($(i).text());
        }
        serviceStr = serviceStr.join(',');
        let data = {
            date: $('#today').val().replace(/-/g, ''),
            user: $('.username').text(),
            client: $("#client").val(),
            remarks: $("#remarks").val(),
            time: new Date().toLocaleString(),
            services: serviceStr
        }
        $.get("https://script.google.com/macros/s/AKfycbwcBKnsx2s4ggbSGMJ9djk5GFwQPmL7sNBmr1ATxkP39LJJ5pI/exec", data).done(function () {
            $('.active').each(function () {
                $(this).removeClass('active');
            })
            $("#client").val('');
            $("#remarks").val('');
            $('.sk-circle').removeClass('display');
        }).fail(function () {
            alert("出現錯誤啦，幫QQ");
        })


    })
})