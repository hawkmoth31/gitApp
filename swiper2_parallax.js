// swiper1 은 사용자 지정 식별자명으로 여러 개의 스와이퍼 적용시 변경하여 사용. 
const swiper1 = new Swiper("#my_style", {
  speed: 600,// 속도
  parallax: true,// 패럴럭스 효과
  pagination: {// 하단 버튼
    el: ".swiper-pagination",
    clickable: true,// 클릭하면 해당 페이지로 이동
    type: 'fraction'// 숫자
  },
  navigation: {// 좌우 화살표 버튼
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});