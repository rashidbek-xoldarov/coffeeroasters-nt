const link = document.querySelectorAll(".question-item-title");
const list = document.querySelectorAll(".ingrediend-list");
const elList = document.querySelector(".question-list");
const elModalOpenBtn = document.querySelector(".order-summary-link");
const elModal = document.querySelector(".modal");
const elModalCloseBtn = document.querySelector(".checkout-btn");

link.forEach((element) => {
  element.addEventListener("click", function () {
    list[element.getAttribute("data-id") - 1].classList.toggle(
      "ingrediend-list-block"
    );
  });
});

elModalOpenBtn.addEventListener("click", function (event) {
  event.preventDefault();
  elModal.classList.add("modal-open");
});

elModalCloseBtn.addEventListener("click", function () {
  elModal.classList.remove("modal-open");
});

elModal.addEventListener("click", function () {
  elModal.classList.remove("modal-open");
});
