/* ---------- COMIENZO Sección contacto ----------- */
const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  // Validar los campos obligatorios
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const provinciaSelect = document.getElementById('provincia');

  if (nameInput.value.trim() === '') {
    isValid = false;
    nameInput.classList.add('invalid');
  } else {
    nameInput.classList.remove('invalid');
  }

  if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
    isValid = false;
    emailInput.classList.add('invalid');
  } else {
    emailInput.classList.remove('invalid');
  }

  if (provinciaSelect.value === '') {
    isValid = false;
    provinciaSelect.classList.add('invalid');
  } else {
    provinciaSelect.classList.remove('invalid');
  }

});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
/* ---------- FIN Sección contacto ----------- */