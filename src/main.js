document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.topbar');
  const introScreen = document.querySelector('.intro-screen');
  const dots = document.querySelectorAll('.dot-btn');
  const testimonials = document.querySelectorAll('.testimonial');
  const carouselSlides = document.querySelectorAll('.vibe-slide');
  const carouselDots = document.querySelectorAll('.carousel-dot');
  const previousButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  const animatedSections = document.querySelectorAll('.marquee-wrap, .band-vibe, .experience, .footer');

  animatedSections.forEach((section) => section.classList.add('reveal-on-scroll'));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  animatedSections.forEach((section) => revealObserver.observe(section));

  let activeSlide = 0;
  const setActiveSlide = (index) => {
    activeSlide = (index + carouselSlides.length) % carouselSlides.length;
    carouselSlides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === activeSlide));
    carouselDots.forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === activeSlide));
  };

  previousButton?.addEventListener('click', () => setActiveSlide(activeSlide - 1));
  nextButton?.addEventListener('click', () => setActiveSlide(activeSlide + 1));
  carouselDots.forEach((dot, index) => dot.addEventListener('click', () => setActiveSlide(index)));
  window.setInterval(() => setActiveSlide(activeSlide + 1), 4200);

  window.setTimeout(() => {
    introScreen?.classList.add('intro-screen-hidden');
    document.body.classList.add('site-ready');
  }, 3000);

  const setActiveTestimonial = (index) => {
    testimonials.forEach((item, i) => item.classList.toggle('active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => setActiveTestimonial(index));
  });

  let currentTestimonial = 0;
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    setActiveTestimonial(currentTestimonial);
  }, 3000);

  window.addEventListener('scroll', () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 16);
  });
});
