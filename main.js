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
    // const menuDesac = menuDestok.classList.contains('inactive');
    const menuMobDes = menuMobile.classList.contains('inactive');
    if(menuMobDes ){
        conteinCar.classList.toggle('inactive');
    
    }else{
        
         menuMobile.classList.add('inactive');
    }
}

function toggleDestokMenu(){
    const carDesac = conteinCar.classList.contains('inactive');
    if(carDesac){
    menuDestok.classList.toggle('inactive');
    }else{
        conteinCar.classList.add('inactive');
    }
}

function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive');
}

