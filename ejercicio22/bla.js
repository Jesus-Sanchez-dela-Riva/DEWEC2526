const folio = document.getElementById("folio")
const borrar = document.getElementById("borrar")
borrar.addEventListener("click", limpiar)
let activo=true
document.getElementById("des").addEventListener("click", ()=>{
    activo=false})
document.getElementById("act").addEventListener("click", ()=>{
    activo=true})
document.addEventListener("keydown", (e)=>{
    if(activo){
        if(e.key=="Enter"){
            folio.innerHTML+="<br>";
        }else if(e.key=="CapsLock"){
            folio.value=folio.value.toUpperCase();
        }else if(e.key=="Alt"||e.key=="Control"||e.key=="Shift"||e.key=="AltGraph"||e.key=="ArrowUp"||
            e.key=="ArrowDown"||e.key=="ArrowLeft"||e.key=="ArrowRight"){
            folio.innerHTML+=""
        }else if(e.key=="Backspace"){
            let letraActual=folio.textContent
            folio.textContent=letraActual.substring(0,letraActual.length-1)
            folio.innerHTML=folio.textContent
        }else{
            folio.innerHTML+=e.key
        }
    }else{
        alert("Has desactivado el teclado, no te asustes")
    }
})

function limpiar(){
    folio.innerHTML=" "
}
