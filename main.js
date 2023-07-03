const menuEmail=document.querySelector(".navbar-email");
const desktopMenu=document.querySelector(".desktop-menu");
const menuHamIcon=document.querySelector(".menu")
const mobileMenu=document.querySelector(".mobile-menu")

const menuCarritoIcon=document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer=document.querySelector("#shopping-cart");
const productDetailContainer=document.querySelector("#product-detail");
const productDetailClose=document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", function(){toogle(desktopMenu)});
menuHamIcon.addEventListener("click", function(){toogle(mobileMenu)});
menuCarritoIcon.addEventListener("click", function(){toogle(shoppingCartContainer)});
productDetailClose.addEventListener("click", function(){productDetailContainer.classList.add("inactive")});

function toogle(element){
    desactivar(desktopMenu, element);
    desactivar(mobileMenu, element);
    desactivar(shoppingCartContainer, element);
    desactivar(productDetailContainer, element)
    element.classList.toggle("inactive");
}

function desactivar(element, element2){
    if(!element.classList.contains("inactive") && element!=element2){
        element.classList.add("inactive");
    }
}

// Cards 

const cardsContainer=document.querySelector(".cards-container");

const productList=[];

productList.push({
    name: "Bike",
    price:120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Pantalla",
    price:320,
    image: "https://images.pexels.com/photos/1714340/pexels-photo-1714340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: "Computador",
    price:220,
    image: "https://images.pexels.com/photos/3999538/pexels-photo-3999538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

function renderProducts(){
    for(product of productList){
        const productCard=crear("div");
        productCard.classList.add("product-card");
        const productImg=crear("img");
        productImg.setAttribute("src",product.image);
        productImg.addEventListener("click", function(){if(productDetailContainer.classList.contains("inactive")){toogle(productDetailContainer);}});
        const productInfo=crear("div");
        productInfo.classList.add("product-info");
        const productInfoDiv=crear("div");
        const productPrice=crear("p");
        productPrice.innerText="$"+product.price;
        const productName=crear("p");
        productName.innerText=product.name;
        const productInfoFigure=crear("figure");
        const productImgCart=crear("img");
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        productInfo.appendChild(productInfoDiv);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoFigure); 
        productInfoFigure.appendChild(productImgCart);
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

        cardsContainer.appendChild(productCard);
    }
}

function crear(elemento){
    return document.createElement(elemento);
}

renderProducts();