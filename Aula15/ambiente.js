// let é o mesmo que var, só que é forma mais moderna de selecionar uma variável.
let num = [5, 8, 3, 9, 4]
num.sort()//sort() organiza as posições dos elementos em uma variável.
num.push(6)// O push adciona um elemento que não tava antes na variável, nesse caso sendo 6 o ultimo elemento.

console.log(num)
console.log(`O valor tem ${num.length} posições `)
// num.length diz ao js pra mostrar o comprimento da variavel.
console.log(`O primeiro valor do vetor é ${num[0]}`) // esse num[0] ta dizendo pra mopstrar o valor 5, que é a "chave" zero.

/* 
Na saída do dados, vai dizer que o valor tem 6 posições e que o valor do primeiro vetor é 3. Isso ta acontecendo porque o .sort() ta organizando os elementos por ordem e o .push() tá adicionando mais um elemento com o valor 6.
*/