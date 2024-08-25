const burgerBtn = document.querySelector('#hamburger');
const navbar = document.querySelector('header');
const navMenu = document.querySelector('#nav-menu');
let currentScroll;


burgerBtn.addEventListener('click',() => {
    burgerBtn.classList.toggle("hamburger-actived");
    navMenu.classList.toggle("hidden");
});

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if( currentScroll < 100 ) {
        navbar.classList.add('absolute');
        navbar.classList.remove('sticky');
    } else if ( currentScroll > scroll ){
        navbar.classList.add('sticky');
        navbar.classList.remove('absolute');
    } else {
        navbar.classList.remove('sticky');
        navbar.classList.add('absolute');
    }
    
    currentScroll = scroll;
})