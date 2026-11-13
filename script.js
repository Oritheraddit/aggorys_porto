// script.js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Optional: uncomment below if you want it to fade out when scrolling back up
      // entry.target.classList.remove('is-visible'); 
      
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.fade-element').forEach((el) => {
  observer.observer ? observer.observe(el) : observer.observe(el);
});

