var mySwiperone = new Swiper('.swiper-one', {
    loop: true, // 循环模式选项
    parallax : true,

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     // delay: 2000,//1秒切换一次
    // },
}) 

var mySwipertwo = new Swiper('.swiper-two', {
    loop: true, // 循环模式选项
    parallax : true,

    slidesPerView: 6,
    grid: {
        fill: 'column',
        rows: 1,
    },
    autoplay: {
        // delay: 2000,//1秒切换一次
    },

})       