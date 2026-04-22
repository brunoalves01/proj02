let salario = parseFloat(prompt("Digite o seu salário:"));
let parcela = parseFloat(prompt("Digite o valor da parcela desejada:"));

let limite = salario * 0.30;

if (parcela > limite) {
    alert("Empréstimo Negado: Parcela muito alta");
} else {
    alert("Empréstimo Pré-aprovado");
}