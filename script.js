// Toggle menu on hover over logo
const logo = document.getElementById('logo');
const menu = document.getElementById('menu');

logo.addEventListener('mouseover', () => {
  menu.style.display = 'flex';
});

logo.addEventListener('mouseout', () => {
  menu.style.display = 'none';
});

menu.addEventListener('mouseover', () => {
  menu.style.display = 'flex';
});

menu.addEventListener('mouseout', () => {
  menu.style.display = 'none';
});