function parimpar (num) {
    if (num % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

let resposta = parimpar(6)
console.log(resposta)

/*
Ou pode ser escrito direto com o console.log()
console.log(parimpar(6))
*/