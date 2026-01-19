const uno=document.getElementById("log1")
let alerta
let destino
let confirmar
function caso1(){
    alerta=alert("GOTCHA")
    uno="has pulsado alert y lo sabes"
}
function prompt(){
    destino=promt("Introduce tu proximo destino")
    uno="El usuario quiere is a "+destino
}
function confirm(){
    confirmar=confirm("Atlas es un ovni?")
    if(confirmar=="Si"){
        uno="El usuario cree que atlas SI es un ovni"
    }else{
        uno="El usuario cree que atlas NO es un ovni"
    }
}
function borrar(){
    uno=null
}