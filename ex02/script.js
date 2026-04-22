let valor = parseFloat(prompt("Digite o valor do pedido:"));
let valorFinal = valor;
let mensagem = "";
let brinde = "Nenhum";

if (valor > 50) {
    let temCartao = prompt("Você possui Cartão Fidelidade? (sim/não)").toLowerCase();

    if (temCartao === "sim") {
        valorFinal = valor - (valor * 0.10);
        mensagem = "Você recebeu 10% de desconto!";
    } else {
        brinde = "Cookie de brinde ";
        mensagem = "Você ganhou um cookie de brinde!";
    }
} else {
    mensagem = "Compra abaixo de R$ 50,00, sem benefícios.";
}

// Exibir resultado final
alert(
    mensagem +
    "\nValor final: R$ " + valorFinal.toFixed(2) +
    "\nBrinde: " + brinde
);