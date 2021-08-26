const menu = document.querySelector('.menuToggle');
const navUl = document.querySelector('nav ul');

menu.addEventListener('click', () => navUl.classList.toggle('showNav'));
