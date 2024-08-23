const burgerBtn = document.querySelector('#hamburger');
const navbar = document.querySelector('header');
let currentScroll;


burgerBtn.addEventListener('click',() => {
    burgerBtn.classList.toggle("hamburger-actived");
});

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if( currentScroll < 100 ) {
        navbar.classList.add('absolute');
        navbar.classList.remove('backdrop-blur-nav');
    } else if ( currentScroll > scroll ){
        navbar.classList.add('backdrop-blur-nav');
        navbar.classList.remove('absolute');
    } else {
        navbar.classList.remove('backdrop-blur-nav');
    }
    
    currentScroll = scroll;
})