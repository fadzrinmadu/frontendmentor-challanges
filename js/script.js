const header = document.querySelector('.header');
const buttonMenu = document.querySelector('#buttonMenu');
const headerOverlay = header.querySelector('.overlay');

buttonMenu.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    headerOverlay.classList.remove('fade-in');
    headerOverlay.classList.add('fade-out');
  } else {
    header.classList.add('open');
    headerOverlay.classList.remove('fade-out');
    headerOverlay.classList.add('fade-in');
  }
});
