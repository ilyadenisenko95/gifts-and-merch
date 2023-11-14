
const myModalMob = document.getElementById("modal-mobile-menu")
document.getElementById("mobile-menu-btn").addEventListener("click", function () {
  myModalMob.classList.add("open")
})

document.getElementById("close-mobile-menu-btn").addEventListener("click", function () {
  myModalMob.classList.remove("open")
})

// Модальное окно БМ


const myModal = document.getElementById("order-menu-btn")
const myModalOr = document.getElementById("modal-order-menu")
if (myModal) {
  document.querySelectorAll(".card__cart").forEach((cartBtn) => {
    cartBtn.addEventListener("click", function () {
      myModalOr.classList.add("open")
    })
  })
}

const orderModal = document.getElementById("close-order-menu-btn")
if (orderModal) {
  orderModal.addEventListener("click", function () {
    myModalOr.classList.remove("open");
  });
}

const myModalBasket = document.getElementById("modal-basket-btn")
const myModalBasOp = document.getElementById("modal-basket-menu")
if (myModalBasket) {
  myModalBasket.addEventListener("click", function () {
    myModalBasOp.classList.add("open");
    closeModalBasket();
  })
}

function closeModalBasket() {
  myModalOr.classList.remove("open");
}

// Модальное окно в карточак


const myTrolley = document.getElementById("trolley-modal-btn")
const myModalBo = document.getElementById("modal-book-menu")
if (myTrolley) {
  myTrolley.addEventListener("click", function () {
    myModalBo.classList.add("open");
  });
}

const myTrolleyOne = document.getElementById("close-trolley-modal-btn")
if (myTrolleyOne) {
  myTrolleyOne.addEventListener("click", function () {
    myModalBo.classList.remove("open");
  });
}

const myTrolleyCl = document.getElementById("close-trolley-modal-btn-two")
if (myTrolleyCl) {
  myTrolleyCl.addEventListener("click", function () {
    myModalBo.classList.remove("open");
  });
}

// // Модальное окно(корзина), которое вызывается на странице "Все товары"


if (myModalBasket) {
  myModalBasket.addEventListener("click", function () {
    myModalBasOp.classList.add("open")
    closeModal();
  })
}

function closeModal() {
  myModalBo.classList.remove("open");
}

const myBasketCl = document.getElementById("close-basket-modal-btn")
if (myBasketCl) {
  myBasketCl.addEventListener("click", function () {
    myModalBasOp.classList.remove("open")
  })
}

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    myModalBasOp.classList.remove("open")
    myModalMob.classList.remove("open")
    myModalOr.classList.remove("open")
    myModalBo.classList.remove("open")
  }
})

// Модальное окно "В корзину"



const accordionDesTx = document.querySelectorAll('.description__txt');
accordionDesTx.forEach((topEl) => {
  topEl.addEventListener('click', (event) => {
    const contentEl = event.currentTarget.nextElementSibling;
    contentEl.classList.toggle('open');
  });
});

//аккордеон



































const setItems = [
  {
    id: '0',
    name: 'Belgian chocolate package',
    shortDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, tempora.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro aliquid necessitatibus, quibusdam quam error similique deserunt accusamus eligendi perferendis doloribus harum recusandae qui sunt.',
    images: ['../img/sets/set-01-01.jpg', '../img/sets/set-01-02.jpg', '../img/sets/set-01-03.jpg', '../img/sets/set-01-04.jpg', '../img/sets/set-01-05.jpg', '../img/sets/set-01-06.jpg'],
    colors: ['#4c3a2e'],
    price: 17.99,
    attributes: [
      {
        label: 'Вес',
        value: '280 грамм'
      },
      {
        label: 'Состав',
        value: 'Бельгийский с фундуком и кешью, ежедневный чёрный, кокосовая стружка'
      },
      {
        label: 'Дополнительно',
        value: 'Открытка-календарь'
      }
    ]
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
        value: '180 грамм'
      },
      {
        label: 'Состав',
        value: 'Какао, зефир маршмэллоу, 3 кубика чёрного'
      },
      {
        label: 'Дополнительно',
        value: 'Открытка-поздравление'
      }
    ]
  },
  {
    id: '2',
    name: 'Plan B package',
    shortDescription: 'Lorem ipsum dolor amet adipisicing.',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, eum.',
    images: ['../img/sets/set-03-01.jpg', '../img/sets/set-03-02.jpg'],
    colors: ['#000000'],
    price: 9.99,
    attributes: [
      {
        label: 'Вес',
        value: '170 грамм'
      },
      {
        label: 'Состав',
        value: 'Печенье с шоколадной стружкой'
      },
      {
        label: 'Дополнительно',
        value: 'Кружка'
      }
    ]
  },
  {
    id: '3',
    name: 'Multiple flavor samples',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolore dolores deleniti!',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic non repellendus nihil recusandae obcaecati temporibus quam fugiat dolor, repellat aspernatur fugit saepe dignissimos corporis neque quod eius accusamus minima in.',
    images: ['../img/sets/set-04-01.jpg'],
    colors: ['#b86843', '#ac9336', '#235c91', '#587837'],
    price: 14.99,
    attributes: [
      {
        label: 'Вес',
        value: '200 грамм'
      },
      {
        label: 'Состав',
        value: '12 сортов шоколада'
      },
      {
        label: 'Дополнительно',
        value: 'Набор стикеров'
      }
    ]
  }
];




const fillItemList = () => {
  const itemListEl = document.getElementById('card-list');
  const itemTemplate = document.getElementById('item-template');
  if (!itemTemplate || !itemListEl) {
    return;
  }
  setItems.forEach((item) => {
    const itemEl = itemTemplate.content.cloneNode(true);
    itemEl.querySelector('.card__name').textContent = item.name;
    itemEl.querySelector('.card__description').textContent = item.shortDescription
    itemEl.querySelector('.card__price span').textContent = item.price;
    itemEl.querySelector('.card__image').src = item.images[0];
    itemListEl.appendChild(itemEl);
  });
};
fillItemList();







const colorListEl = document.getElementById('color-list');
const colorTemplate = document.getElementById('color-template');
const buttonEl = document.getElementById('button-color');
// const inlineStyles = buttonEl.style;

setItems.forEach((item) => {
  const colorEl = colorTemplate.content.cloneNode(true).querySelector('*');
  document.getElementById('color-list').appendChild(colorEl);
  // buttonEl.style = `background-color: ${color}`;
})






