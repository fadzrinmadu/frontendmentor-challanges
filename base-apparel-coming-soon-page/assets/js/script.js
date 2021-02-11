document.addEventListener('DOMContentLoaded', function() {
  
  const form = document.querySelector('form');
  const inputEmail = document.querySelector('input[name="email"]');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const pattern = /^([\w\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    if(!pattern.test(inputEmail.value)) {
      // hapus pesan invalid jika ada
      if (form.querySelector('span')) form.removeChild(form.querySelector('span'));

      const span = document.createElement('span');
      const spanText = document.createTextNode('Please provide a valid email');
      span.appendChild(spanText);
      form.appendChild(span);

      inputEmail.classList.add('invalid');
    }
  })

})
