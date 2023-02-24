function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data= new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'imgs/folhasimg.jpg'
        document.body.style.background = '#448b44'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imgs/ondasimg.jpg'
        window.document.body.style.background = 'lightblue'
    } else {
        img.src = 'imgs/ceuimg.jpg'
        window.document.body.style.background = '#f1753b'
    }
}

// document.body.style.background = '' -> meche com bg da página sem usar diretamente o css
// img.src = '' -> pega a img onde ela foi salva e carrega diretamento com o .js
//