 const ShowSlide = () => {
 const btns = document.querySelectorAll('.slide-btn');
 const slide = document.querySelector('.slide-image');
 for (let i = 0; i <  slide.children.length; i++) {
    slide.children[i].style.display = 'none';
     
 }
 
 

 slide.children[0].style.display = 'block';
 btns.forEach(item => {
  
     item.addEventListener('click', (e,i)=> {
          item.classList.remove('active');
        for (let i = 0; i <  slide.children.length; i++) {
            slide.children[i].style.display = 'none';
              
         }
       if ( e.currentTarget === btns[0]) {
            slide.children[0].style.display = 'block';
           
            e.currentTarget.classList.add('active');
       } else if (e.currentTarget === btns[1]) {
           slide.children[1].style.display = 'block';
           
           e.currentTarget.classList.add('active');

       } else if(e.currentTarget === btns[2]){
            slide.children[2].style.display = 'block';
           
            e.currentTarget.classList.add('active');

       }
            
         
        
              

        //slide.children[i].style.display = 'block';
    })
 })
}
export default ShowSlide;