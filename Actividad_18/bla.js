const uno = document.getElementById("uno")
const numero = document.getElementById("numero")

function muestraNumeros(){
    uno.innerHTML=""
    for(let i=0; i<numero.value; i++){
        let numero1 = Math.floor(Math.random()*100)

        uno.innerHTML+=numero1+"<br>"
        console.log(numero1)
    }
}