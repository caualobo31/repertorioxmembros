const toast = document.querySelector('.toast');
const toastTitle = document.querySelector('[data-toast-title]');
let toastTimer;

document.querySelectorAll('[data-module]').forEach((button) => {
  button.addEventListener('click', () => {
    const moduleName = button.dataset.module;
    toastTitle.textContent = moduleName;
    toast.setAttribute('aria-hidden', 'false');
    toast.classList.add('is-visible');

    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove('is-visible');
      toast.setAttribute('aria-hidden', 'true');
    }, 2600);
  });
});

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav__link');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle('nav__link--active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-35% 0px -55%', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
