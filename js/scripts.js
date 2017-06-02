var link = document.querySelector(".show-form");
var popup = document.querySelector(".modal-box");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("modal-box-show");
});
