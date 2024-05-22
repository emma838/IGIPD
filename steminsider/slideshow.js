let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  // Show the specified slide
  slides[index].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Automatically advance to the next slide every 3 seconds
setInterval(nextSlide, 3000);