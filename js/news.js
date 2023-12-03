document.addEventListener("DOMContentLoaded", function() {
    var newsSlider = new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect : {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.btn.btn-warning.btn-sm');
    readMoreButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.target.style.backgroundColor = 'grey';
            event.target.innerHTML = 'visited';
        });
    });
});
