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

document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }

    // Attach event listeners to prev/next buttons
    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });
    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });

    // Attach event listeners to thumbnails
    let thumbnails = document.querySelectorAll('.demo');
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            currentSlide(index + 1);
        });
    });

    // Initialize the first slide
    showSlides(slideIndex);
});