// script.js
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Buttons
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// Show the next slide
function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
  slides[currentSlide].classList.add("active");
}

// Show the previous slide
function showPrevSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to the last slide
  slides[currentSlide].classList.add("active");
}

// Add event listeners
nextButton.addEventListener("click", showNextSlide);
prevButton.addEventListener("click", showPrevSlide);

// Auto-slide every 5 seconds
setInterval(showNextSlide, 5000);



const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');
let index = 0; // Start at the first set of 4 images

const totalItems = document.querySelectorAll('.carousel-item').length;
const totalGroups = Math.ceil(totalItems / 4); // Number of groups of 4 items

// Update the carousel based on the current index
function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 25}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

// Button click events for 'Previous' and 'Next' buttons
prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = totalGroups - 1; // Loop to last set of images
    }
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    if (index < totalGroups - 1) {
        index++;
    } else {
        index = 0; // Loop to first set of images
    }
    updateCarousel();
});

// Dot click event to jump to specific group
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        index = parseInt(e.target.getAttribute('data-index'));
        updateCarousel();
    });
});
