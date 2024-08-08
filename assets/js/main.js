const temaEscuro = document.querySelector(".tema-escuro")
const cabecalho = document.querySelector(".cabecalho")
const input = document.querySelector(".input-pesquisa")
const usuario = document.querySelector(".usuario")
const menuListaItem = document.querySelectorAll(".menu-lista-item")
const link = document.querySelectorAll('.link-menu-lista')
const linkMenuLateral = document.querySelectorAll(".link-menu-lateral")
const Main = document.querySelector('.main')
const planosLink = document.querySelectorAll(".link-planos-lista")
const textoConteudo = document.querySelectorAll(".texto-conteudo")


temaEscuro.onclick = function(){

    if (temaEscuro.textContent == "Tema Escuro"){
        document.body.style.backgroundColor = "#282c27"
        temaEscuro.textContent = "Tema Claro" 
        menuListaItem[0].style.backgroundColor = "#282c27"
        menuListaItem[0].style.color = "#FFFFFF"
        menuListaItem[1].style.backgroundColor = "#282c27"
        menuListaItem[2].style.backgroundColor = "#282c27"
        input.style.backgroundColor = "#282c27"
        input.style.color = "#FFFFFF"
        usuario.style.backgroundColor = "#282c27"
        usuario.style.color = "#FFFFFF"
        textoConteudo[0].style.backgroundColor = "#31392f"
        textoConteudo[1].style.backgroundColor = "#31392f"
        textoConteudo[2].style.backgroundColor = "#31392f"
        textoConteudo[3].style.backgroundColor = "#31392f"
        

        Main.style.color = "#FFFFFF"
        
        

        for (let i = 0 ; i < link.length ; i++){
            link[i].style.color = '#FFFFFF'
        }
        for (let j = 0 ; j < linkMenuLateral.length ; j++){
            linkMenuLateral[j].style.color = '#000000'
        }
        for (let k = 0 ; k < planosLink.length ; k++){
            planosLink[k].style.color = '#FFFFFF'
        }


        



    } else {
        document.body.style.backgroundColor = "#e8f8e6"
        temaEscuro.textContent = "Tema Escuro"

        
        menuListaItem[0].style.backgroundColor = "#e8f8e6"
        menuListaItem[1].style.backgroundColor = "#e8f8e6"
        menuListaItem[2].style.backgroundColor = "#e8f8e6"
        
        input.style.backgroundColor = "#e8f8e6"
        input.style.color = "#000000"
        usuario.style.backgroundColor = "#e8f8e6"
        usuario.style.color = "#000000"
        textoConteudo[0].style.backgroundColor = "#bcd1b7"
        textoConteudo[1].style.backgroundColor = "#bcd1b7"
        textoConteudo[2].style.backgroundColor = "#bcd1b7"
        textoConteudo[3].style.backgroundColor = "#bcd1b7"

        Main.style.color = "#000000"

        console.log(linkMenuLateral)
        for (let i = 0 ; i < link.length ; i++){
            link[i].style.color = '#000000'
        }
        for (let k = 0 ; k < planosLink.length ; k++){
            planosLink[k].style.color = '#000000'
        }
        
      
    
    }
}
console.log(temaEscuro)
