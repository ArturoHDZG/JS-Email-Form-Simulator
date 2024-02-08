'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Registrar elementos de la interfaz
  const email = { email: '', CC: '', asunto: '', mensaje: '' }
  const formulario = document.querySelector('#formulario');
  const inputEmail = document.querySelector('#email');
  const inputCC = document.querySelector('#emailCC');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');
  const btnSubmit = document.querySelector('button[type="submit"]');
  const btnReset = document.querySelector('button[type="reset"]');
  const spinner = document.querySelector('#spinner');

  // Asignar eventos
  inputEmail.addEventListener('input', validar);
  inputCC.addEventListener('input', validar);
  inputAsunto.addEventListener('input', validar);
  inputMensaje.addEventListener('input', validar);
  formulario.addEventListener('submit', enviarEmail);

  btnReset.addEventListener('click', function (e) {
    e.preventDefault();
    resetFormulario();
  });

  // Funciones
  function validar(e) {
    if (e.target.name !== 'CC' && e.target.value.trim() === '') {
      mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
      email[ e.target.name ] = '';
      comprobarObjeto()
      return;
    }

    if (e.target.id === 'email' && !validarEmail(e.target.value)) {
      mostrarAlerta('El Email no es valido', e.target.parentElement);
      email[ e.target.name ] = '';
      comprobarObjeto()
      return;
    }

    if (e.target.id === 'emailCC' && e.target.value !== '' && !validarEmail(e.target.value)) {
      mostrarAlerta('El Email no es valido', e.target.parentElement);
      email[ e.target.name ] = 'error';
      comprobarObjeto()
      return;
    }

    limpiarAlerta(e.target.parentElement);

    // Asignar valores al objeto 'email' y verificarlo
    email[ e.target.name ] = e.target.value.trim().toLowerCase();
    comprobarObjeto();
  }

  function mostrarAlerta(mensaje, referencia) {
    const error = document.createElement('P');

    limpiarAlerta(referencia);

    error.textContent = mensaje;
    error.classList.add(
      'bg-red-600',
      'text-white',
      'p-2',
      'text-center',
      'uppercase',
      'font-bold'
    );

    referencia.appendChild(error);
  }

  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector('.bg-red-600');

    if (alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);

    return resultado;
  }

  function comprobarObjeto() {
    const { CC, ...restantes } = email;
    console.log(CC === 'error')
    if (!Object.values(restantes).includes('') && (CC === '' || CC !== 'error')) {
      btnSubmit.classList.remove('opacity-50');
      btnSubmit.disabled = false;
    } else {
      btnSubmit.classList.add('opacity-50');
      btnSubmit.disabled = true;
    }
  }

  function enviarEmail(e) {
    e.preventDefault();

    spinner.classList.add('flex');
    spinner.classList.remove('hidden');

    setTimeout(() => {
      spinner.classList.add('hidden');
      spinner.classList.remove('flex');

      resetFormulario();
      enviadoEmail();
    }, 2500);
  }

  function resetFormulario() {
    email.email = '';
    email.CC = '';
    email.asunto = '';
    email.mensaje = '';

    formulario.reset();
    comprobarObjeto();
  }

  function enviadoEmail() {
    const mensaje = document.createElement('P');
    mensaje.textContent = 'Mensaje enviado correctamente';
    mensaje.classList.add(
      'bg-green-500',
      'text-white',
      'p-2',
      'text-center',
      'rounded-lg',
      'mt-10',
      'font-fold',
      'text-sm',
      'uppercase'
    );

    formulario.appendChild(mensaje);

    setTimeout(() => {
      mensaje.remove();
    }, 3500);
  }
});
