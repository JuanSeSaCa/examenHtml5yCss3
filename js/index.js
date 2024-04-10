const menu = document.querySelector('.nav__header')
const menuIcon = document.querySelector('.menu-icon')


menuIcon.addEventListener('click', ()=> {
    menu.classList.toggle('show')
})