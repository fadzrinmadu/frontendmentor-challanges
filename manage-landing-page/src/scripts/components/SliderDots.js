const sliderDots = document.querySelectorAll('.toggle-slider>.dots>a');

export default class SliderDots {
  constructor(element) {
    element.addEventListener('click', (e) => {
      this.removeClassActive()
      element.classList.add('active')
    })
  }

  removeClassActive() {
    sliderDots.forEach(s => {
      if (s.classList.contains('active')) s.classList.remove('active')
    })
  }
}
