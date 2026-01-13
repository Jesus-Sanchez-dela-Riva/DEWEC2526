const messi=document.getElementById("Messi")
const cr7=document.getElementById("CR7")
const modric=document.getElementById("Modric")
const log=document.getElementById("log")
messi.addEventListener("mouseover", lionel)
cr7.addEventListener("mouseout", cambiar)
modric.addEventListener("click", cambia)

function lionel(){
    document.body.style.backgroundImage="url('lio.jpeg')"
    document.body.style.transition="all 10.5s ease"
    log.innerHTML="LO HA GANADO MESSI"
}

function cambiar(){
    document.body.style.backgroundImage="url('cr.jpeg')"
    document.body.style.transition="all 10.5s ease"
    log.innerHTML="LO HA GANADO CR7"
}

function cambia(){
    document.body.style.backgroundImage="url('modric.jpg')"
    document.body.style.transition="all 10.5s ease"
    log.innerHTML="LO HA GANADO MODRIC"
}