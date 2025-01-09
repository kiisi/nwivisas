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


var swiper = new Swiper(".mySwiper", {
    rewind: true,
    spaceBetween: 4,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 2,
    breakpoints: {
        375: {
            slidesPerView: 2,
        },
        425: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});

const clientTestimonialTrigger = document.getElementById("client-testimonial-trigger");
const modal = document.getElementById('modal');
const videoContainer = document.getElementById('video-container');
const btnCloseModal = document.getElementById('btn-close-modal');

function openModal() {
    // Create and insert YouTube iframe
    videoContainer.innerHTML = `
        <iframe class="w-full h-full" src="https://www.youtube.com/embed/dFpLF19Z-ko" title="Caryn and Family in Adelaide, South Australia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;

    // Show modal with animation
    modal.classList.add('show');
}

clientTestimonialTrigger.addEventListener("click", openModal)

function closeModal() {
    // Hide modal
    modal.classList.remove('show');

    // Wait for animation to finish, then remove iframe
    setTimeout(() => {
        videoContainer.innerHTML = '';
    }, 300);
}

btnCloseModal.addEventListener("click", closeModal);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});