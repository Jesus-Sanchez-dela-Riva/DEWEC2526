const uno=document.getElementById("log1")
let alerta
let destino
let confirmar
function caso1(){
    alert("GOTCHA")
    uno.innerHTML+="has pulsado alert y lo sabes<br>"
}
function caso2(){
    destino=prompt("Introduce tu proximo destino")
    uno.innerHTML+="El usuario quiere is a "+destino+"<br>"
}
function caso3(){
    confirmar=confirm("Atlas es un ovni?")
    if(confirmar){
        uno.innerHTML+="El usuario cree que atlas SI es un ovni<br>"
    }else{
        uno.innerHTML+="El usuario cree que atlas NO es un ovni<br>"
    }
}
function borrar(){
    uno.innerHTML=" "
}