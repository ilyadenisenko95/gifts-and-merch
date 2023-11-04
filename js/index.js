
// console.log("mobile menu btn:", document.getElementById("mobile-menu-btn"))
// console.log("order menu btn:", document.getElementById("order-menu-btn"))






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

// Модальное окно "order" на странице "Наборы"





const myTrolley = document.getElementById("trolley-modal-btn")
if (myTrolley) {
  myTrolley.addEventListener("click", function () {
    document.getElementById("modal-book-menu").classList.add("open");
    closeModal();
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

function closeModal() {
  document.getElementById("modal-basket-menu").classList.remove("open");
}


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal-book-menu").classList.remove("open")
  }
})

// // Модальное окно, которое вызывается в другом на странице "Наборы"








// document.getElementById("basket-modal-btn").addEventListener("click", function () {
//   document.getElementById("my-modal2").classList.add("open")
//   closeModal();
// })

// document.getElementById("close-my-modal-btn2").addEventListener("click", function () {
//   document.getElementById("my-modal2").classList.remove("open");
// })



















// const cartButton = document.getElementById("open-modals");

// if (cartButton) {
//   cartButton.addEventListener("click", function () {
//     document.getElementById("my-modals").classList.add("open")
//   })
// }

// document.getElementById("open-modal-btn1").addEventListener("click", function () {
//   document.getElementById("modal-order-menu").classList.add("open")
// })

// document.getElementById("close-my-modal-btn").addEventListener("click", function () {
//   document.getElementById("modal-mobile-menu").classList.remove("open")
// })

// document.getElementById("open-modal-btn1").addEventListener("click", function () {
//   document.getElementById("modal-mobile-menu").classList.remove("open")
// })

// document.getElementById("open-modal-btn5").addEventListener("click", function () {
//   document.getElementById("my-modal2").classList.add("open")
// })

// // попап на странице все товары


