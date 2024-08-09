const temaEscuro = document.querySelector(".tema-escuro")
const input = document.querySelector(".input-pesquisa")
const usuario = document.querySelector(".usuario")
const Main = document.querySelector('.main')









temaEscuro.onclick = function(){

    if (temaEscuro.textContent == "Tema Escuro"){
        document.body.style.backgroundColor = "#282c27"
        temaEscuro.textContent = "Tema Claro" 
        input.style.backgroundColor = "#282c27"
        input.style.color = "#FFFFFF"
        usuario.style.backgroundColor = "#282c27"
        usuario.style.color = "#FFFFFF"
        Main.style.color = "#FFFFFF"
    
    } else {
        document.body.style.backgroundColor = "#e8f8e6"
        temaEscuro.textContent = "Tema Escuro"
        input.style.backgroundColor = "#e8f8e6"
        input.style.color = "#000000"
        usuario.style.backgroundColor = "#e8f8e6"
        usuario.style.color = "#000000"
        Main.style.color = "#000000"

      
    
    }
}
console.log(temaEscuro)
