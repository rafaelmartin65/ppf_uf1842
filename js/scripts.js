/*!
* Start Bootstrap - Heroic Features v5.0.6 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Obtener referencia al botón y a la ventana modal
// var modalBtn = document.getElementsByClassName("openModalBtn");
var modalBtn = document.getElementById('openModalBtn');
var modal = document.getElementById('modal');
var submitBtn = document.getElementById('submit');
var emailInput = document.getElementById('email');
var inter = document.getElementsByClassName('interes')

// Obtener referencia al elemento de cierre de la ventana modal
var closeBtn = document.getElementsByClassName('close')[0];

// Función para abrir la ventana modal
modalBtn.onclick = function() {
    modal.style.display = 'block';
}

// Función para abrir la ventana modal
inter.onclick = function() {
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

// Función para volver al principio de la página
function volverArriba() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
}

// Mostrar u ocultar el botón según la posición de desplazamiento
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnVolverArriba").style.display = "block";
} else {
    document.getElementById("btnVolverArriba").style.display = "none";
}
}

document.addEventListener('DOMContentLoaded', function() {
    // Encuentra el formulario por su ID
    var formulario = document.getElementById('form1');

    // Agrega un controlador de eventos para el evento 'submit' del formulario
    formulario.addEventListener('submit', function(event) {
        // Evita que el formulario se envíe de manera predeterminada
        event.preventDefault();

        // Envía el formulario
        enviarFormulario();

        // Borrar formulario
        borrarFormulario();

        // Mensaje éxito
        alert("Datos enviados con éxito!");
    });

    // Función para enviar el formulario
    function enviarFormulario() {
        // Obtiene los datos del formulario
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('form-email').value;
        var telefono = document.getElementById('telefono').value;

        
        // Aquí puedes hacer lo que quieras con los datos, como enviarlos a un servidor usando AJAX
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Telefono:', telefono);
        
    }

    function borrarFormulario() {
        // Encuentra los elementos de entrada del formulario y establece su valor en una cadena vacía
        document.getElementById('nombre').value = '';
        document.getElementById('form-email').value = '';
        document.getElementById('telefono').value = '';
        
    }

});