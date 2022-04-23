
  const smoothScrollTrigger = document.querySelectorAll('a[href ^= "#"]');
  // #が付くhrefのタグを取得
  
  const targetMenu = document.querySelectorAll('main > div')
  
  for (let i = 0; i < smoothScrollTrigger.length; i ++) {

    smoothScrollTrigger[i].addEventListener('click', function(e){
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const target = rect + offset;

      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });

    window.addEventListener('scroll', function(){
      let offsetTop = targetMenu[i].getBoundingClientRect().top;
      console.log(offsetTop)
      let offsetBottom = targetMenu[i].getBoundingClientRect().bottom;

        if(offsetTop <= 1) {
          smoothScrollTrigger[i].classList.add('current');
        } else {
          smoothScrollTrigger[i].classList.remove('current');
        }
  
        if (offsetBottom <= 1) {
          smoothScrollTrigger[i].classList.remove('current');
        }
    })
  }


