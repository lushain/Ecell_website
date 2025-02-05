let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onlclick =()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    
}
const scrollPosition = window.scrollY
window.onscroll = function(){scrollFunction()};

const logo = document.getElementById('logo')
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Change navbar_size on scroll
    if (scrollPosition > 10) {
        navbar.style.height = '13px';
        logo.style.width = '40px';
        logo.style.height = '50px';
        logo.style.marginTop = '5px';
    } else {
        navbar.style.height = '30px';
        logo.style.width = '50px';
        logo.style.height = '60px';
        logo.style.marginTop = '0px';
    }
});