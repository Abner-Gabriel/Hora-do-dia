function carregar () {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date
    //var hora= data.getHours()
    var hora = 9
    var hora = data.getHours()
    msg.innerHTML =`Agora são ${hora} horas`
        if (hora >= 0 && hora < 12){
            //bom diaaaaaaaaaaaaaaaaaa    
        img.src = 'fotomanha.png'
        document.body.style.background= '#637093'
        }
         else if  (hora >= 12 && hora <= 18) {
            //boa tardeeeeeee
            img.src= 'fototarde.png'
            document.body.style.background= '#d03f26'
        } 
        
        else {
            //boa noiteeeeeeeeeee
            img.src = 'fotonoite.png'
            document.body.style.background= '#5089b5'
        }
}

