function verificar() {
    var data = new Date() // pega a hora atual do dispositivo
    var ano = data.getFullYear() // pega o ano atual do dispositivo
    var formAno = document.getElementById('txtano') /*formAno é o ano que o usuário vai colocar no formulário  */ 
    var resultado = document.querySelector('#resultado')

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var formsex = document.getElementsByName('radsex') //formsex -> é pro formulario Masculino/Feminino
        var idade = ano - Number(formAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'foto-criança-m.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-homem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-homem-adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-senhor.jpg')
            }

        } else if (formsex[1].checked)  {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'foto-criança-f.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-mulher.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-mulher-adulta.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-senhora.jpg')
            }
        }
        resultado.innerHTML = `O sexo selecionado foi ${gênero} com idade de ${idade} anos `
        resultado.appendChild(img) /* ta buscando o método creat.Element() pra mostrar a imagem que o método set.Attribute() possue.*/
    }
}

//aula/exercício 15 do Curso JavaScript do Curso em Vídeo