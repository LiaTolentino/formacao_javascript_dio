/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:

    1. Preço do etanol;
    2. Preço da gasolina;
    3. O tipo de combustível que está no seu carro;
    4. Gasto médio de comustível do carro por KM;
    5. Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem */

const PRECO_ETANOL = 5.7;
const PRECO_GASOLINA = 7.4;
let tipoCombustivel = 'Etanol';
const CONSUMO_KMLITRO = 16;
let distanciaKm = 100;

if (tipoCombustivel === 'Etanol'){
    console.log('O valor gasto com Etanol na viagem será de ' + ((distanciaKm/CONSUMO_KMLITRO)*PRECO_ETANOL).toFixed(2) + ' reais');
}else{
    console.log('O valor gasto com Gasolina na viagem será de ' + ((distanciaKm/CONSUMO_KMLITRO)*PRECO_GASOLINA).toFixed(2) + ' reais');
} 