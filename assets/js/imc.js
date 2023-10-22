

function calcularIMC() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value / 100;
    var imc = peso / (altura * altura);
    document.getElementById('resultado').value = imc.toFixed(2);
}