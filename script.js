
const calculo = document.getElementById('calculo');

function imc() {
const nome = document.getElementById('nome').value;
const resultado = document.getElementById('resultado');    
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
    if (nome.value !==''&& altura.value !==''&& peso.value !=='') {
        const calculo = (peso / (altura * altura));
        resultado.textContent = `${calculo}`;  

        if (calculo < 16) {
            alert(`${nome}, você está muito abaixo do peso ideal!`);
        } else if (calculo >= 16 && calculo < 19) {
            alert(`${nome}, você está um pouco abaixo do peso ideal!`);
        } else if (calculo >= 19 && calculo <= 25) {
            alert(`${nome}, você está com peso ideal!`);
        } else if (calculo > 25 && calculo <= 29.9) {
            alert(`${nome}, você está com sobrepeso!`);
        } else if (calculo > 29.9 && calculo <= 34.9) {
            alert(`${nome}, você está com obesidade grau I!`);
        } else if (calculo > 34.9 && calculo <= 39.9) {
            alert(`${nome}, você está com obesidade grau II (severa)!`);
        } else if (calculo > 39.9) {
            alert(`${nome}, você está com obesidade grau III (mórbida)!`);
        }
    } else {
        alert('Preencha todos os campos!');
    }
}

                                      



calcular.addEventListener('click', imc);
   
