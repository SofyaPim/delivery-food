 function showCards() {

     const daysReduce = [{

             title: "понедельник",
             photo: "./images/food2.png",
             breakfast: "Завтрак:",
             breakfast_menu: "овсяная каша с ягодами",
             lunch: "Второй завтрак:",
             lunch_menu: "шарлотка с грушей ",
             dinner: "Обед: ",
             dinner_menu: "плов с курицей ",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: "салат из свежих овощей ",
             last_dinner: "Ужин:",
             last_dinner_menu: "куриные котлетки ",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1190"


         },
         {

             title: "вторник",
             photo: "./images/food2.png",
             breakfast: "Завтрак:",
             breakfast_menu: " молоко",
             lunch: "Второй завтрак:",
             lunch_menu: "шарлотка с  бананов",
             dinner: "Обед: ",
             dinner_menu: " салат из свежих овощей ",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: " жюльен с минимумом соуса",
             last_dinner: "Ужин:",
             last_dinner_menu: " салат из овощей (100–150 грамм)",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1200"

         },
         {

             title: "среда",
             photo: "./images/food2.png",
             breakfast: "Завтрак:",
             breakfast_menu: " каша с  молоко",
             lunch: "Второй завтрак:",
             lunch_menu: "шарлотка",
             dinner: "Обед: ",
             dinner_menu: "плов  из свежих овощей ",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: "салат  с минимумом соуса",
             last_dinner: "Ужин:",
             last_dinner_menu: "котлетки из овощей ",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1125"


         },
         {

             title: "четверг",
             photo: "./images/food2.png",
             breakfast: "Завтрак:",
             breakfast_menu: "70 грамм сухой крупы",
             lunch: "Второй завтрак:",
             lunch_menu: " 2–3 фрукта",
             dinner: "Обед: ",
             dinner_menu: " салат",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: " жюльен",
             last_dinner: "Ужин:",
             last_dinner_menu: " яичный блинчик ",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1110"


         },
         {

             title: "пятница",
             photo: "./images/food2.png",
             breakfast: "Завтрак:",
             breakfast_menu: " 50–100 грамм любых ягод",
             lunch: "Второй завтрак:",
             lunch_menu: "100 грамм",
             dinner: "Обед: ",
             dinner_menu: "овощей 150 грамм",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: " минимумом соуса",
             last_dinner: "Ужин:",
             last_dinner_menu: " 200 грамм рыбы",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1050"


         },
         {

             title: "суббота",
             photo: "./images/food2.png",
             breakfast: "Завтрак:",
             breakfast_menu: "100 грамм любых ягод или молоко",
             lunch: "Второй завтрак:",
             lunch_menu: "150 грамм бананов",
             dinner: "Обед: ",
             dinner_menu: "плов",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: "салат 200 грамм",
             last_dinner: "Ужин:",
             last_dinner_menu: " котлетки  рыбы",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1010"


         },
         {

             title: "воскресенье",
             photo: "./images/food2.png",
             breakfast: "Завтрак:",
             breakfast_menu: "100 грамм любых ягод или молоко",
             lunch: "Второй завтрак:",
             lunch_menu: "150 грамм бананов",
             dinner: "Обед: ",
             dinner_menu: "плов",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: "салат 200 грамм",
             last_dinner: "Ужин:",
             last_dinner_menu: " котлетки  рыбы",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1000"


         }

     ];
     const daysGaining = [{

             title: "понедельник",
             photo: "./images/food.png",
             breakfast: "Завтрак:",
             breakfast_menu: "овсяная каша с ягодами",
             lunch: "Второй завтрак:",
             lunch_menu: "шарлотка с грушей ",
             dinner: "Обед: ",
             dinner_menu: "плов с курицей ",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: "салат из свежих овощей ",
             last_dinner: "Ужин:",
             last_dinner_menu: "куриные котлетки ",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1100"


         },
         {

             title: "вторник",
             photo: "./images/food.png",
             breakfast: "Завтрак:",
             breakfast_menu: " молоко",
             lunch: "Второй завтрак:",
             lunch_menu: "шарлотка с  бананов",
             dinner: "Обед: ",
             dinner_menu: " салат из свежих овощей ",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: " жюльен с минимумом соуса",
             last_dinner: "Ужин:",
             last_dinner_menu: " салат из овощей (100–150 грамм)",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1150"


         },
         {

             title: "среда",
             photo: "./images/food.png",
             breakfast: "Завтрак:",
             breakfast_menu: " каша с  молоко",
             lunch: "Второй завтрак:",
             lunch_menu: "шарлотка",
             dinner: "Обед: ",
             dinner_menu: "плов  из свежих овощей ",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: "салат  с минимумом соуса",
             last_dinner: "Ужин:",
             last_dinner_menu: "котлетки из овощей ",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1170"


         },
         {

             title: "четверг",
             photo: "./images/food.png",
             breakfast: "Завтрак:",
             breakfast_menu: "70 грамм сухой крупы",
             lunch: "Второй завтрак:",
             lunch_menu: " 2–3 фрукта",
             dinner: "Обед: ",
             dinner_menu: " салат",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: " жюльен",
             last_dinner: "Ужин:",
             last_dinner_menu: " яичный блинчик ",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1200"

         },
         {

             title: "пятница",
             photo: "./images/food.png",
             breakfast: "Завтрак:",
             breakfast_menu: " 50–100 грамм любых ягод",
             lunch: "Второй завтрак:",
             lunch_menu: "100 грамм",
             dinner: "Обед: ",
             dinner_menu: "овощей 150 грамм",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: " минимумом соуса",
             last_dinner: "Ужин:",
             last_dinner_menu: " 200 грамм рыбы",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1300"


         },
         {

             title: "суббота",
             photo: "./images/food.png",
             breakfast: "Завтрак:",
             breakfast_menu: "100 грамм любых ягод или молоко",
             lunch: "Второй завтрак:",
             lunch_menu: "150 грамм бананов",
             dinner: "Обед: ",
             dinner_menu: "плов",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: "салат 200 грамм",
             last_dinner: "Ужин:",
             last_dinner_menu: " котлетки  рыбы",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1150"


         },
         {

             title: "воскресенье",
             photo: "./images/food.png",
             breakfast: "Завтрак:",
             breakfast_menu: "100 грамм любых ягод или молоко",
             lunch: "Второй завтрак:",
             lunch_menu: "150 грамм бананов",
             dinner: "Обед: ",
             dinner_menu: "плов",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: "салат 200 грамм",
             last_dinner: "Ужин:",
             last_dinner_menu: " котлетки  рыбы",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1120"


         }

     ];
     const daysBalance = [{

             title: "понедельник",
             photo: "./images/food3.png",
             breakfast: "Завтрак:",
             breakfast_menu: "овсяная каша с ягодами",
             lunch: "Второй завтрак:",
             lunch_menu: "шарлотка с грушей ",
             dinner: "Обед: ",
             dinner_menu: "плов с курицей ",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: "салат из свежих овощей ",
             last_dinner: "Ужин:",
             last_dinner_menu: "куриные котлетки ",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "990"


         },
         {

             title: "вторник",
             photo: "./images/food3.png",
             breakfast: "Завтрак:",
             breakfast_menu: " молоко",
             lunch: "Второй завтрак:",
             lunch_menu: "шарлотка с  бананов",
             dinner: "Обед: ",
             dinner_menu: " салат из свежих овощей ",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: " жюльен с минимумом соуса",
             last_dinner: "Ужин:",
             last_dinner_menu: " салат из овощей (100–150 грамм)",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1200"


         },
         {

             title: "среда",
             photo: "./images/food3.png",
             breakfast: "Завтрак:",
             breakfast_menu: " каша с  молоко",
             lunch: "Второй завтрак:",
             lunch_menu: "шарлотка",
             dinner: "Обед: ",
             dinner_menu: "плов  из свежих овощей ",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: "салат  с минимумом соуса",
             last_dinner: "Ужин:",
             last_dinner_menu: "котлетки из овощей ",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1100"


         },
         {

             title: "четверг",
             photo: "./images/food3.png",
             breakfast: "Завтрак:",
             breakfast_menu: "70 грамм сухой крупы",
             lunch: "Второй завтрак:",
             lunch_menu: " 2–3 фрукта",
             dinner: "Обед: ",
             dinner_menu: " салат",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: " жюльен",
             last_dinner: "Ужин:",
             last_dinner_menu: " яичный блинчик ",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "970"


         },
         {

             title: "пятница",
             photo: "./images/food3.png",
             breakfast: "Завтрак:",
             breakfast_menu: " 50–100 грамм любых ягод",
             lunch: "Второй завтрак:",
             lunch_menu: "100 грамм",
             dinner: "Обед: ",
             dinner_menu: "овощей 150 грамм",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: " минимумом соуса",
             last_dinner: "Ужин:",
             last_dinner_menu: " 200 грамм рыбы",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "1000"


         },
         {

             title: "суббота",
             photo: "./images/food3.png",
             breakfast: "Завтрак:",
             breakfast_menu: "100 грамм любых ягод или молоко",
             lunch: "Второй завтрак:",
             lunch_menu: "150 грамм бананов",
             dinner: "Обед: ",
             dinner_menu: "плов",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: "салат 200 грамм",
             last_dinner: "Ужин:",
             last_dinner_menu: " котлетки  рыбы",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "960"


         },
         {

             title: "воскресенье",
             photo: "./images/food3.png",
             breakfast: "Завтрак:",
             breakfast_menu: "100 грамм любых ягод или молоко",
             lunch: "Второй завтрак:",
             lunch_menu: "150 грамм бананов",
             dinner: "Обед: ",
             dinner_menu: "плов",
             afternoon_tea: "Полдник:",
             afternoon_tea_menu: "салат 200 грамм",
             last_dinner: "Ужин:",
             last_dinner_menu: " котлетки  рыбы",
             kcal: "920",
             proteins: "92",
             fats: "32",
             carbohydrates: "90",
             price: "900"


         }

     ];
     const reviews = [{
             href: "#",
             cardImg: "./images/inst-photo.png",
             star: "./images/star.png",
             starEmpty: "./images/star-empty.png",
             instIcon: "./images/inst-icon.png",
             instAccount: "@marygain",
             instDate: "november,5",
             instText: "Кирилл профессиональный тренер и нутрициолог и никто другой как он поможет разобраться с питанием и тренировками!!! Если вы не знаете с чего начать, как похудеть, привести себя...",
             heart: "./images/heart.png",
             heartNum: "7",
             commitIcon: "./images/commit-icon.png",
             commitNum: "12"


         },
         {
             href: "#",
             cardImg: "./images/inst-photo2.png",
             star: "./images/star.png",
             starEmpty: "./images/star-empty.png",
             instIcon: "./images/inst-icon.png",
             instAccount: "@marygain",
             instDate: "november,5",
             instText: "Кирилл профессиональный тренер и нутрициолог и никто другой как он поможет разобраться с питанием и тренировками!!! Если вы не знаете с чего начать, как похудеть, привести себя...",
             heart: "./images/heart.png",
             heartNum: "7",
             commitIcon: "./images/commit-icon.png",
             commitNum: "12"


         },
         {
             href: "#",
             cardImg: "./images/inst-photo3.png",
             star: "./images/star.png",
             starEmpty: "./images/star-empty.png",
             instIcon: "./images/inst-icon.png",
             instAccount: "@marygain",
             instDate: "november,5",
             instText: "Кирилл профессиональный тренер и нутрициолог и никто другой как он поможет разобраться с питанием и тренировками!!! Если вы не знаете с чего начать, как похудеть, привести себя...",

             heartNum: "7",

             commitNum: "12"


         }

     ];

     function cardTemplate(card) {
         return `
<li class="card">
<div class="card-body">
   <h3 class="card-title"> ${card.title}</h3>
    <img src="${card.photo}" alt="food" >
   <ul class="card-content">
    
       <li><p class="small-text">${card.breakfast_menu}</p></li>
    
    <li><p class="small-text">${card.lunch_menu}</p></li>

    <li><p class="small-text">${card.dinner_menu}</p></li>
    
    <li><p class="small-text">${card.afternoon_tea_menu}</p></li>
   
    <li><p class="small-text">${card.last_dinner_menu}</p></li>
   </ul>

</div>
<div class="kcal">
<div class="kcal-item">${card.kcal}К</div>
<div class="kcal-item">${card.proteins}Б</div>
<div class="kcal-item">${card.fats}Ж</div>
<div class="kcal-item">${card.carbohydrates}У</div>





</div>
<h4 class="card-price">${card.price}&#8381;</h4>


</li>          
     `
     };

     function reviewsCardTemplate(card) {
         return ` <li>
            <a href="${card.href}" class="card">
            <div class="card-body">
                <img src="${card.cardImg}" alt="guys in gym"  class="card-img">
                <div class="stars">
                    <img src="${card.star}" alt="star"  class="star">
                    <img src="${card.star}" alt="star"  class="star">
                    <img src="${card.star}" alt="star"  class="star">
                    <img src="${card.star}" alt="star"  class="star">
                    <img src="${card.starEmpty}" alt="star-empty"  class="star _empty">
                </div>
                <img src="${card.instIcon}" alt="instagram-icon"  class="instagram-icon">
                <h3>${card.instAccount}</h3>
                <p class="regular-text">${card.instDate}</p>
                <p class="small-text">Кирилл профессиональный тренер и нутрициолог и никто другой как он поможет разобраться с питанием и тренировками!!! Если вы не знаете с чего начать, как похудеть, привести себя 
                   <span>more</span> </p>
                   <div class="commit">
                       <img src="./images/heart.png" alt="heart-icon"  class="heart">
                       <p class="regular-text">${card.heartNum}</p>
                       <img src="./images/commit-icon.png" alt="commit-icon" class="commit-icon">
                       <p class="regular-text">${card.commitNum}</p>
                   </div>
            </div>

        </a> 
        </li>`
     }

     document.querySelector(".menu-cards.reduce").innerHTML = ` 
${daysReduce.map(cardTemplate).join('')}`;
     document.querySelector(".menu-cards.gaining").innerHTML = ` 
${daysGaining.map(cardTemplate).join('')}`;
     document.querySelector(".menu-cards.balance").innerHTML = ` 
${daysBalance.map(cardTemplate).join('')}`;
     document.querySelector(".reviews-cards").innerHTML = ` 
${reviews.map(reviewsCardTemplate).join('')}`;
 }

 export default showCards;