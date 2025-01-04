const mobileMenuButton = document.getElementById('navigation-bar-menu-toggle');
const mobileMenu = document.getElementById('navigation-bar-mobile-menu');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    // Animate height and opacity
    if (isMenuOpen) {
        mobileMenu.classList.add('opacity-100');
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
    } else {
        mobileMenu.classList.remove('opacity-100');
        mobileMenu.style.maxHeight = '0px';
    }
}

mobileMenuButton.addEventListener('click', toggleMenu);

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { // md breakpoint
        mobileMenu.style.maxHeight = '0px';
        mobileMenu.classList.remove('opacity-100');
        isMenuOpen = false;
    }
});