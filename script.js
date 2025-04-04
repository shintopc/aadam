let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Go to a specific slide
function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Auto-scroll every 2 seconds
setInterval(nextSlide, 3000);

// Initialize the first slide
showSlide(currentSlide);

document.addEventListener("DOMContentLoaded", function () {
    // Ensure each button retains its default link behavior
    document.querySelectorAll(".cta-button").forEach(button => {
        button.addEventListener("click", function (event) {
            let href = button.getAttribute("href");
            if (!href.startsWith("mailto:") && !href.startsWith("tel:") && !href.startsWith("https://wa.me/")) {
                event.preventDefault(); // Prevent overriding
            }
        });
    });
});

