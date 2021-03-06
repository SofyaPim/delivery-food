const accordion = () => {
    const questBtn = document.querySelectorAll('.faq-item'),
        answerBtn = document.querySelectorAll('.answer-item'),
        marks = document.querySelectorAll('.faq-mark');
    answerBtn.forEach(item => {
        item.style.maxHeight = '0px';
    })
    marks.forEach(item => {
        item.classList.remove('transformRotate');
    })

    questBtn.forEach(btn => {

        btn.addEventListener('click', (e) => {

            let mark = e.currentTarget.querySelector('.faq-mark');

            questBtn.forEach(item => {
                item.classList.remove('active');
               
            })
            
            answerBtn.forEach(item => {
                item.style.maxHeight = '0px';
            })
            marks.forEach(item => {
                 item.classList.remove('transformRotate');
               
            })
            if(e.currentTarget.classList.contains('active')){
               console.log('active')
            }


            if (!mark.classList.contains('transformRotate')) {
                 
                  mark.classList.add('transformRotate');
                  if(window.outerWidth < 414){
                    e.currentTarget.nextElementSibling.style.maxHeight = '300px';
                  }else{
                       e.currentTarget.nextElementSibling.style.maxHeight = '200px';
                  }
               
                e.currentTarget.classList.add('active');
            } else  {
                 mark.classList.remove('transformRotate');
                e.currentTarget.nextElementSibling.style.maxHeight = '0px'
                e.currentTarget.classList.remove('active');

            }



       


        })
    })

}
export default accordion;