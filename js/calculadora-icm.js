const formulario = document.querySelector('#formulario');
console.log(formulario)
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const inputpeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputpeso.value)
    const altura = Number(inputAltura.value)

    const imc = calcularImc(peso, altura);
    const classficacao = tabelaImc(imc)  
    mostrarResultado(classficacao)
})

function calcularImc(peso, altura){
    let imc = (peso / altura ** 2);
    return imc.toFixed(2);
}

function mostrarResultado(msg){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = msg;
}


function tabelaImc(imc){
    const classficacao = ['abaixo do peso', 'peso normal', 'sobrepeso','obesidade grau 1','obesidade grau 2','obesidade grau 3']
    if(imc >= 39.9) return classficacao[5];
    if(imc >= 34.9) return classficacao[4];
    if(imc >= 29.9) return classficacao[3];
    if(imc >= 24.9) return classficacao[2];
    if(imc >= 18.5) return classficacao[1];
    if(imc < 18.5) return classficacao[0];
}