/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo 
adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto; Opção 1;
- À vista no Dinheiro ou PIX, recebe 15% de desconto; Opção 2;
- Em duas vezes, preço normal de etiqueta sem juros; Opção 3;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; Opção 4; */

function tabelaDesconto(valorDoProduto, desconto) {
    return (valorDoProduto - (valorDoProduto * (desconto / 100)));
}

function tabelaAcrescimo(valorDoProduto, juros) {
    return (valorDoProduto * ((valorDoProduto + juros) / 100));
}

function pagamentos() {
    if (formaDePagamento === 1) {
        console.log('Seu meio de pagamento é DÉBITO e o valor a ser pago é ' + tabelaDesconto(valorDoProduto, 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    } else if (formaDePagamento === 2) {
        console.log('Seu meio de pagamento é PIX ou DINHEIRO e o valor a ser pago é ' + tabelaDesconto(valorDoProduto, 15).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    } else if (formaDePagamento === 3) {
        console.log('Seu meio de pagamento é PARCELADO EM 2X e o valor a ser pago é ' + tabelaDesconto(valorDoProduto, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    } else {
        console.log('Seu meio de pagamento é PARCELADO EM MAIS DE 2X e o valor a ser pago é ' + tabelaAcrescimo(valorDoProduto, 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    }
}

let valorDoProduto = 100;
let formaDePagamento = 1;

pagamentos();

valorDoProduto = 500;
formaDePagamento = 3;

pagamentos();

