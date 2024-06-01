let slideIndex = 1;
showSlides(slideIndex);

// Function to show the current slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Function to show the next slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show the current slide based on dot clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Automatically change slides every 5 seconds
setInterval(() => {
    plusSlides(1);
}, 5000);

// Get the elements from the DOM
const openHam = document.getElementById('openHam');
const closeHam = document.getElementById('closeHam');
const navigationItems = document.getElementById('navigation-items');

// Function to open the navigation menu
function openMenu() {
    navigationItems.style.display = 'flex';
    openHam.style.display = 'none';
    closeHam.style.display = 'block';
}

// Function to close the navigation menu
function closeMenu() {
    if (window.innerWidth <= 768) {
        navigationItems.style.display = 'none';
        openHam.style.display = 'block';
        closeHam.style.display = 'none';
    }
}

// Event listeners for the hamburger menu buttons
openHam.addEventListener('click', openMenu);
closeHam.addEventListener('click', closeMenu);

// Add event listeners to menu items to close the menu on click if the screen width is 768px or less
const menuItems = document.querySelectorAll('.navigation-items a');
menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
});

// Back to top button
const backToTopButton = document.getElementById("backToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
