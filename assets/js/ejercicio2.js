let caja = document.getElementById("caja");

function cambiarColor(color) {

    caja.style.backgroundColor = color;
}


document.getElementById("btn-1").addEventListener("click", function () {
    cambiarColor("#e53e3e");
});
document.getElementById("btn-2").addEventListener("click", function () {
    cambiarColor("#dd6b20");
});
document.getElementById("btn-3").addEventListener("click", function () {
    cambiarColor("#faf089");
});
document.getElementById("btn-4").addEventListener("click", function () {
    cambiarColor("#48bb78");
});
document.getElementById("btn-5").addEventListener("click", function () {
    cambiarColor("#81e6d9");
});
document.getElementById("btn-6").addEventListener("click", function () {
    cambiarColor("#d53f8c");
});