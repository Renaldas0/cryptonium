const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-nav')

menuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('is-active');
})