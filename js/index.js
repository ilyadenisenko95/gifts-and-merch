
const myModalMob = document.getElementById("modal-mobile-menu")
document.getElementById("mobile-menu-btn").addEventListener("click", function () {
  myModalMob.classList.add("open")
})

document.getElementById("close-mobile-menu-btn").addEventListener("click", function () {
  myModalMob.classList.remove("open")
})

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal-mobile-menu").classList.remove("open")
  }
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

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    myModalOr.classList.remove("open")
  }
})

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

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    myModalBo.classList.remove("open")
  }
})

// // Модальное окно(корзина), которое вызывается на странице "Все товары"

const myBasketOp = document.getElementById("open-modal-basket-btn")
if (myBasketOp) {
  myBasketOp.addEventListener("click", function () {
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















