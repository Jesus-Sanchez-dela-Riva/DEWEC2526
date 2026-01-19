/*document.addEventListener("keydown", manejaTecla)

function manejaTecla(e){
    //console.log(e)
    console.log(e.keyCode)
}**/

const uno=document.getElementById("target")

uno.addEventListener("click", muestraInfo)

function muestraInfo(e){
    //console.log(e)
    console.log("Has hecho click en el punto ("+e.clientX+", "+e.clientY+")")
    console.log("Has hecho click "+e.key)
}
