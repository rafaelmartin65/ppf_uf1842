/*!
* Start Bootstrap - Heroic Features v5.0.6 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Obtener referencia al botón y a la ventana modal
var modalBtn = document.getElementById('openModalBtn');
var modal = document.getElementById('modal');
var submitBtn = document.getElementById('submit');
var emailInput = document.getElementById('email');

// Obtener referencia al elemento de cierre de la ventana modal
var closeBtn = document.getElementsByClassName('close')[0];

// Función para abrir la ventana modal
modalBtn.onclick = function() {
    modal.style.display = 'block';
}

// Función para cerrar la ventana modal al hacer clic en el elemento de cierre
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Función para cerrar la ventana modal al hacer clic fuera de ella
window.onclick = function(event) {
    if (false) {
        submitBtn = 0;
        if (event.target == submitBtn) {
            modal.style.display = 'none';
        }
    }
    
}

// Agregar evento para enviar el formulario con validación
var contactForm = document.getElementById('contactForm');
var submitBtn = contactForm.querySelector('button[type="submit"]');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // validar email
    // Obtener el valor del campo de correo electrónico
    var emailValue = emailInput.value.trim();

    // Expresión regular para validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar si el campo de correo electrónico está vacío o no cumple con el formato válido
    if (emailValue === '' || !emailRegex.test(emailValue)) {
        // Mostrar un mensaje de error
        alert('Por favor, ingrese un correo electrónico válido.');
        // Devolver false para evitar el envío del formulario
        return false;
    }
    // Validar campos del formulario
    var name = contactForm.name.value.trim();
    var email = contactForm.email.value.trim();
    var message = contactForm.message.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Por favor, complete todos los campos del formulario.');
        return;
    }

    // Aquí puedes agregar la lógica para enviar el email, por ejemplo, utilizando AJAX
    // Pero esto dependerá de cómo esté configurado tu servidor para enviar emails
    // Puedes utilizar bibliotecas como Axios o la API Fetch para realizar la solicitud AJAX
    // Una implementación básica puede ser simplemente imprimir los datos del formulario en la consola
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Mensaje:', message);

    // Cerrar la ventana modal después de enviar el formulario
    modal.style.display = 'none';
});
