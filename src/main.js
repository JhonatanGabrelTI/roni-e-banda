document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.topbar');
  const dots = document.querySelectorAll('.dot-btn');
  const testimonials = document.querySelectorAll('.testimonial');

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
