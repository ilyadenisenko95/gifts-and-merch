const setModalSliders = {
  top: null,
  bottom: null,
};

const unmountSetModalSliders = () => {
  if (setModalSliders.top) {
    setModalSliders.top.destroy();
  }
  if (setModalSliders.bottom) {
    setModalSliders.bottom.destroy();
  }
};

const allModals = document.querySelectorAll('.modal');
const addCloseModalListeners = () => {

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      allModals.forEach(el => {
        el.classList.remove('open');
      });
      unmountSetModalSliders();
    }
  });

  const DETAIL_CARD_MODAL_ID = 'modal-order-menu';
  allModals.forEach(modal => {
    modal.addEventListener('click', (evt) => {
      // console.log('evt:', evt);
      // console.log('evt:', evt.target);
      if (evt.target.classList.contains('modal')) {
        modal.classList.remove('open');
        if (modal.id === DETAIL_CARD_MODAL_ID) {
          unmountSetModalSliders();
        }
      }
    });
  });

  const modalCloseBtns = document.querySelectorAll('.modal__but-close, #close-burger-menu-btn');
  modalCloseBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      const modalRoot = closeBtn.closest('.modal');
      modalRoot.classList.remove('open');
      if (modalRoot.id === DETAIL_CARD_MODAL_ID) {
        unmountSetModalSliders();
      }
    });
  });

  const myMobalBurgerOpen = document.querySelector('#open-burger-btn');
  const myModalBurgerMenu = document.querySelector('#modal-burger-menu');
  myMobalBurgerOpen.addEventListener('click', function () {
    myModalBurgerMenu.classList.add('open');
  });

  // Модальное окно БМ
};
addCloseModalListeners();



const setItems = [
  {
    id: '0',
    name: 'Belgian chocolate package',
    shortDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, tempora.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro aliquid necessitatibus, quibusdam quam error similique deserunt accusamus eligendi perferendis doloribus harum recusandae qui sunt.',
    images: ['../img/sets/set-01-01.jpg', '../img/sets/set-01-02.jpg', '../img/sets/set-01-03.jpg', '../img/sets/set-01-04.jpg'],
    colors: ['#000000', '#4c3a2e', '#a5826b'],
    price: 17.99,
    attributes: [
      {
        label: 'Вес',
        value: '280 грамм',
      },
      {
        label: 'Состав',
        value: 'Бельгийский с фундуком и кешью, ежедневный чёрный, кокосовая стружка',
      },
      {
        label: 'Дополнительно',
        value: 'Открытка-календарь',
      },
    ],
  },
  {
    id: '1',
    name: 'Cocoa and zephyr',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    images: ['../img/sets/set-02-01.jpg', '../img/sets/set-02-02.jpg', '../img/sets/set-02-03.jpg'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil exercitationem accusamus impedit ad, nostrum tenetur nemo saepe nisi quasi?',
    colors: ['#4c3a2e', '#cccccc'],
    price: 12.99,
    attributes: [
      {
        label: 'Вес',
        value: '180 грамм',
      },
      {
        label: 'Состав',
        value: 'Какао, зефир маршмэллоу, 3 кубика чёрного',
      },
      {
        label: 'Дополнительно',
        value: 'Открытка-поздравление',
      },
    ],
  },
  {
    id: '2',
    name: 'Multiple flavor samples',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolore dolores deleniti!',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic non repellendus nihil recusandae obcaecati temporibus quam fugiat dolor, repellat aspernatur fugit saepe dignissimos corporis neque quod eius accusamus minima in.',
    images: ['../img/sets/set-04-01.jpg'],
    colors: ['#b86843', '#ac9336', '#235c91', '#587837'],
    price: 14.99,
    attributes: [
      {
        label: 'Вес',
        value: '200 грамм',
      },
      {
        label: 'Состав',
        value: '12 сортов шоколада',
      },
      {
        label: 'Дополнительно',
        value: 'Набор стикеров',
      },
    ],
  },
  {
    id: '3',
    name: 'Plan B package',
    shortDescription: 'Lorem ipsum dolor amet adipisicing.',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, eum.',
    images: ['../img/sets/set-03-01.jpg', '../img/sets/set-03-02.jpg'],
    colors: ['#000000'],
    price: 9.99,
    attributes: [
      {
        label: 'Вес',
        value: '170 грамм',
      },
      {
        label: 'Состав',
        value: 'Печенье с шоколадной стружкой',
      },
      {
        label: 'Дополнительно',
        value: 'Кружка',
      },
    ],
  },
];

let cartItems = [

];






const setCartItemsLS = (newCartItems) => {
  window.localStorage.setItem('cartItems', JSON.stringify(newCartItems));
};

const getCartItemsLS = () => {
  const cartItemsString = window.localStorage.getItem('cartItems');
  return JSON.parse(cartItemsString) || [];
};




const getTotalCartSum = () => {
  const cartItems = getCartItemsLS();
  let sum = 0;
  cartItems.forEach(item => {
    sum += item.price * item.count;
  });
  return Math.ceil(sum * 100) / 100;
};

//всплывающая корзинка
const sideCartEl = document.querySelector('.side-cart');
const sideCartSum = sideCartEl.querySelector('.side-cart__sum');
const sideCartCount = sideCartEl.querySelector('.side-cart__count');
const recalcSideCart = () => {
  const cartItems = getCartItemsLS();
  cartItems.length
    ? sideCartEl.classList.add('active')
    : sideCartEl.classList.remove('active');
  sideCartCount.textContent = cartItems.length;
  sideCartSum.textContent = `$${getTotalCartSum()}`;
};
recalcSideCart();


const addToCart = (card) => {
  const cartItems = getCartItemsLS();
  const item = setItems.find(el => el.id === card.dataset.id);
  const itemCopy = JSON.parse(JSON.stringify(item)); // Создаём копию, что не изменять исходный объект
  itemCopy.color = itemCopy.colors[card.dataset.colorIdx];
  // Пытаемся найти этот элемент в корзине
  const itemIndex = cartItems.findIndex(el => el.id === itemCopy.id && el.color === itemCopy.color);
  if (itemIndex >= 0) {
    cartItems[itemIndex].count = cartItems[itemIndex].count + 1;
  } else {
    // Элемент не найден, добавляем в корзину.
    cartItems.push({ ...itemCopy, count: 1 });
  }
  setCartItemsLS(cartItems);
  recalcSideCart();
};


const fillItemList = () => {
  const itemListEl = document.querySelector('#card-list');
  const itemTemplate = document.querySelector('#item-template');
  const colorTemplate = document.querySelector('#color-template');

  if (!itemTemplate || !itemListEl) {
    return;
  }
  setItems.forEach((item) => {
    const itemEl = itemTemplate.content.cloneNode(true).querySelector('*');
    itemEl.dataset.id = item.id;
    itemEl.querySelector('.card__info-name').textContent = item.name;
    itemEl.querySelector('.card__info-description').textContent = item.shortDescription;
    itemEl.querySelector('.card__price span').textContent = item.price;
    itemEl.querySelector('.card__image').src = item.images[0];
    const colorListEl = itemEl.querySelector('#color-list');
    item.colors.forEach((color, index) => {
      const colorEl = colorTemplate.content.cloneNode(true);
      const buttonEl = colorEl.querySelector('#button-color');
      buttonEl.dataset.colorIdx = index;
      if (index === 0) {
        buttonEl.classList.add('card__color-button--active');
        itemEl.dataset.colorIdx = index;
      }
      buttonEl.style = `background-color: ${color}`;
      colorListEl.appendChild(colorEl);
    });


    //Переключение цвета в карточках
    const colorBtns = itemListEl.querySelectorAll('.card__color-button');
    colorBtns.forEach((el) => {
      el.addEventListener('click', (evt) => {
        evt.stopPropagation();
        const btnEl = evt.currentTarget;
        const colorList = btnEl.closest('.card__color');
        const allColors = colorList.querySelectorAll('.card__color-button');
        allColors.forEach((el) => el.classList.remove('card__color-button--active'));
        btnEl.classList.add('card__color-button--active');
        const setEl = colorList.closest('.card');
        setEl.dataset.colorIdx = btnEl.dataset.colorIdx;
      });
    });

    const cartBtn = itemEl.querySelector('.card__cart');
    cartBtn.addEventListener('click', (evt) => {
      evt.stopPropagation(); // чтобы не открывалось модальное окно
      addToCart(itemEl);
    });

    itemListEl.appendChild(itemEl);
  });
};
fillItemList();

// Карточки






const setCards = document.querySelectorAll('.card');
const myModalOrderMenu = document.querySelector('#modal-order-menu');
const myModalOrCloseBtn = myModalOrderMenu.querySelector('.modal__but-close');
const addSetModalListeners = () => {
  const colorsTemplate = document.querySelector('#color-modtemplate');
  const propertyWrapper = myModalOrderMenu.querySelector('.property');
  const colorListElem = myModalOrderMenu.querySelector('#color-listmod');
  const topImages = myModalOrderMenu.querySelector('.window__swiper-top .window__swipe-img');
  const bottomImages = myModalOrderMenu.querySelector('.window__swiper-bottom .window__swipe-img');

  const initSliders = (item) => {
    topImages.innerHTML = '';
    item.images.forEach((imageSrc) => {
      const imgEl = document.createElement('img');
      imgEl.src = imageSrc;
      imgEl.classList.add('winwod-img', 'swiper-slide');
      topImages.appendChild(imgEl);
    });
    bottomImages.innerHTML = '';
    item.images.forEach((imageSrc) => {
      const imgEl = document.createElement('img');
      imgEl.src = imageSrc;
      imgEl.classList.add('winwod-thing', 'swiper-slide');
      bottomImages.appendChild(imgEl);
    });

    //подключение слайде
    setModalSliders.bottom = new Swiper(
      '.window__swiper-bottom',
      {
        speed: 400,
        spaceBetween: 10,
        slidesPerView: 'auto',
      }
    );
    setModalSliders.top = new Swiper('.window__swiper-top', {
      speed: 400,
      spaceBetween: 10,
      slidesPerView: 1,
      navigation: {
        nextEl: '#order-next-btn',
        prevEl: '#order-prev-btn',
      },
      thumbs: {
        swiper: setModalSliders.bottom,
      },
    });
  };

  const cartModal = document.querySelector('#modal-cart-menu');
  const addToCartAndOpen = document.querySelector('#add-to-cart-and-open');
  const basketItemTemplate = document.querySelector('#basket-item-template');
  const basketItemList = cartModal.querySelector('.trolley__cart-list');
  //добавление данных в корзину
  const renderCartElements = () => {
    basketItemList.innerHTML = '';
    const cartItems = getCartItemsLS();
    cartItems.forEach(item => {
      const itemEl = basketItemTemplate.content.cloneNode(true).querySelector('*');
      //изменение кол-ва товаров и их суммы
      const recalcItemPrice = () => {
        itemEl.querySelector('.choice__number').textContent = item.count;
        const myCeil = Math.ceil((item.price * item.count) * 100) / 100;
        itemEl.querySelector('.article__sum').textContent = '$' + myCeil;
        recalcTotalSum();
      };

      itemEl.querySelector('#basket-count-dec').addEventListener('click', () => {
        item.count--;
        setCartItemsLS(cartItems);
        recalcItemPrice();
        recalcTotalSum();
        if (item.count === 0) {
          deleteItem();
        }
        recalcSideCart();

      });
      itemEl.querySelector('#basket-count-inc').addEventListener('click', () => {
        item.count++;
        setCartItemsLS(cartItems);
        recalcItemPrice();
        recalcSideCart();
      });


      const basketSumEl = cartModal.querySelector('#basket-total-sum');
      const recalcTotalSum = () => {
        basketSumEl.textContent = `Всего: $${getTotalCartSum()}`;
      };
      itemEl.querySelector('.colors-info__icon').style.backgroundColor = item.color;
      itemEl.querySelector('.article__info-name').textContent = item.name;
      itemEl.querySelector('.article__details-img').src = item.images[0];

      const deleteItem = () => {
        let cartItems = getCartItemsLS();
        cartItems = cartItems.filter(el => el.id !== item.id || el.color !== item.color);
        setCartItemsLS(cartItems);
        renderCartElements();
        recalcSideCart();
        recalcTotalSum();
      };
      const deleteBtn = itemEl.querySelector('.article__remove');
      deleteBtn.addEventListener('click', deleteItem);

      basketItemList.appendChild(itemEl);
      recalcItemPrice();
    });

  };

  const openCartModal = () => {
    renderCartElements();
    cartModal.classList.add('open');
  };

  const sideCartBtn = sideCartEl.querySelector('.side-cart__btn');
  sideCartBtn.addEventListener('click', openCartModal);



  setCards.forEach(card => {
    const addAndOpenCart = () => {
      addToCart(card);
      openCartModal();
    };
    const addCloseLiseners = () => {
      window.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
          addToCartAndOpen.removeEventListener('click', addAndOpenCart);
        }
      });
      myModalOrderMenu.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('modal')) {
          addToCartAndOpen.removeEventListener('click', addAndOpenCart);
        }
      });
      myModalOrCloseBtn.addEventListener('click', () => {
        addToCartAndOpen.removeEventListener('click', addAndOpenCart);
      });
    };
    addCloseLiseners();



    const myBotCard = card.querySelector('.card__info');
    myBotCard.addEventListener('click', () => {
      myModalOrderMenu.classList.add('open');
      const cardId = card.dataset.id;
      const item = setItems.find(el => el.id === cardId);
      myModalOrderMenu.querySelector('.win__text').textContent = item.name;
      myModalOrderMenu.querySelector('.win__txt').textContent = item.shortDescription;
      myModalOrderMenu.querySelector('.win__price').textContent = 'Цена $' + item.price;


      propertyWrapper.innerHTML = '';
      item.attributes.forEach(attr => {
        const parLabel = document.createElement('p');
        parLabel.classList.add('property__text');
        parLabel.textContent = attr.label;
        const parValue = document.createElement('p');
        parValue.classList.add('property__text');
        parValue.textContent = attr.value;
        propertyWrapper.append(parLabel, parValue);
      });

      initSliders(item);

      colorListElem.innerHTML = '';
      item.colors.forEach((color, index) => {
        const colorEl = colorsTemplate.content.cloneNode(true).querySelector('*');
        const buttonEl = colorEl.firstChild;
        buttonEl.style = `background-color: ${color}`;
        if (index == card.dataset.colorIdx) {
          buttonEl.classList.add('color__but--active');
        }

        buttonEl.addEventListener('click', () => {
          const colorList = document.querySelector('.modal__window');
          const allColors = colorList.querySelectorAll('.color__but');
          allColors.forEach((el) => el.classList.remove('color__but--active'));
          buttonEl.classList.add('color__but--active');
        });

        colorListElem.appendChild(colorEl);
      });

      addToCartAndOpen.addEventListener('click', addAndOpenCart);
    });
  });
};
addSetModalListeners();

// Модальное окно набора




const addSetSliders = () => {
  setCards.forEach(setCard => {
    const cardTop = setCard.querySelector('.card__top');
    const item = setItems.find(el => el.id === setCard.dataset.id);

    if (item.images.length < 2) {
      const pagination = setCard.querySelector('.card__slider-nav');
      pagination.hidden = true;
      return;
    }

    const imageList = setCard.querySelector('.card__image-list');
    item.images.forEach((image, idx) => {
      // Первое изображение уже создано
      if (idx === 0) {
        return;
      }
      // Можно так же использовать <template>
      const imgEl = document.createElement('img');
      imgEl.src = image;
      imgEl.classList.add('card__image');
      const liEl = document.createElement('li');
      liEl.classList.add('swiper-slide');
      liEl.append(imgEl);
      imageList.append(liEl);
    });

    // Вместо селектора первым аргументом можно передавать HTML элемент
    new Swiper(cardTop, {
      speed: 400,
      spaceBetween: 20,
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.slider-nav__direction--next',
        prevEl: '.slider-nav__direction--prev',
      },
      pagination: {
        el: '.slider-nav__position',
        type: 'fraction',
      },
    });
  });
};
addSetSliders();

//cards swipers





const accordionDesTx = document.querySelectorAll('.description__txt');
accordionDesTx.forEach((topEl) => {
  topEl.addEventListener('click', () => {
    // const liEl = topEl.closest('.description__string');
    // liEl.classList.toggle('description__string--active');
    topEl.parentElement.classList.toggle('description__string--active');
  });
});


//аккордеон на странице информация

const accordionDesTxs = document.querySelectorAll('.size__right');
accordionDesTxs.forEach((topEl) => {
  topEl.addEventListener('click', () => {
    // const contentEls = event.currentTarget.nextElementSibling;
    // contentEls.classList.toggle('open');
    topEl.parentElement.classList.toggle('size__image--active');
  });
});

//аккордеон в модальном окне




new Swiper('.swiper.partners__logo', {
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '#partners-next-btn',
    prevEl: '#partners-prev-btn',
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 120,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 120,
    },
    1501: {
      slidesPerView: 5,
      spaceBetween: 120,
    },
  },
});

//swiper на главной ;






const addCallValidation = () => {
  const forms = document.querySelectorAll('.order');
  const orderSuccessModal = document.querySelector('#order-success');
  forms.forEach(formEl => {
    const loginEl = formEl.querySelector('input[name="login"]');
    const emailEl = formEl.querySelector('input[type="email"]');
    const emailWrapperEl = emailEl.closest('.order__field');
    const phoneEl = formEl.querySelector('input[type="tel"]');
    const phoneWrapperEl = phoneEl.closest('.order__field');
    const orderBtn = formEl.querySelector('.order__button');
    orderBtn.addEventListener('click', () => {
      const isEmailValid = emailEl.validity.valid;
      const isPhoneValid = phoneEl.validity.valid;
      if (emailEl.validity.valid) {
        emailWrapperEl.classList.remove('error');
      } else {
        emailWrapperEl.classList.add('error');
      }
      if (phoneEl.validity.valid) {
        phoneWrapperEl.classList.remove('error');
      } else {
        phoneWrapperEl.classList.add('error');
      }
      if (isEmailValid && isPhoneValid) {
        loginEl.value = '';
        emailEl.value = '';
        phoneEl.value = '';
        allModals.forEach(el => {
          el.classList.remove('open');
        });
        unmountSetModalSliders();
        orderSuccessModal.classList.add('open');
      }
    });
  });
};
addCallValidation();

// // Модалка валидации

