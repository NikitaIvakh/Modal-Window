"use strict";

const modal_Window = document.querySelector(".modal-window");
const overlay_Window = document.querySelector(".overlay");
const btn_Close_Modal_Window = document.querySelector(".close-modal-window");
const btn_Show_Modal_Window = document.querySelectorAll(".show-modal-window");

const show_Modal_Window = function () {
  modal_Window.classList.remove("hidden");
  overlay_Window.classList.remove("hidden");
};

const close_Modal_Window = () => {
  modal_Window.classList.add("hidden");
  overlay_Window.classList.add("hidden");
};

for (let i = 0; i < btn_Show_Modal_Window.length; i++) {
  btn_Show_Modal_Window[i].addEventListener("click", show_Modal_Window);
}

btn_Close_Modal_Window.addEventListener("click", close_Modal_Window);
overlay_Window.addEventListener("click", close_Modal_Window);

document.addEventListener("keydown", function (click) {
  if (click.key == `Escape` && !modal_Window.classList.contains("hidden")) {
    close_Modal_Window();
  }
});