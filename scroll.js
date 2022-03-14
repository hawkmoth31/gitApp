var lastScrollTop = 0; 


var didScroll; // 스크롤시에 사용자가 스크롤했다는 것을 알림
var delta = 5; 
// 동작의 구현이 시작되는 위치 
var navbarHeight = $('header').outerHeight(); 
// 영향을 받을 요소를 선택

$(window).scroll(function(event){
    didScroll = true; 
}); 
// hasScrolled()를 실행하고 didScroll 상태를 재설정

setInterval(function() { 
    if (didScroll) {
         hasScrolled();
          didScroll = false; 
        } 
    }, 250); 
    
    function hasScrolled() { 
        // 동작을 구현 
        var st = $(this).scrollTop();
    
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

            if (st > lastScrollTop && st > navbarHeight){
                 // Scroll Down 
                 $('header').removeClass('nav-down').addClass('nav-up'); 
                } else { 
                    // Scroll Up 
                    if(st + $(window).height() < $(document).height()) { 
                        $('header').removeClass('nav-up').addClass('nav-down'); 
                    } 
                } lastScrollTop = st;

                출처: https://webdir.tistory.com/481 [WEBDIR]
    }


