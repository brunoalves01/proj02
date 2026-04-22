let valorCompra = parseFloat(prompt("Digite o valor da compra:"));

let regiao = parseInt(prompt(
    "Escolha a região de entrega:\n" +
    "1 - Sul\n" +
    "2 - Sudeste\n" +
    "3 - Outras"
));

let frete = 0;

// Regra de frete grátis
if (valorCompra > 250) {
    frete = 0;
} else {
    if (regiao === 1) {
        frete = 20;
    } else if (regiao === 2) {
        frete = 10;
    } else if (regiao === 3) {
        frete = 30;
    } else {
        alert("Região inválida!");
    }
}

let total = valorCompra + frete;

alert(
    "Valor da compra: R$ " + valorCompra.toFixed(2) +
    "\nFrete: R$ " + frete.toFixed(2) +
    "\nTotal: R$ " + total.toFixed(2)
);