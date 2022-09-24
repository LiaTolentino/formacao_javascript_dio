/* Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre; */

let nota1 = 7;
let nota2 = 6.8;
let nota3 = 9.2;
const MEDIA = (nota1 + nota2 + nota3) / 3;

if (MEDIA > 7) {
    console.log('Sua média é ' + MEDIA.toFixed(2) + ' e você PASSOU DE SEMESTRE!');
} else if (MEDIA >=5 && MEDIA <=7) {
    console.log('Sua média é ' + MEDIA.toFixed(2) + ' e você está em RECUPERAÇÃO!');
} else {
    console.log('Sua média é ' + MEDIA.toFixed(2) + ' e você está REPROVADO!');
}
