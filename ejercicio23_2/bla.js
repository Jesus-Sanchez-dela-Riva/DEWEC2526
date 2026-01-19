const rojo=document.getElementById("rojo")
const amarillo=document.getElementById("amarillo")
const verde=document.getElementById("verde")
const play=document.getElementById("play")
const pause=document.getElementById("pause")
const reset=document.getElementById("reset")

let estado="rojo"
let intervalo=null

play.addEventListener("click", iniciar)
pause.addEventListener("click", parar)
reset.addEventListener("click", resetear)

function iniciar(){
    if(intervalo!=null){
        return
    }
    encenderRojo()
}

function parar(){
    clearTimeout(intervalo)
    intervalo=null
}

function resetear(){
    parar();
    apagarTodo();
    encenderRojo();
}

function encenderRojo(){
    apagarTodo()
    rojo.style.background="red"
    intervalo=setTimeout(encenderVerde, 3000)
}

function encenderVerde(){
    apagarTodo()
    verde.style.background="green"
    estado="verde"
    intervalo=setTimeout(encenderAmarillo, 3000)
}

function encenderAmarillo(){
    apagarTodo()
    amarillo.style.background="yellow"
    estado="amarillo"
    intervalo=setTimeout(encenderRojo, 1500)
}

function apagarTodo(){
    rojo.style.background="#555"
    amarillo.style.background="#555"
    verde.style.background="#555"
}