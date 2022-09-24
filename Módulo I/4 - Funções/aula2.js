function nomeCompleto(nome, sobrenome) {
    return ('Meu nome completo é ' + nome + ' ' + sobrenome);
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(nomeCompleto('Natália', 'Tolentino') + ' e sou maior de idade!');
    } else {
        console.log(nomeCompleto('Natália', 'Tolentino') + ' e não é maior de idade');
    }
}


verificarIdade(17); 