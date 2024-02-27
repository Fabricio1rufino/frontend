const formulario = document.querySelector('#formulario');
console.log(formulario)
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const inputpeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputpeso.value)
    const altura = Number(inputAltura.value)

    const imc = calcularImc(peso, altura)

    console.log(imc)
})

function calcularImc(peso, altura){
    let imc = (peso / altura ** 2);
    return imc.toFixed(2);
}