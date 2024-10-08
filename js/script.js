//dom
const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco = document.querySelector('#preco')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')

//evento
botao.addEventListener('click', combustivel)

//função
function combustivel(){
    d= Number(distancia.value)
    c= Number(consumo.value)
    p= Number(preco.value)
    valorfinal = (d/c)*p
    resultado.textContent = `O valor para essa viagem será de R$ 
    ${valorfinal.toFixed(2)}`
}