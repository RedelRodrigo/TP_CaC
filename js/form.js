document.getElementById('form').addEventListener('submit', function(event) {
  let valid = true;

  const name = document.getElementById('name');
  const pass = document.getElementById('pass');
  const mail = document.getElementById('mail');
  const terms = document.getElementById('terminos');

  const warningName = document.getElementById('warningn');
  const warningPass = document.getElementById('warningp');
  const warningMail = document.getElementById('warningm');
  const warningTerms = document.getElementById('warningt');

  warningName.textContent = '';
  warningPass.textContent = '';
  warningMail.textContent = '';
  warningTerms.textContent = '';

  if (name.value.trim() === '') {
      warningName.textContent = 'El nombre es obligatorio.';
      valid = false;
  }

  if (pass.value.trim() === '') {
      warningPass.textContent = 'La contraseña es obligatoria.';
      valid = false;
  }

  if (mail.value.trim() === '') {
      warningMail.textContent = 'El correo electrónico es obligatorio.';
      valid = false;
  }

  if (!terms.checked) {
      warningTerms.textContent = 'Debe aceptar los términos y condiciones.';
      valid = false;
  }

  if (!valid) {
      event.preventDefault();
  }
});