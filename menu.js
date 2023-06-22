const menuOn = document.getElementById("menu-btn");
const menuClose = document.getElementById("menu");
const menuClosing = document.getElementById("menuClose");
const mobileLinks = document.getElementsByClassName("close-menu");
let state = false;

const openMenu = () => {
  state = !state;
  if (state) {
    menuClose.style.transform = "translateX(0px)";
    menuClose.style.display = "block";
    menuClose.style.transition = "transform 700ms ease-in-out 0s";
  }
};

const closeMenu = () => {
  state = !state;
  if (!state) {
    menuClose.style.transform = "translateX(100%)";

    menuClose.style.transition = "transform 700ms ease-in-out 0s";
  }
};
menuClosing.addEventListener("click", closeMenu);
menuOn.addEventListener("click", openMenu);

// close menu when mobile link is clicked
for (let i = 0; i < mobileLinks.length; i++) {
  mobileLinks[i].addEventListener("click", closeMenu);
}
