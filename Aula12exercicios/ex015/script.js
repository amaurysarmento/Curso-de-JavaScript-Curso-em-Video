function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano') 
    var res = document.querySelector('#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'criançam.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'homem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'senhorimg.jpg')
            }

        } else if (fsex[1].checked)  {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
            } else if (idade < 21) {
                //Jovem
            } else if (idade < 50) {
                //Adulto
            } else {
                //Idoso
            }
        }
        res.innerHTML = `O sexo selecionado foi ${gênero} com idade de ${idade} anos `
    }
}