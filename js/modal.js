
function modal(triggerSelector, modalSelector, closeSelector) {


    const triggers = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        closeBtn = document.querySelector(closeSelector),
        modalHeader = modal.querySelector('.popup-title'),
        errorMsg = document.querySelectorAll('span.message'),
        progName = document.createElement('h4'),
        priceMsg = document.createElement('h4'),
        days = document.createElement('h4');
        days.classList.add('form-commit');
        days.classList.add('_days');
    priceMsg.classList.add('form-commit');
    priceMsg.classList.add('_sum');
    progName.classList.add('form-commit');


    triggers.forEach(trigger => {


        trigger.addEventListener('click', (e) => {
            // console.log(triggerGrandPa.dataset.prog);
            let msg = e.target.parentElement.querySelector('span');
            if (e.target.previousElementSibling.innerHTML.trim().slice(0, -1) === '0') {
                // console.log(e.target.parentElement);

                msg.style.opacity = '1';
            } else if(e.target.previousElementSibling.innerHTML.trim().slice(0, -1) != '0' || !e.target.parentElement.classList.has('calc')) {
               try {
                   msg.style.opacity = '0'; 
               } catch (error) {
                   
               }
               
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                // console.log(e.target.parentElement);
                if (e.target.innerHTML.trim() === 'подробнее' || e.target.innerHTML.trim() === 'заказать обратный звонок') {
                    modalHeader.innerHTML = `Заказать обратный звонок `;
                    // selectItem.style.display = 'none';
                }
                if (e.target.parentElement.parentElement.dataset.prog) {
                   let curentDays =  e.target.parentElement.parentElement.querySelector('.__select-title').textContent;
                  console.log(days);
                  days.innerHTML = `Выбранный период: <span>${curentDays}</span>`;
                    let triggerGrandPa = e.target.parentElement.parentElement.dataset.prog;
                    let priceOrder = e.target.previousElementSibling.innerHTML.trim();
                   
                    progName.innerHTML = `Вы выбрали меню по программе <span>${triggerGrandPa}</span>. `

                    modalHeader.after(progName); //добавление названия тарифа
                    progName.after(days);
                    console.log(priceOrder.slice(0, -1))
                    if (priceOrder.slice(0, -1) === '0') {

                        priceMsg.innerHTML = 'Выберите день недели';

                    } else {
                        priceMsg.innerHTML = `Сумма заказа составляет <span>${priceOrder}</span> `;

                    }
                    progName.after(priceMsg);
                  
                }
            }

        })



    })
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        
        progName.remove();
        priceMsg.remove();
        days.remove();

        errorMsg.forEach(item => {
            item.style.opacity = 0;
        })
    })
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {

            modal.style.display = 'none';
            document.body.style.overflow = '';
           
            progName.remove();
            priceMsg.remove();
            days.remove();


            errorMsg.forEach(item => {
                item.style.opacity = 0;
            })

        }
    })

}

export default modal;