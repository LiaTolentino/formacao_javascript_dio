/* Faça um programa que calcule o valor de combustível em uma viagem

Você terá 3 variáveis, sendo elas:

    1. Preço do combustível;
    2. Valor médio do km/l;
    3. Distância em km da viagem;

Imprima no console o valor que será gasto na viagem */

let precoCombustivel  = 5.79;
const CONSUMO_KMLITRO = 14;
let distanciaKm = 100;

const valorGasto = (distanciaKm/CONSUMO_KMLITRO)*precoCombustivel;

console.log('O valor gasto será: ' + (valorGasto.toFixed(2)) + ' reais');