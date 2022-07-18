const link = document.querySelectorAll(".question-item-title");
const list = document.querySelectorAll(".ingrediend-list");
const elList = document.querySelector(".question-list");

link.forEach((element) => {
  element.addEventListener("click", function () {
    list[element.getAttribute("data-id") - 1].classList.toggle(
      "ingrediend-list-block"
    );
  });
});
