 var relogio = new Date()
 var hora = relogio.getHours()
 var minuto = relogio.getMinutes() 
 console.log(`Agora são exatamente ${hora}h${minuto} minutos`)

if (hora < 6) {
    console.log(`Agora são ${hora} horas e ${minuto} minutos, entao boa madru`)
} else if (hora < 12) {
    console.log(`Agora são ${hora} horas e ${minuto} minutos, entao bom dia`)
} else if (hora < 18) {
    console.log(`Agora são ${hora} horas e ${minuto} minutos, entao tarde`)
} else if (hora >= 24) {
    console.log(`Agora são ${hora} horas e ${minuto} minutos, entao madru`)
}