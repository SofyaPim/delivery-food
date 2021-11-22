const AnimateHeaders = () => {

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.querySelectorAll('.animated')) {
                    let headers = entry.target.querySelectorAll('.animated');
                    headers.forEach(el => {
                        el.classList.remove('translate');
                         el.classList.remove('opacity'); 
                        // setTimeout(() => {
                          
                        //            }, 1000)

                    //    if(el.childNodes[1]){
                    //        setTimeout(() => {
                    //             el.childNodes[1].style.opacity = 1;
                    //        }, 1000)
                          
                    //         console.log('done');
                    //    }
                      
                    })
                }
            }
        })

    }, {
        threshold: .2
    })
    document.querySelectorAll('section').forEach(item => {
        observer.observe(item)
    })

}
export default AnimateHeaders;