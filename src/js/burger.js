const page = document.querySelector(".header_BurgerPage");
const burger= document.querySelector(".header_Burger");
const close= document.querySelector('.header_BurgerClose');

function openMenu() {
    page.className="show_header_BurgerPage";
}

function closeMenu() {
    page.className="header_BurgerPage";
}

burger.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
