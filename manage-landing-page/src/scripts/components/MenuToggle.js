export default class MenuToggle {
  constructor(element) {
    element.addEventListener('click', this.showMenu)
  }

  showMenu() {
    let headerNav = document.querySelector('header nav')
    let menuToggle = document.querySelector('.menu-toggle img')
    let pathImage = 'assets/img/'

    headerNav.classList.toggle('active')
    if (menuToggle.getAttribute('src').includes('icon-hamburger.svg')) {
      pathImage += 'icon-close.svg'
    } else {
      pathImage += 'icon-hamburger.svg'
    }
    menuToggle.setAttribute('src', pathImage)
  }
}
