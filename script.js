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

function clickClear() {
  expressao = "";
  atualizaVisor();
}

function atualizaVisor() {
  visor.value = expressao || "0";
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
});

function calcular(expressao) {}
atualizaVisor()