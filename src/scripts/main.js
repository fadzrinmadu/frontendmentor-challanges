import MenuToggle from './components/MenuToggle'
import SliderDots from './components/SliderDots'

document.addEventListener('DOMContentLoaded', function() {

  const components = [
    {
      class: MenuToggle,
      selector: '.menu-toggle'
    },
    {
      class: SliderDots,
      selector: '.toggle-slider>.dots>a'
    }
  ]

  components.forEach(component => {
    if (document.querySelector(component.selector) !== null) {
      document.querySelectorAll(component.selector).forEach(element => {
        new component.class(element, element.options)
      })
    }
  })

})

