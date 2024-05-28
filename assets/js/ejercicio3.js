const resultadoElement = document.querySelector(".resultado");
const valor1Element = document.getElementById("valor1");
const valor2Element = document.getElementById("valor2");

document.getElementById("btn-sumar").addEventListener("click", function () {
    const valor1 = parseFloat(valor1Element.value) || 0;
    const valor2 = parseFloat(valor2Element.value) || 0;
    const resultado = valor1 + valor2;
    resultadoElement.textContent = resultado;
});

document.getElementById("btn-restar").addEventListener("click", function () {
    const valor1 = parseFloat(valor1Element.value) || 0;
    const valor2 = parseFloat(valor2Element.value) || 0;
    const resultado = Math.max(valor1 - valor2, 0);
    resultadoElement.textContent = resultado;
});