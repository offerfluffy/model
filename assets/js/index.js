const btn = document.getElementById('burger');
const navList = document.getElementById('nav-list');

btn.addEventListener('click', () => {
  navList.classList.toggle('nav-list-visible');
});
