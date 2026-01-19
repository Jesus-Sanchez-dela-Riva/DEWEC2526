const uno=document.getElementById("uno")
const boton=document.getElementById("boton")
let numero=5
let intervalo
uno.innerHTML=numero
boton.disabled=true
setTimeout(daleBoton, 3000)
boton.addEventListener("click", cuentaAtras)
function daleBoton(){
    boton.disabled=false
}

function cuentaAtras(){
    boton.disabled=true
    intervalo = setInterval(bajaNumero, 1000)
}

function bajaNumero(){
    uno.innerHTML=numero

    if (numero == 5) {
        uno.style.boxShadow = "0px 0px 10px 3px rgba(219, 25, 86, 0.2)";
    } 
    else if (numero == 4) {
        uno.style.boxShadow = "0px 0px 15px 4px rgba(219, 25, 86, 0.4)";
    } 
    else if (numero == 3) {
        uno.style.boxShadow = "0px 0px 20px 5px rgba(219, 25, 86, 0.6)";
    } 
    else if (numero == 2) {
        uno.style.boxShadow = "0px 0px 30px 6px rgba(219, 25, 86, 0.8)";
    } 
    else if (numero == 1) {
        uno.style.boxShadow = "0px 0px 40px 8px rgba(219, 25, 86, 1)";
    }
    numero--;
    if (numero < 0) {
        clearInterval(intervalo);
    }
}