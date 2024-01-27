// Toggle the menu open and close when on mobile
export default function menuOpen() {
    const burgerButton = document.querySelector('.gh-burger');
    burgerButton.addEventListener('click', function () {
        document.body.classList.toggle('is-menu-open');
    });
}