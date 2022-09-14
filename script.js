var numeroSecreto = parseInt(Math.random() * 11);
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou. Parabéns!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 até 10";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "Você errou.<br> Dica: O número secreto é menor que " + chute;
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "Você errou.<br> Dica: O número secreto é maior que " + chute;
  } else {
    elementoResultado.innerHTML = "Você errou";
  }
}