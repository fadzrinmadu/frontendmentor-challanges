document.addEventListener('DOMContentLoaded', function() {
  
  // toggle menu
  const menuToggle = document.querySelector('.menu-toggle')
  const menuContainer = document.querySelector('.menu-container')

  // svg logo
  const firstPathLogo = document.querySelector('header .logo svg path:first-of-type')
  const lastPathLogo = document.querySelector('header .logo #logoPath')
  const circleLogo = document.querySelector('header .logo svg circle')

  menuToggle.addEventListener('click', function(e) {
    e.preventDefault()
    menuContainer.classList.toggle('active')
    if (e.target.getAttribute('src') == 'assets/img/icon-hamburger.svg') {
      menuToggle.children[0].setAttribute('src', 'assets/img/icon-close.svg')
      firstPathLogo.setAttribute("fill", "white")
      lastPathLogo.setAttribute("fill", "#242A45")
      circleLogo.setAttribute("fill", "white")
    } else {
      menuToggle.children[0].setAttribute('src', 'assets/img/icon-hamburger.svg')
      firstPathLogo.setAttribute("fill", "#242A45")
      lastPathLogo.setAttribute("fill", "#fff")
      circleLogo.setAttribute("fill", "#5267DF")
    }
  })


  // nav tabs event
  const tabs = document.querySelectorAll('.nav-tabs li')
  tabs.forEach(t => {
    t.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'))
      t.classList.add('active');

      // change tab pane
      const target = t.dataset.target
      const selectedTabPane = document.querySelector(target)
      const tabPane = document.querySelectorAll('.tab-pane')

      tabPane.forEach(t => t.classList.remove('active'))
      setTimeout(function() {
        selectedTabPane.classList.add('active')
      }, 400)
    })
  })


  // Open Questions
  const questionList = document.querySelectorAll('.question')
  questionList.forEach(q => {
    q.addEventListener('click', function() {
      q.classList.toggle('active')
    })
  })


  // Form Validation
  const form = document.querySelector('.contact form')
  const email = document.querySelector('.contact .email')
  const pattern = /^([\w\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

  form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    if (!pattern.test(email.value)) {
      if (form.querySelector('.error-message')) form.removeChild(form.querySelector('.error-message'))

      const errorMessage = document.createElement('span')
      const text = document.createTextNode("Whoops, make sure it's an email")
      errorMessage.appendChild(text)
      errorMessage.classList.add('error-message')

      email.classList.add('invalid')
      form.insertBefore(errorMessage, email.nextSibling)
    } else {
      if (form.querySelector('.error-message')) form.removeChild(form.querySelector('.error-message'))
      email.classList.remove('invalid')
    }

  })

})
