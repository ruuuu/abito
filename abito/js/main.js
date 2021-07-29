//скопировали этот кусок коди из ращдела  Initialize Swiper

// const swiper = new Swiper('.swiper-container', {
//   // Optional parameters
//   direction: 'horizontal', // горизонтальный лента прокрутки(скроллбар)
//   loop: true, // зацикленность слайдов

//   // // есл инужна пагинация
//   // pagination: {
//   //   el: '.swiper-pagination',
//   // },

//   // // стрлки Впреед/Назад
//   // navigation: {
//   //   nextEl: '.swiper-button-next',
//   //   prevEl: '.swiper-button-prev',
//   // },

//   //  Лента прокрутки(скроллбар)
//   // scrollbar: {
//   //   el: '.swiper-scrollbar',
//   // },
// });

var swiper = new Swiper(".mySwiper", { // код отсюда взяли https://codesandbox.io/s/t5l65?file=/index.html:5240-5729
        loop: true,
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        
        thumbs: {
          swiper: swiper,
        },
});


const menuBtn = document.querySelector('.menu-button'); // бургер 
const menu = document.querySelector('.navbar-panel');
const closeMenuBtn = document.querySelector('.close-menu'); // кнпока крестик

menuBtn.addEventListener('click', () => { // обработчки для кнпоки бургер
    menu.classList.toggle('is-open');
});


closeMenuBtn.addEventListener('click', ()=> { // обработчик кнпоки закрытия крестк
    menu.classList.toggle('is-open');
});