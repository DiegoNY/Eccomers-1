//declaramos variables
const menu = document.querySelector('.navbar-email');
const menuDestok = document.querySelector('.desktop-menu');

//escuchamos funcion click para mostrar menu
menu.addEventListener('click',toggleDestokMenu);

function toggleDestokMenu(){
    menuDestok.classList.toggle('inactive');
}

//
console.log('Scrip funcionando');