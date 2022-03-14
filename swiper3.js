const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,// 화면에 이미지 1개씩
  // spaceBetween: 30, 이미지들 사이 간격
  loop: true,// 4->1로 자연스럽게 넘어갈 수 있게
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {//자동 실행
    delay: 4000,//1초 대기후 이동
  },
  breakpoints: {
    // 413과 같거나 크면
    413: {
      slidesPerView:1,// 화면에 이미지 2개씩
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
    }
  }
});

// 원하는 이미지로 이동(loop버전)
const menu = document.querySelectorAll('#gnb li');
menu.forEach( (item, idx) => {
  item.addEventListener('click', ()=>{
    swiper.slideToLoop(idx, 500);// 해당 페이지로 이동
    swiper.autoplay.start();// 자동 시작
  });
});