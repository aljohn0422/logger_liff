document.querySelector("#today").valueAsDate = new Date();

$('.btn').on('click', function () {
    $(this).toggleClass('active');
})