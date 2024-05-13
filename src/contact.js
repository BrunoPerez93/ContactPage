function toggleMenu() {
  var nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('successModal');
  const closeButton = modal.querySelector('.close');

  function showModal() {
    modal.style.display = 'block';
  }

  function hideModal() {
    modal.style.display = 'none';
  }

  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const formDataObject = {};

    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      formDataObject[checkbox.name] = checkbox.checked;
    });

    const otherFormElements = form.querySelectorAll('input[type="text"], input[type="email"], input[type="phone"], textarea');
    otherFormElements.forEach(element => {
      formDataObject[element.name] = element.value;
    });

    console.log('Form Data:', formDataObject); 
    localStorage.setItem('formData', JSON.stringify(formDataObject));

    showModal();
    form.reset();
  });

  closeButton.addEventListener('click', hideModal);

});

