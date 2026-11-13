
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    } else{
        entry.target.classList.remove('is-visible');
    }
  });
});

document.querySelectorAll('.fade-element').forEach((el) => {
  observer.observer ? observer.observe(el) : observer.observe(el);
});

