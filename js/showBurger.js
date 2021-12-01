function showBurger() {
    const btn = document.querySelector('.nav-burger'),
        navBar = document.querySelector('.nav-bar'),
        line = document.querySelectorAll('.line');

    let l1 = btn.querySelector('.line1'),
        l2 = btn.querySelector('.line2'),
        l3 = btn.querySelector('.line3');
       

    btn.addEventListener('click', () => {
        l2.classList.toggle('displayNone');
        l1.classList.toggle('transform45deg');
        l3.classList.toggle('transformMin45deg');
        navBar.classList.toggle('transformTransX');
        if(!navBar.classList.contains('transformTransX')){
              document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = '';
        }
      
        line.forEach(elem => {
            elem.classList.toggle('white');
        })
       
     
    })
    navBar.addEventListener('click', ()=> {
        
         
                navBar.classList.add('transformTransX');
                l2.classList.remove('displayNone');
                l1.classList.remove('transform45deg');
                l3.classList.remove('transformMin45deg');
                document.body.style.overflow = '';
                line.forEach(elem => {
                    elem.classList.toggle('white');
                })
               
            
     
    })
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