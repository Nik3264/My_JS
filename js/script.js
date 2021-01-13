'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
    //Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
    
    function hideTabContent(){
        tabsContent.forEach(item=>{
            //item.style.display='none';
            item.classList.remove('show', 'fade');
            item.classList.add('hide');
        });

        tabs.forEach(item=>{
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i=0){
        //tabsContent[i].style.display='block';
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click',(event)=>{
        const target=event.target;
        //далее проверяем, что кликнули именно на елемент, а не на пустоту родительского окна
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,i)=>{
                
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }        
    });

    //Timer

    const deadline='2021-01-08';

    function getTimeRemaining(endtime){
        const t=Date.parse(endtime)-Date.parse(new Date()),
              days=Math.floor(t/(1000*60*60*24)),
              hours=Math.floor((t/(1000*60*60))%24),
              minutes=Math.floor((t/(1000*60))%60),
              seconds=Math.floor((t/1000)%60);
        return {
            'total':t,
            'days':days,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds
        };
    }

    function getZero(num){
        if(num>=0 && num < 10){
            return `0${num}`;
        }else{
            return num;
        }
    }

    function setClock(selector, endtime){
        const timer=document.querySelector(selector),
              days=timer.querySelector('#days'),
              hours=timer.querySelector('#hours'),
              minutes=timer.querySelector('#minutes'),
              seconds=timer.querySelector('#seconds'),
              timeInterval=setInterval(updateClock, 1000);
        
        updateClock();

        function updateClock(){
            const t=getTimeRemaining(endtime);

            days.innerHTML=getZero(t.days);
            hours.innerHTML=getZero(t.hours);
            minutes.innerHTML=getZero(t.minutes);
            seconds.innerHTML=getZero(t.seconds);

            if(t.total<=0){
                clearInterval(timeInterval);
            }
        }

    }

    setClock('.timer', deadline);

    //Модальное окно

    const modalTrigger = document.querySelectorAll('[data-modal]'),
    // это кнопки, куда нажимаем; в кавычках и квадратных скобках, потому что data-атрибут
          modal = document.querySelector('.modal');
    //это само модальное окно, к-рое будет появляться
          //modalCloseBtn=document.querySelector('[data-close]');
    //єто кнопка закрытия окна, крестик, она одна, как и окно
    
    
    function openModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
        //modal.classList.toggle('show');
        document.body.style.overflow='hidden';
        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(item=>{
    
        item.addEventListener('click', openModal
        //    modal.classList.add('show');
        //    modal.classList.remove('hide');
            //modal.classList.toggle('show');
            //document.body.style.overflow='hidden';// убираем прокрутку страницы на заднем фоне

        );
    });



    function closeModal(){
        //modal.classList.toggle('show');
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow='';
    }

   // modalCloseBtn.addEventListener('click',
    //    modal.classList.add('hide');
    //    modal.classList.remove('show');
       // modal.classList.toggle('show');
        //document.body.style.overflow='';//пусто восстановит зн-е по умолч.
    //    closeModal
    //);

    modal.addEventListener('click', (event)=>{
        if(event.target===modal || event.target.getAttribute('data-close')==''){
            closeModal();
        }
    });

   document.addEventListener('keydown',(event)=>{
       console.log(event.code);
        if(event.code==="Escape" && modal.classList.contains('show')){
            closeModal();
        }
   }); 

   const modalTimerId=setTimeout(openModal, 50000);

   function showModalByScroll(){
        if (window.pageYOffset+document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
   }
   window.addEventListener('scroll', showModalByScroll);

   //Используем классы для карточек

   class MenuCard{
       constructor(src, alt,title,descr,price,parentSelector, ...clases){
            this.src=src;
            this.alt=alt;
            this.title=title;
            this.descr=descr;
            this.price=price;
            this.parent=document.querySelector(parentSelector);
            this.transfer=27;
            this.changeToUAH();
            this.clases=clases;
       }

       changeToUAH(){
            this.price=this.price*this.transfer;
       }

       render(){
            const element=document.createElement('div');
            
            if(this.clases.length===0){
                this.clases.push('menu__item');
            }

            this.clases.forEach(item=>element.classList.add(item));
            element.innerHTML=`
                
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                
            `;
            this.parent.append(element);
            console.log(this.parent);
       }
   }

   /*const div=new MenuCard();
   div.render();*/
   new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    "Меню 'Фитнес'",
    "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
    9,
    ".menu .container"
   ).render();

   new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    "Меню 'Премиум'",
    "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    14,
    ".menu .container",
    "menu__item"
   ).render();

   new MenuCard(
    "img/tabs/post.jpg",
    "post",
    "Меню 'Постноеее'",
    "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    26,
    ".menu .container",
    "menu__item"
   ).render();

   //Forms

   const forms=document.querySelectorAll('form');
    //событие submit возникает когда мы отправляем форму нажатием ентер или на кнопку. если  кнопка задана тегом button, то у нее автоматически есть событи отправить при нажатии
    const message={
        loading:'img/form/spinner.svg',
        success:'Спасибо, скоро мы',
        failure:'Что-то не такююю'
    };
   
    forms.forEach(item=>{
        postData(item);
    });

    function postData(form){
       form.addEventListener('submit', (e)=>{
            e.preventDefault();//отменили стандартное поведение (когда перезагружается вся страница)
            const statusMessage=document.createElement('img');
            //statusMessage.classList.add('status');
            statusMessage.src=message.loading;
            statusMessage.style.cssText=`
                display: block;
                margin: 0 auto;
            `;
            //statusMessage.textContent=message.loading;
            //form.append(statusMessage);//раньше добавляли в форму после всех эл-тов, в конец. Но внизу в форме это некрасиво. Добавляем ПОСЛЕ формы:
            form.insertAdjacentElement('afterend', statusMessage);//afterend - это ПОСЛЕ формы
            //const request=new XMLHttpRequest();
            //request.open('POST', 'server.php');
            //request.setRequestHeader('Content-type','multipart/form-data');
           // request.setRequestHeader('Content-type','application/json');
            const formData=new FormData(form);
            const object={};
            formData.forEach(function(value,key){
                object[key]=value;
            });

            //const json=JSON.stringify(object);

            //request.send(formData);
            //request.send(json);
            fetch('server.php',{
                method:"POST",
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(object)
            }).then(data=>data.text())
            .then(data=>{
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(()=>{
                showThanksModal(message.failure);
            }).finally(()=>{
                form.reset();
            });

            /*request.addEventListener('load',()=>{
                   if(request.status===200) {
                       console.log(request.response);
                       showThanksModal(message.success);
                       form.reset();
                       statusMessage.remove();
                   }else{
                        showThanksModal(message.failure);
                        form.reset();
                        statusMessage.remove();
                   }
            });*/

       });
   }

   function showThanksModal(message){
       const prevModalDialog=document.querySelector('.modal__dialog');

       //prevModalDialog.classList.remove('show');
       prevModalDialog.classList.add('hide');
       openModal();

       const thanksModal=document.createElement('div');
       thanksModal.classList.add('modal__dialog');
       thanksModal.innerHTML=`
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

       document.querySelector('.modal').append(thanksModal);
       setTimeout(()=>{
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
       }, 2000);
   }


});