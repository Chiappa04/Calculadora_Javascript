//Variáveis dos números
let botaoUm = document.querySelector(".botaoum").innerText;
let botaoDois = document.querySelector(".botaodois").innerText;
let botaoTres = document.querySelector(".botaotres").innerText;
let botaoQuatro = document.querySelector(".botaoquatro").innerText;
let botaoCinco = document.querySelector(".botaocinco").innerText;
let botaoSeis = document.querySelector(".botaoseis").innerText;
let botaoSete = document.querySelector(".botaosete").innerText;
let botaoOito = document.querySelector(".botaooito").innerText;
let botaoNove = document.querySelector(".botaonove").innerText;
let botaoZero = document.querySelector(".botaozero").innerText;

//Variáveis operações
let botaoAdicao = document.querySelector(".botaomais").innerText;
let botaoSubtracao = document.querySelector(".botaomenos").innerText;
let botaoMultiplicacao = document.querySelector(
  ".botaomultiplicacao"
).innerText;
let botaoDivisao = document.querySelector(".botaodivisao").innerText;
let botaoIgual = document.querySelector(".botaoigual").innerText;
let visor = document.querySelector(".visor");

let expressao = "";

function atualizaVisor() {
  visor.value = expressao || "0";
}

function clickClear() {
  expressao = "";
  atualizaVisor();
}

function addClick(seletor, valorbotao, ehOperador = false) {
  const buttonElement = document.querySelector(seletor);
  if (!buttonElement) return;

  buttonElement.addEventListener("click", () => {
    const ultimoOperador = expressao.slice(-1);
    const operadores = [
      botaoAdicao,
      botaoSubtracao,
      botaoMultiplicacao,
      botaoDivisao,
    ];
    const ultimoCaractereEhOperador = operadores.includes(ultimoOperador);
    if (ehOperador) {
      if (!expressao) return;
      if (ultimoCaractereEhOperador) {
        expressao = expressao.slice(0, -1) + valorbotao;
        atualizaVisor();
        return;
      }
      expressao += valorbotao;
      atualizaVisor();
      return;
    }
    if (expressao === "0") {
      expressao = valorbotao;
      atualizaVisor();
      return;
    }

    expressao += valorbotao;
    atualizaVisor();
  });
}

function calcular(expressao) {
  debugger
  const operadores = [
      botaoAdicao,
      botaoSubtracao,
      botaoMultiplicacao,
      botaoDivisao,
    ];
    const { operador: operadorEncontrado, operadorIndex: indiceOperador } = encontrarPrimeiroOperador(expressao, operadores)
    if(!operadorEncontrado) return expressao

    const operandos = extrairOperandos(expressao, indiceOperador)
    if(!operandos) return 'erro'

    return executarOperacao(operadorEncontrado, operandos.valorA, operandos.valorB)
}

function executarOperacao(operador, valorA, valorB) {
  switch(operador) { //O switch é como se fosse um if, porém mais organizado, ele examina os casos e executa tal
    case botaoAdicao: return(valorA + valorB).toString()
    case botaoSubtracao: return(valorA - valorB).toString()
    case botaoMultiplicacao: return(valorA * valorB).toString()
    case botaoDivisao: return valorB === 0 ? 'erro' : (valorA / valorB).toString() //Tipo um if na mesma linha, porém chama-se operador ternário e é mais simples
    default: return 'erro' //Caso não seja nenhum dos case
  }
}

function encontrarPrimeiroOperador(expressao, operadores) { //Iterar significa percorrer sobre cada item de uma lista
  for (const operadorAtual of operadores) {
    const indiceOperador = expressao.indexOf(operadorAtual)
    if(indiceOperador > 0) return { operador: operadorAtual, operadorIndex: indiceOperador }
  }
  return { operador: null, operadorIndex: -1 } //Index é a posição da lista

}

function extrairOperandos(expressao, indiceOperador) {
  const primeiroOperando = Number(expressao.slice(0, indiceOperador)) //Number serve para transformar a expressão(string) em número
  const segundoOperando = Number(expressao.slice(indiceOperador+1))
  if(isNaN(primeiroOperando) || isNaN(segundoOperando)) return null // NaN = Not a Number
  return { valorA: primeiroOperando, valorB: segundoOperando }
}

addClick(".botaoum", botaoUm);
addClick(".botaodois", botaoDois);
addClick(".botaotres", botaoTres);
addClick(".botaoquatro", botaoQuatro);
addClick(".botaocinco", botaoCinco);
addClick(".botaoseis", botaoSeis);
addClick(".botaosete", botaoSete);
addClick(".botaooito", botaoOito);
addClick(".botaonove", botaoNove);
addClick(".botaozero", botaoZero);
addClick(".botaomais", botaoAdicao, true);
addClick(".botaomenos", botaoSubtracao, true);
addClick(".botaomultiplicacao", botaoMultiplicacao, true);
addClick(".botaodivisao", botaoDivisao, true);

document.querySelector(".botaoigual").addEventListener("click", () => {
  expressao = calcular(expressao);

  atualizaVisor()
});

atualizaVisor()