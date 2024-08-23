const burgerBtn = document.querySelector('#hamburger');
const navbar = document.querySelector('header');
const navFix = document.querySelector('#nav-extra');

burgerBtn.addEventListener('click',() => {
    burgerBtn.classList.toggle("hamburger-actived");
});

let currentScroll;

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    console.log(currentScroll);
    
    if( currentScroll < 100 ) {
        navbar.classList.add('absolute');
        navFix.classList.add('hidden');
        navbar.classList.remove('backdrop-blur-nav');
    } else if ( currentScroll > scroll ){
        navbar.classList.add('backdrop-blur-nav');
        navbar.classList.remove('absolute');
        navFix.classList.remove('hidden');
    } else {
        navbar.classList.remove('backdrop-blur-nav');
        navFix.classList.add('hidden');
    }
    
    currentScroll = scroll;
})