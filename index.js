const mobileNav = document.querySelector('.mobileNavbar');
const mobileLinks = document.querySelectorAll('.mobile-links');
const openNavbarBtn = document.getElementById('openMobileNav');
const closeNavbar = document.getElementById('closeNavBtn');

const leftImageContainer = document.querySelectorAll('.left-image-container');
const rightImageContainer = document.querySelectorAll('.right-image-container');

// Handle Open Mobile Navbar
openNavbarBtn.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    mobileNav.style.right = '0';
})
// Handle Close Mobile Navbar
closeNavbar.addEventListener('click', () => {
    document.body.style.removeProperty('overflow');
    mobileNav.style.right = '-100%';
})
// Handle Scroll into if clicking mobile navbar links
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.style.removeProperty('overflow');
        mobileNav.style.right = '-100%';
    })
})


// Left On Scroll Animation
const leftObserver = new IntersectionObserver(
    entries => {
        entries.forEach((entry) => {
            const container = entry.target;
            if (entry.isIntersecting) {
                container.classList.add("slide-right");
            }
        });
    },
);

leftImageContainer.forEach(leftContainer => {
    leftObserver.observe(leftContainer);
});


// Right Animation
const rightObserver = new IntersectionObserver(
    entries => {
        entries.forEach((entry) => {
            const container = entry.target;
            if (entry.isIntersecting) {
                container.classList.add("slide-left");
            }
        });
    },
);

rightImageContainer.forEach(leftContainer => {
    rightObserver.observe(leftContainer);
});

