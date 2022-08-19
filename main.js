//declaramos variables
const menu = document.querySelector('.navbar-email');
const menuDestok = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
//escuchamos funcion click para mostrar menu
menu.addEventListener('click',toggleDestokMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);

function toggleDestokMenu(){
    menuDestok.classList.toggle('inactive');
}

function toggleMobileMenu(){

}