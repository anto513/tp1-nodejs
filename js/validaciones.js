/* ---------- COMIENZO Sección contacto ----------- */
const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  // Validar los campos obligatorios
  const nameInput = document.getElementById('name');
  const lastNameInput = document.getElementById('lastName');
  const emailInput = document.getElementById('email');
  const genderRadios = document.querySelectorAll('input[name="gender"]');
  const nationalitySelect = document.getElementById('nationality');
  const imageInput = document.getElementById('image-input');

  if (nameInput.value.trim() === '') {
    isValid = false;
    nameInput.classList.add('invalid');
  } else {
    nameInput.classList.remove('invalid');
  }

  if (lastNameInput.value.trim() === '') {
    isValid = false;
    lastNameInput.classList.add('invalid');
  } else {
    lastNameInput.classList.remove('invalid');
  }

  if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
    isValid = false;
    emailInput.classList.add('invalid');
  } else {
    emailInput.classList.remove('invalid');
  }

  let genderSelected = false;
  genderRadios.forEach((radio) => {
    if (radio.checked) {
      genderSelected = true;
    }
  });
  if (!genderSelected) {
    isValid = false;
    document.querySelectorAll('.radio-group label').forEach((label) => {
      label.classList.add('invalid');
    });
  } else {
    document.querySelectorAll('.radio-group label').forEach((label) => {
      label.classList.remove('invalid');
    });
  }

  if (nationalitySelect.value === '') {
    isValid = false;
    nationalitySelect.classList.add('invalid');
  } else {
    nationalitySelect.classList.remove('invalid');
  }

  if (imageInput.value === '') {
    isValid = false;
    document.querySelector('.image-upload label').classList.add('invalid');
  } else {
    document.querySelector('.image-upload label').classList.remove('invalid');
  }

  if (isValid) {
    form.submit();
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
/* ---------- FIN Sección contacto ----------- */