// This script is for the hamburger menu 

const toggle_menu = document.getElementsByClassName('toggle_menu')[0];
const nav_bar_right = document.getElementsByClassName('nav_bar_right')[0];

toggle_menu.addEventListener('click', () => {
    nav_bar_right.classList.toggle('active')
})