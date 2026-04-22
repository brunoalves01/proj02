let valor = parseFloat(prompt("Digite o valor do carro:"));

let opcao = parseInt(prompt(
    "Escolha a forma de pagamento:\n" +
    "1 - À vista no PIX (15% de desconto)\n" +
    "2 - Cartão de Crédito (até 24x, 5% de juros)\n" +
    "3 - Financiamento (até 48x, 20% de juros)"
));

let valorFinal, parcelas, valorParcela;

if (opcao === 1) {
    valorFinal = valor - (valor * 0.15);
    alert("Valor final à vista: R$ " + valorFinal.toFixed(2));

} else if (opcao === 2) {
    valorFinal = valor + (valor * 0.05);
    parcelas = parseInt(prompt("Digite o número de parcelas (até 24):"));

    if (parcelas > 0 && parcelas <= 24) {
        valorParcela = valorFinal / parcelas;
        alert(
            "Valor final: R$ " + valorFinal.toFixed(2) +
            "\nValor de cada parcela: R$ " + valorParcela.toFixed(2)
        );
    } else {
        alert("Número de parcelas inválido!");
    }

} else if (opcao === 3) {
    valorFinal = valor + (valor * 0.20);
    parcelas = parseInt(prompt("Digite o número de parcelas (até 48):"));

    if (parcelas > 0 && parcelas <= 48) {
        valorParcela = valorFinal / parcelas;
        alert(
            "Valor final: R$ " + valorFinal.toFixed(2) +
            "\nValor de cada parcela: R$ " + valorParcela.toFixed(2)
        );
    } else {
        alert("Número de parcelas inválido!");
    }

} else {
    alert("Opção inválida!");
}