let lastScrollTop = 0;
const navbar = document.getElementById('mainNavbar');
let scrolling = false;

window.addEventListener('scroll', () => {
    if (!scrolling) {
        scrolling = true;

        setTimeout(() => {
            const currentScroll = window.scrollY || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                // Scroll down
                navbar.style.transition = 'transform 0.2s ease-out';
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scroll up
                navbar.style.transition = 'transform 0.2s ease-out';
                navbar.style.transform = 'translateY(0)';
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
            scrolling = false;
        }, 200); // Ubah nilai delay di sini sesuai kebutuhan
    }
});

