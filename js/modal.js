function modal(triggerSelector, modalSelector, closeSelector) {
    const triggers = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        closeBtn = document.querySelector(closeSelector),
        modalHeader = modal.querySelector('.popup-title'),
        errorMsg = document.querySelectorAll('span.message'),
        // priceTitle = document.createElement('h5'),
        // dayName = document.createElement('h4'),
        progName = document.createElement('h4');



    triggers.forEach(trigger => {
      

        trigger.addEventListener('click', (e) => {
            // console.log(triggerGrandPa.dataset.prog);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';

            if (e.target.innerHTML.trim() === 'подробнее' || e.target.innerHTML.trim() === 'заказать обратный звонок') {
                modalHeader.innerHTML = `Заказать обратный звонок `;

            }
            if (e.target.parentElement.dataset.prog) {
                 // let triggerParent = e.target.parentElement;
        let triggerGrandPa = e.target.parentElement.dataset.prog;
                // let price = triggerParent.querySelector('.card-price').innerText;
                // let day = triggerParent.querySelector('.card-title').innerText;
              //  day =   day.replace('А', 'У');
                                   

                progName.innerHTML = `Вы выбрали меню по программе <span>${triggerGrandPa}</span>. `
                progName.classList.add('form-commit');
                // dayName.innerHTML = ` <br> Вы выбрали меню на этот день`;
                // modalHeader.innerHTML = `Оформление заказа`;
                // progName.innerHTML = `${triggerGrandPa.dataset.prog}`;
                // priceTitle.innerHTML = `сумма заказа составляет${price}`;
                modalHeader.after(progName); //добавление названия тарифа
                // progName.after(dayName);
                // dayName.after(priceTitle);
            }
        })



    })
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        // dayName.remove();
        progName.remove();
        // priceTitle.remove();


        errorMsg.forEach(item => {
            item.style.opacity = 0;
        })
    })
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {

            modal.style.display = 'none';
            document.body.style.overflow = '';
          //  dayName.remove();
            progName.remove();
          //  priceTitle.remove();



            errorMsg.forEach(item => {
                item.style.opacity = 0;
            })

        }
    })

}

export default modal;