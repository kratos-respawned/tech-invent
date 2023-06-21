const menuOn = document.getElementById("menu-btn");
const menuClose = document.getElementById("menu");
const menuClosing = document.getElementById("menuClose");
let state = false;

menuOn.addEventListener("click", () => {
  state = !state;
  if (state) {
    menuClose.style.transform = "translateX(0px)";
    menuClose.style.display = "block";
    menuClose.style.transition = "transform 700ms ease-in-out 0s";
  }
});

menuClosing.addEventListener("click", () => {
  state = !state;
  if (!state) {
    menuClose.style.transform = "translateX(100%)";

    menuClose.style.transition = "transform 700ms ease-in-out 0s";
  }
});
