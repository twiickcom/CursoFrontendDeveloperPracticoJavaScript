const menuEmail=document.querySelector(".navbar-email");
const desktopMenu=document.querySelector(".desktop-menu");
const menuHamIcon=document.querySelector(".menu")
const mobileMenu=document.querySelector(".mobile-menu")

const menuCarritoIcon=document.querySelector(".navbar-shopping-cart");
const aside=document.querySelector(".product-detail");

menuEmail.addEventListener("click", function(){toogle(desktopMenu)});
menuHamIcon.addEventListener("click", function(){toogle(mobileMenu)});
menuCarritoIcon.addEventListener("click", function(){toogle(aside)});

function toogle(element){
    desactivar(desktopMenu, element);
    desactivar(mobileMenu, element);
    desactivar(aside, element);
   element.classList.toggle("inactive");
}

function desactivar(element, element2){
    if(!element.classList.contains("inactive") && element!=element2){
        element.classList.add("inactive");
    }
}