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
            questBtn.forEach(item => {
                item.classList.remove('active');
            })
            let mark = e.currentTarget.querySelector('.faq-mark');

            answerBtn.forEach(item => {
                item.style.maxHeight = '0px';
            })
            marks.forEach(item => {
                item.classList.remove('transformRotate');
            })


            if (!mark.classList.contains('transformRotate')) {
                  mark.classList.add('transformRotate');

                e.currentTarget.nextElementSibling.style.maxHeight = '200px';
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