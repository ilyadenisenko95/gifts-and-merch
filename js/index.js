
document.getElementById("mobile-menu-btn").addEventListener("click", function () {
  document.getElementById("modal-mobile-menu").classList.add("open")
})

document.getElementById("close-mobile-menu-btn").addEventListener("click", function () {
  document.getElementById("modal-mobile-menu").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal-mobile-menu").classList.remove("open")
  }
})

// Модальное окно БМ


const myModal = document.getElementById("order-menu-btn")
if (myModal) {
  myModal.addEventListener("click", function () {
    document.getElementById("modal-order-menu").classList.add("open");
  });
}
const orderModal = document.getElementById("close-order-menu-btn")
if (orderModal) {
  orderModal.addEventListener("click", function () {
    document.getElementById("modal-order-menu").classList.remove("open");
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal-order-menu").classList.remove("open")
  }
})

const myModalBasket = document.getElementById("modal-basket-btn")
if (myModalBasket) {
  myModalBasket.addEventListener("click", function () {
    document.getElementById("modal-basket-menu").classList.add("open");
    closeModalBasket();
  })
}

function closeModalBasket() {
  document.getElementById("modal-order-menu").classList.remove("open");
}

// Первое модальное окно в карточак


const myModalOne = document.getElementById("order-menu-btn-one")
if (myModalOne) {
  myModalOne.addEventListener("click", function () {
    document.getElementById("modal-order-menu").classList.add("open");
  });
}

// Второе модальное окно в карточак

const myModalTwo = document.getElementById("order-menu-btn-two")
if (myModalTwo) {
  myModalTwo.addEventListener("click", function () {
    document.getElementById("modal-order-menu").classList.add("open");
  });
}

// Третье модальное окно в карточак

const myModalThree = document.getElementById("order-menu-btn-three")
if (myModalThree) {
  myModalThree.addEventListener("click", function () {
    document.getElementById("modal-order-menu").classList.add("open");
  });
}

// Четвертое модальное окно в карточак



const myTrolley = document.getElementById("trolley-modal-btn")
if (myTrolley) {
  myTrolley.addEventListener("click", function () {
    document.getElementById("modal-book-menu").classList.add("open");
  });
}

const myTrolleyOne = document.getElementById("close-trolley-modal-btn")
if (myTrolleyOne) {
  myTrolleyOne.addEventListener("click", function () {
    document.getElementById("modal-book-menu").classList.remove("open");
  });
}

const myTrolleyCl = document.getElementById("close-trolley-modal-btn-two")
if (myTrolleyCl) {
  myTrolleyCl.addEventListener("click", function () {
    document.getElementById("modal-book-menu").classList.remove("open");
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal-book-menu").classList.remove("open")
  }
})

// // Модальное окно(корзина), которое вызывается на странице "Все товары"

const myBasketOp = document.getElementById("open-modal-basket-btn")
if (myBasketOp) {
  myBasketOp.addEventListener("click", function () {
    document.getElementById("modal-basket-menu").classList.add("open")
    closeModal();
  })
}

function closeModal() {
  document.getElementById("modal-book-menu").classList.remove("open");
}

const myBasketCl = document.getElementById("close-basket-modal-btn")
if (myBasketCl) {
  myBasketCl.addEventListener("click", function () {
    document.getElementById("modal-basket-menu").classList.remove("open")
  })
}

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal-basket-menu").classList.remove("open")
  }
})

// Модальное окно "В корзину"



const accordionTopElArr = document.querySelectorAll('.description__float');
accordionTopElArr.forEach((topEl) => {
  topEl.addEventListener('click', (event) => {
    const contentEl = event.currentTarget.nextElementSibling;
    contentEl.classList.toggle('open');
  });
});

















