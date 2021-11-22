function showBurger() {
    const btn = document.querySelector('.nav-burger'),
        header = document.querySelector('.header'),
        navBar = document.querySelector('.nav-bar'),
        navLink = navBar.querySelectorAll('.nav-item');

    let l1 = btn.querySelector('.line1'),
        l2 = btn.querySelector('.line2'),
        l3 = btn.querySelector('.line3');
        // navLink.forEach(link => {
        //     link.addEventListener('click', () => {
        //         if(navBar.classList.contains('transformTransX')){
        //             navBar.classList.remove('transformTransX');
        //         l2.classList.remove('displayNone');
        //         l1.classList.remove('transform45deg');
        //         l3.classList.remove('transformMin45deg');
        //         document.body.style.overflow = '';
        //         }
        //     })
        // })

    btn.addEventListener('click', (e) => {

        if (e.target === btn ) {
            l2.classList.toggle('displayNone');
            l1.classList.toggle('transform45deg');
            l3.classList.toggle('transformMin45deg');
            navBar.classList.toggle('transformTransX');
            document.body.style.overflow = 'hidden';
        
        }
        
     
    })
    // navBar.addEventListener('click', (e)=> {
        
    //         if (e.currentTarget === navBar &&  navBar.classList.contains('transformTransX')) {
    //             navBar.classList.add('transformTransX');
    //             l2.classList.remove('displayNone');
    //             l1.classList.remove('transform45deg');
    //             l3.classList.remove('transformMin45deg');
    //             document.body.style.overflow = '';

    //         }
     
    // })
    // document.addEventListener('scroll', () => {
    //     if (navBar.classList.contains('transformTransX') && document.documentElement.clientWidth >= 640) {
    //         navBar.classList.remove('transformTransX');
    //         l2.classList.remove('displayNone');
    //         l1.classList.remove('transform45deg');
    //         l3.classList.remove('transformMin45deg');
    //         document.body.style.overflow = '';

    //     } else if (document.documentElement.clientWidth <= 640 && navBar.classList.contains('transformTransX')) {

    //         document.body.style.overflow = 'hidden';
    //     }

    // }, {
    //     passive: true
    // })
}
export default showBurger;