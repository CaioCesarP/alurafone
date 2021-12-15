const inputTel = document.querySelector('input[type="tel"]')
const inputLimpar = document.querySelector('#limpar');
const inputLigar = document.querySelector('#ligar');

const listaDeTeclado = document.querySelectorAll('input[type="button"]');

for (var i = 0; i < listaDeTeclado.length; i++) {
    
    const tecla = listaDeTeclado[i];

    tecla.onclick = function() {
        inputTel.value = inputTel.value + tecla.value;
    }

    inputLimpar.onclick = function() {
        inputTel.value = "";
    }

    inputLigar.onclick = function() {
        if(inputTel.value.length < 3) {
            alert("Informe um número antes de efetuar a chamada!");
        } else {
            alert("Chamanda sendo encaminhada!");
        }
        inputTel.value = "";
    }

}