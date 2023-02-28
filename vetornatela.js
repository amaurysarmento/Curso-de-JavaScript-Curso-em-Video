let valores = [5, 3, 7, 6, 1, 2]
valores.sort()// organiza os valores

/* estrutura vai começar a ler os elementos a partir do elemento 3, ja que o a variavel "posição" tá mandando ler a partir do indice 1 
sendo que o 5 tem como indice o 0

indice 0 - elemento 5
indice 1 - elemento 3
indice 2 - elemento 7  
*/

// Codigo do percurso pra exibição do vetor, ou modelo tradicional.
for(let posiçao = 1; posiçao < valores.length; posiçao++) {
    console.log(`A posição ${posiçao} tem o valor ${valores[posiçao]}`)
}

console.log('')//apenas pra adionar espaços em branco na exibição do codigo.
console.log(`ESSE TEXTO É APENAS PRA SEPARAR OS EXEMPLOS DE VETORES,
SENDO O TRADICIONAL ACIMA E A FORMA MAIS SIMPLIFICADA ABAIXO. `)
console.log('')//apenas pra adionar espaços em branco na exibição do codigo.

//Modelo mais recente 

for(let posicao in valores) {
console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}

//buscador de valores dos vetores