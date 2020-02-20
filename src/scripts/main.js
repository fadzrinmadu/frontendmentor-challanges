import MenuToggle from './components/MenuToggle'

const components = [
  {
    class: MenuToggle,
    selector: '.menu-toggle'
  }
]

components.forEach(component => {
  if (document.querySelector(component.selector) !== null) {
    document.querySelectorAll(component.selector).forEach(element => {
      new component.class(element, element.options)
    })
  }
})
