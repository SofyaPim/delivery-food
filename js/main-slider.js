const showSlide = (slides,headersSelectors, dir, next) => {
    let slideIndex = 1,
        paused = false;

    const items = document.querySelectorAll(slides);
    const headers = document.querySelectorAll(headersSelectors);
          
    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add("animate__animated");
            item.style.display = "none";
        });
        
        items[slideIndex - 1].style.display = 'flex';
        //==========
        if (n > headers.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = headers.length;
        }
        headers.forEach(header => {
            header.classList.add("animate__animated");
            header.style.display = "none";
        });
        headers[slideIndex - 1].style.display = 'block';
        //==============
        
    
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const nextBtn = document.querySelector(next);

        // prevBtn.addEventListener('click', () => {
        //     plusSlides(-1);
        //    headers[slideIndex - 1].classList.add('animate__fadeInLeft');
        //     items[slideIndex - 1].classList.remove('animate__fadeOut');
        //     items[slideIndex - 1].classList.add('animate__fadeIn');
           
        // });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('animate__adeOut');
            headers[slideIndex - 1].classList.add('animate__fadeInLeft');
            items[slideIndex - 1].classList.add('animate__fadeIn');
            
        });
    } catch(e){}

    // function activateAnimation() {
    //     if (dir === 'vertical') {
    //         paused = setInterval(function() {
    //             plusSlides(1);
    //             items[slideIndex - 1].classList.add('animate__slideInDown');
    //         }, 3000);
    //     } else {
    //         paused = setInterval(function() {
    //             plusSlides(1);
    //             items[slideIndex - 1].classList.remove('animate__fadeOut');
    //             items[slideIndex - 1].classList.add('animate__fadeIn');
    //             items[slideIndex - 1].querySelector('.slide-header').style.transform = 'translateX(0%)'; 
    //         }, 3000);
    //     }
    // }
    // activateAnimation();

    // items[0].parentNode.addEventListener('mouseenter', () => {
    //     clearInterval(paused);
    // });
    // items[0].parentNode.addEventListener('mouseleave', () => {
    //     activateAnimation();
    // });

};

export default showSlide;