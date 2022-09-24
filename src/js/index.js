const btnVoltar = document.getElementById("voltar");
const btnAvancar = document.getElementById("avancar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {

   const cartaoSelecionado = document.querySelector(".selecionado");
   cartaoSelecionado.classList.remove("selecionado")
}

function mostraCartao(indiceCartao) {
   cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {
   if (cartaoAtual === cartoes.length - 1) return

   esconderCartaoSelecionado();

   cartaoAtual++
   mostraCartao(cartaoAtual)

});

btnVoltar.addEventListener("click", function () {
   if (cartaoAtual === 0) return

   //Quado chamo a mesma funcao mais de uma vez, estou dando o mesmo comando para o codigo
   esconderCartaoSelecionado();
   
   cartaoAtual--;
   mostraCartao(cartaoAtual)

   
});

