document.addEventListener("keydown", manejarTecla)

function manejarTecla(e){
    console.log(e.key)
    if(e.key=="r")
        alert()
    else
        console.warn("No has pulsado la tecla r")
}