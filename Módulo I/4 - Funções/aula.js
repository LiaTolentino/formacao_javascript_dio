function soma(a, b) {
    console.log('A soma entre A e B é: ' + (a + b));
}

function subtracao(a, b) {
    console.log('A subtração entre A e B é: ' + (a - b));
}

function divisao(a, b) {
    console.log('A divisão entre A e B é: ' + (a / b));
}

function multiplicacao(a, b) {
    console.log('A multiplicação entre A e B é: ' + (a * b));
}

function quadrado(valor) {
    return valor * valor;
}

function incrementarJuros(valor, percentualJuros) {
    return (1 + (percentualJuros / 100)) * valor;
}

// A função abaixo vai retornar a função acima com a aparência e detalhes que quero

function valorFinal(JUROS_CALCULADOS){
    return ('O valor de ' + valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ' mais ' + percentualJuros + '% de juros é igual a ' + JUROS_CALCULADOS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
}
// toLocaleString = transformar o valor em moeda;

let valor = 1480;
let percentualJuros = 45;
const JUROS_CALCULADOS = incrementarJuros(valor, percentualJuros);

soma(5, 9);
subtracao(9578, 554);
divisao(15, 3);
multiplicacao(51, 16);
console.log(quadrado(10));

console.log(valorFinal(JUROS_CALCULADOS));