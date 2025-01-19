export function mobileMenuContent() {
    // Mobile Menu Toggle
    const hamburgerButton = document.querySelector('.js-button');
    const mobileMenu = document.querySelector('.right-section-mobile');

    if (hamburgerButton && mobileMenu) {
        hamburgerButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            hamburgerButton.classList.toggle('active');
        });
    }
}