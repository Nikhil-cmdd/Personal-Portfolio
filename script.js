// Use more specific selectors to differentiate between button and menu
const menuBtn = document.querySelector('.menu-btn');  // Changed selector
const menuLinks = document.querySelector('header .menu-links');  // Changed selector

menuBtn.addEventListener('click', function() {
    menuLinks.classList.toggle('menu-active');
});
