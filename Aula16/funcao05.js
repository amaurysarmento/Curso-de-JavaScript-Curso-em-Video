/*
 Função recursiva
 Recurção acontece quando uma função chama a si própria
*/

function fatorial(numero) {
    if ( numero == 1) {
        return 1 
    } else {
        return numero * fatorial(numero-1)
    }
}

console.log(fatorial(5))

/*
 5! = 5 x 4 x 3 x 2 x 1 
 5! = 5 x 4!

 numero! = numero x (numero -1)!
 1! = 1
*/
