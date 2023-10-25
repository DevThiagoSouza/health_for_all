

const acimaPeso = document.querySelector(".alert-danger");
const normal = document.querySelector(".alert-success");
const abaixoPeso = document.querySelector(".alert-warning");

function calcularIMC() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value / 100;
    let imc = parseInt(peso / (altura * altura));
    document.getElementById('resultado').value = imc.toFixed(2);

        if (imc < 18) {
            abaixoPeso.classList.remove("d-none");
            setTimeout(function(){ abaixoPeso.classList.add("d-none"); }, 2000);
        } else if (imc >= 18 && imc < 25) {
            normal.classList.remove("d-none");
            setTimeout(function(){ normal.classList.add("d-none"); }, 2000);
        } else {
            acimaPeso.classList.remove("d-none");
            setTimeout(function(){ acimaPeso.classList.add("d-none"); }, 2000);
        }

    } 



    




