
function customSelect() {
    const selectBlock = document.querySelectorAll('.__select');





    selectBlock.forEach(selectItem => {

        const select_title = selectItem.querySelector('.__select-title'),
            select_labels = selectItem.querySelectorAll('.__select-label'),


            cards = selectItem.parentNode.parentNode.querySelectorAll('.card'),
            sum = selectItem.parentNode.querySelector('.price'),
            msg = selectItem.parentNode.querySelector('span');

        //console.log(cards)
        function showDayPrice(i) {
            let price = cards[i].querySelector('.card-price').innerHTML;
            let sumPrice = price.slice(0, -1);
            sum.innerHTML = `${sumPrice}&#8381;`;
        }


        select_title.addEventListener('click', () => {

            msg.style.opacity = '0';

            if (selectItem.getAttribute('data-state') === 'active') {
                selectItem.setAttribute('data-state', '');

            } else {
                selectItem.setAttribute('data-state', 'active');
            }

            function getSelectVal() {

                select_labels.forEach(item => {
                    item.addEventListener('click', (e) => {
                        select_title.textContent = e.target.textContent;
                        selectItem.setAttribute('data-state', '');
                        item.previousElementSibling.getAttribute('value', select_title.textContent);


                        if (item.textContent === 'Понедельник') {
                            showDayPrice(0);

                        }
                        if (item.textContent === 'Вторник') {
                            showDayPrice(1);

                        }
                        if (item.textContent === 'Среда') {
                            showDayPrice(2);

                        }
                        if (item.textContent === 'Понедельник-Пятница') {
                            let curentSum = [];
                            let price0 = cards[0].querySelector('.card-price').innerHTML.slice(0, -1);
                            let price1 = cards[1].querySelector('.card-price').innerHTML.slice(0, -1);
                            let price2 = cards[2].querySelector('.card-price').innerHTML.slice(0, -1);
                            let price3 = cards[3].querySelector('.card-price').innerHTML.slice(0, -1);
                            let price4 = cards[4].querySelector('.card-price').innerHTML.slice(0, -1);

                            curentSum.push(price0, price1, price2, price3, price4);
                           

                            let res = curentSum.reduce(function (sum, elem) {
                                return Number(sum) + Number(elem);
                            }, 0)
                            sum.innerHTML = `${res}&#8381;`;

                        }
                        if (item.textContent === 'Понедельник-Воскресенье') {

                            let curentSum = [];
                            let price0 = cards[0].querySelector('.card-price').innerHTML.slice(0, -1);
                            let price1 = cards[1].querySelector('.card-price').innerHTML.slice(0, -1);
                            let price2 = cards[2].querySelector('.card-price').innerHTML.slice(0, -1);
                            let price3 = cards[3].querySelector('.card-price').innerHTML.slice(0, -1);
                            let price4 = cards[4].querySelector('.card-price').innerHTML.slice(0, -1);
                            let price5 = cards[5].querySelector('.card-price').innerHTML.slice(0, -1);
                            let price6 = cards[6].querySelector('.card-price').innerHTML.slice(0, -1);

                            curentSum.push(price0, price1, price2, price3, price4, price5, price6);
                            

                            let res = curentSum.reduce(function (sum, elem) {
                                return Number(sum) + Number(elem);
                            }, 0)

                            sum.innerHTML = `${res}&#8381;`;
                        }


                        console.log(item.textContent);
                        return item.textContent;

                    })

                })
            }
            getSelectVal();
           // console.log(item.textContent);




        });
    });




    // Close when click to option



}
export default customSelect;