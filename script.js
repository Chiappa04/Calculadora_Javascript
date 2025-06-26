//Variáveis dos números
let botaoUm = document.querySelector(".botaoum").innerText
let botaoDois = document.querySelector(".botaodois").innerText
let botaoTres = document.querySelector(".botaotres").innerText
let botaoQuatro = document.querySelector(".botaoquatro").innerText
let botaoCinco = document.querySelector(".botaocinco").innerText
let botaoSeis = document.querySelector(".botaoseis").innerText
let botaoSete = document.querySelector(".botaosete").innerText
let botaoOito = document.querySelector(".botaooito").innerText
let botaoNove = document.querySelector(".botaonove").innerText
let botaoZero = document.querySelector(".botaozero").innerText

//Variáveis operações
let botaoAdicao = document.querySelector(".botaomais").innerText
let botaoSubtracao = document.querySelector(".botaomenos").innerText
let botaoMultiplicacao = document.querySelector(".botaomultiplicacao").innerText
let botaoDivisao = document.querySelector(".botaodivisao").innerText
let botaoIgual = document.querySelector(".botaoigual").innerText
let visor = document.querySelector(".visor")

let expressao = '';

function clickClear() {
    expressao = '';
    atualizaVisor()
}

function atualizaVisor() {
    visor.value = expressao || "0"
}

document.querySelector(".botaoigual").addEventListener("click", () => {
    expressao = calcular(expressao)
})

function addClick(seletor, valorbotao, ehOperador = false) {

}

addClick(".botaoum", botaoUm)
addClick(".botaodois", botaoDois)
addClick(".botaotres", botaoTres)
addClick(".botaoquatro", botaoQuatro)
addClick(".botaocinco", botaoCinco)
addClick(".botaoseis", botaoSeis)
addClick(".botaosete", botaoSete)
addClick(".botaooito", botaoOito)
addClick(".botaonove", botaoNove)
addClick(".botaozero", botaoZero)
addClick(".botaomais", botaoAdicao)
addClick(".botaomenos", botaoSubtracao)
addClick(".botaomultiplicacao", botaoMultiplicacao)
addClick(".botaodivisao", botaoDivisao)

function calcular(expressao) {

}