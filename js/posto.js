//dom
const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco = document.querySelector('#preco')
const botao = document.querySelector('#botao')
const calcular = document.querySelector('#calcular')

//evento
botao.addEventListener('click',calcular)

//função
function calcular(){
    n1= Number(distancia.value)
    n2= Number(consumo.value)
    n3= Number(preco.value)

    calculo = (n1/n2)*n3

    if(media>=5){
        mensagem = 'Aprovado!'
    }else{
        mensagem = 'Reprovado.'
    }

    resultado.textContent = `A sua média foi ${media.toFixed(1)}, você foi ${mensagem}`
}