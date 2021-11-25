 const scrolling = () => {
     window.addEventListener('scroll', () => {
         let main = document.querySelector('.main-slider');
         let footer = document.querySelector('.footer');
         let arrowUp = document.querySelector('#page-up');

         if (main.getBoundingClientRect().bottom < 100 ) {
             arrowUp.style.opacity = 1;

         } else {
             arrowUp.style.opacity = 0;

         }
     }, {
         passive: true
     })


     let links = document.querySelectorAll('[href^="#"]'),
         speed = 0.3;

     links.forEach(link => {
         link.addEventListener('click', function (event) {
             event.preventDefault();
             //======================= nav-bar
             let navBar = document.querySelector('.nav-bar');
             navBar.classList.add('transformTransX');
             let l1 = document.querySelector('.line1'),
                 l2 = document.querySelector('.line2'),
                 l3 = document.querySelector('.line3'),
                 line = document.querySelectorAll('.line');
             l2.classList.remove('displayNone');
             l1.classList.remove('transform45deg');
             l3.classList.remove('transformMin45deg');
             document.body.style.overflow = '';
             line.forEach(elem => {
                elem.classList.remove('white');
            })



             let widthTop = document.documentElement.scrollTop,
                 hash = this.hash,
                 toBlock = document.querySelector(hash).getBoundingClientRect().top,
                 start = null;

             requestAnimationFrame(step);

             function step(time) {
                 if (start === null) {
                     start = time;
                 }

                 let progress = time - start,
                     r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                 document.documentElement.scrollTo(0, r);

                 if (r != widthTop + toBlock) {
                     requestAnimationFrame(step);
                 } else {
                     location.hash = hash;
                 }
             }
         });
     });

     //  document.querySelectorAll('a.nav-item').forEach(link => {
     //      link.addEventListener('click', function(e){
     //          e.preventDefault;
     //          const href = this.getAttribute('href').substring(1);
     //          const scrollTarget = document.getElementById(href);
     //          const topOffset = 0;
     //          const elemPosition = scrollTarget.getBoundingClientRect().top;
     //          const offsetPosition = elemPosition - topOffset;
     //          window.scrollBy({
     //              top: offsetPosition,
     //              behavior:'smooth'
     //          })

     //      })
     //  })
 }
 export default scrolling;