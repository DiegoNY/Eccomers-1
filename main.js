//declaramos variables

const menu = document.querySelector('.navbar-email');
const menuDestok = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const conteinCar =document.querySelector('.car');

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

