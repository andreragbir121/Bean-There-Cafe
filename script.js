const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('main-menu');

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));  // tells screen readers
  menu.classList.toggle('open');
});
