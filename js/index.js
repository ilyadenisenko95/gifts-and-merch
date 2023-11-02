const myModal = document.getElementById("my-modal")

document.getElementById("open-modal-btn").addEventListener("click", function () {
  document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-my-modal-btn").addEventListener("click", function () {
  document.getElementById("my-modal").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal").classList.remove("open")
  }
})


// Первое модальное окно на странице "Наборы"

const myModals = document.getElementById("my-modal1")

document.getElementById("open-modal-btn1").addEventListener("click", function () {
  document.getElementById("my-modal1").classList.add("open")
})

document.getElementById("close-my-modal-btn1").addEventListener("click", function () {
  document.getElementById("my-modal1").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal1").classList.remove("open")
  }
})

// Второе модальное окно на странице "Наборы"


document.getElementById("open-modal-btn2").addEventListener("click", function () {
  document.getElementById("my-modal2").classList.add("open")
  closeModal();
})

document.getElementById("close-my-modal-btn2").addEventListener("click", function () {
  document.getElementById("my-modal2").classList.remove("open");
})

function closeModal() {
  document.getElementById("my-modal1").classList.remove("open");
}

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal2").classList.remove("open")
  }
})

// // Модальное окно, которое вызывается в другом на странице "Наборы"

// const cartButton = document.getElementById("open-modals");

// if (cartButton) {
//   cartButton.addEventListener("click", function () {
//     document.getElementById("my-modals").classList.add("open")
//   })
// }

// document.getElementById("open-modal-btn1").addEventListener("click", function () {
//   document.getElementById("my-modal1").classList.add("open")
// })

// document.getElementById("close-my-modal-btn").addEventListener("click", function () {
//   document.getElementById("my-modal").classList.remove("open")
// })

// document.getElementById("open-modal-btn1").addEventListener("click", function () {
//   document.getElementById("my-modal").classList.remove("open")
// })

// document.getElementById("open-modal-btn5").addEventListener("click", function () {
//   document.getElementById("my-modal2").classList.add("open")
// })

// // попап на странице все товары


const cartButton = document.getElementById("my-but")

if (cartButton) {
  cartButton.addEventListener("click", function () {
    document.getElementById("my-golder").classList.add("open")
  })
}
f
