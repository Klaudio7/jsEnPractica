document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit", function (event) {
        event.preventDefault();

        const nombreField = document.getElementById("nombre");
        const asuntoField = document.getElementById("asunto");
        const mensajeField = document.getElementById("mensaje");

        const nombreErrorField = document.querySelector(".errorNombre");
        const asuntoErrorField = document.querySelector(".errorAsunto");
        const mensajeErrorField = document.querySelector(".errorMensaje");
        const resultadoField = document.querySelector(".resultado");

        limpiarMensajes(nombreErrorField, asuntoErrorField, mensajeErrorField, resultadoField);

        const isNombreValido = validarNombre(nombreField, nombreErrorField);
        const isAsuntoValido = validarAsunto(asuntoField, asuntoErrorField);
        const isMensajeValido = validarMensaje(mensajeField, mensajeErrorField);

        if (isNombreValido && isAsuntoValido && isMensajeValido) {
            mostrarExito(resultadoField);
        }
    });

    function limpiarMensajes(...elements) {
        elements.forEach(element => element.textContent = "");
        elements.forEach(element => element.classList.remove("error", "success"));
    }

    function validarNombre(input, errorElement) {
        const nombreValue = input.value.trim();
        const alfabeto = /^[a-zA-Z\s]+$/;

        if (!alfabeto.test(nombreValue)) {
            errorElement.textContent = "El nombre solo puede contener caracteres alfabéticos";
            errorElement.classList.add("error");
            return false;
        } else {
            errorElement.textContent = "Nombre válido";
            errorElement.classList.add("success");
            return true;
        }
    }

    function validarAsunto(input, errorElement) {
        const asuntoValue = input.value.trim();
        const alfabeto = /^[a-zA-Z\s]+$/;

        if (!alfabeto.test(asuntoValue) || asuntoValue === "") {
            errorElement.textContent = "Por favor, ingrese un asunto";
            errorElement.classList.add("error");
            return false;
        } else {
            errorElement.textContent = "Asunto válido";
            errorElement.classList.add("success");
            return true;
        }
    }

    function validarMensaje(input, errorElement) {
        const mensajeValue = input.value.trim();
        const alfabeto = /^[a-zA-Z\s]+$/;

        if (!alfabeto.test(mensajeValue) || mensajeValue === "") {
            errorElement.textContent = "Por favor, ingrese un mensaje";
            errorElement.classList.add("error");
            return false;
        } else {
            errorElement.textContent = "Mensaje válido";
            errorElement.classList.add("success");
            return true;
        }
    }

    function mostrarExito(element) {
        element.textContent = "Mensaje enviado con éxito !!!";
        element.classList.add("success");
    }
});
