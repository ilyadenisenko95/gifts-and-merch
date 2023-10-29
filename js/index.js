
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

// Модальное окно, которое вызывается в другом на странице "Наборы"

document.getElementById("open-modals").addEventListener("click", function () {
  document.getElementById("my-modals").classList.add("open")
})

document.getElementById("close-my-modals").addEventListener("click", function () {
  document.getElementById("my-modals").classList.remove("open")
})

document.getElementById("open-modal-btn5").addEventListener("click", function () {
  document.getElementById("my-modals").classList.remove("open")
})

document.getElementById("open-modal-btn5").addEventListener("click", function () {
  document.getElementById("my-modal2").classList.add("open")
})

// попап на странице все товары


// const menuBody = document.querySelector('.popular__basket');

// document.addEventListener("click", popular__basket);

// function popular(event) {
//   if (event.target.closest('.popular__purchases')) {
//     menuBody.classList.toggle('open');
//   }

// }
