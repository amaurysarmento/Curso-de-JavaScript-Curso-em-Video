//intro à objects

let amigo = {nome: 'Jo',
sexo: 'M',
peso: 85.5,
engordar(p=0) {
    console.log('Engordou')
    this.peso += p;
}}

amigo.engordar(5);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);