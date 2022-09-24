/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo 
adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto; Opção 1;
- À vista no Dinheiro ou PIX, recebe 15% de desconto; Opção 2;
- Em duas vezes, preço normal de etiqueta sem juros; Opção 3;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; Opção 4; */

const VALOR_PRODUTO = 100;
let meioDePagamento = 2;

if (meioDePagamento === 1) {
    console.log('Seu meio de pagamento é DÉBITO e o valor a ser pago é de ' + (VALOR_PRODUTO * 0.9).toFixed(2) + ' reais');
} else if (meioDePagamento === 2) {
    console.log('Seu meio de pagamento é PIX ou DINHEIRO e o valor a ser pago é de ' + (VALOR_PRODUTO * 0.85).toFixed(2) + ' reais');
} else if (meioDePagamento === 3) {
    console.log('Seu meio de pagamento é PARCELADO EM 2X e o valor a ser pago é de ' + (VALOR_PRODUTO).toFixed(2) + ' reais');
} else {
    console.log('Seu meio de pagamento é PARCELADO EM +2X e o valor a ser pago é de ' + (VALOR_PRODUTO * 1.16).toFixed(2) + ' reais');
}