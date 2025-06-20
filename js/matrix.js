// Dark/Light Mode toggle and persist in localStorage
const modeToggle = document.getElementById('mode-toggle');
const html = document.documentElement;

// Initialize mode on page load
if (localStorage.getItem('theme') === 'light') {
  html.classList.remove('dark');
  modeToggle.textContent = '🌙';
} else {
  html.classList.add('dark');
  modeToggle.textContent = '☀️';
}

modeToggle.addEventListener('click', () => {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    modeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    modeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});

// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

// Lottie background animation
lottie.loadAnimation({
  container: document.getElementById('lottie-bg'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/animations/hacker-matrix.json', // Replace with your animation JSON path
});
