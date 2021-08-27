const testimonials = document.querySelectorAll('[data-component="slideshow"]');

const initSlides = () => {
  const slides = document.querySelectorAll(`.slide`); // Get an array of slides
  let index = 0;
  slides[index].classList.add('active');

  setInterval(() => {
    slides[index].classList.remove('active');
    //Go over each slide incrementing the index
    index++;
    // If you go over all slides, restart the index to show the first slide and start again
    if (index === slides.length) index = 0;
    // add the active class to the slide again
    slides[index].classList.add('active');
  }, 2_000);
}

initSlides();
