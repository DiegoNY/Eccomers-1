//declaramos variables

const menu = document.querySelector('.navbar-email');
const menuDestok = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const conteinCar =document.querySelector('.car');
const carsConteiner = document.querySelector('.cards-container');
//escuchamos funcion click para mostrar menu
menu.addEventListener('click',toggleDestokMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
carrito.addEventListener('click',toggleCarrito);

function toggleCarrito(){
    
    const isMenuMobilClosed = menuMobile.classList.contains('inactive');
    //menuDestok Inactivo
    const isMenuDestockClosed = menuDestok.classList.contains('inactive');

    if(!isMenuMobilClosed){
        menuMobile.classList.add('inactive');
    }
    conteinCar.classList.toggle('inactive');
   
}

function toggleDestokMenu(){
    const isCarConteinClosed = conteinCar.classList.contains('inactive');
    if(!isCarConteinClosed){
        conteinCar.classList.add('inactive');
    }
    menuDestok.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isCarClosed = conteinCar.classList.contains('inactive');

    if(!isCarClosed){
        conteinCar.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name:'Bike',
    precio:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Monedero',
    precio:15,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Polo',
    precio:50,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

console.log(productList);

for(product of productList){
    const productCar = document.createElement('div');
    productCar.classList.add('product-card');
    const img = document.createElement('img');
    img.setAttribute('src',product.image);
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = product.precio;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    const productFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfo.appendChild(productInfoDiv);
    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);
    productInfo.appendChild(productFigure);
    productFigure.appendChild(productImgCart);
    
    productCar.appendChild(img);
    productCar.appendChild(productInfo);
    carsConteiner.appendChild(productCar);

}
