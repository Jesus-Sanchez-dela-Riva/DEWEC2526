const log = document.getElementById("log")
const uno = document.getElementById("numero1")
const dos = document.getElementById("numero2")
const operacion = document.getElementById("operaciones")
const resultado = document.getElementById("resultado")
let frase
let color
const rojo=Math.floor(Math.random()*256)
const verde=Math.floor(Math.random()*256)
const azul=Math.floor(Math.random()*256)

function operar(){
    if(operacion.value=="suma"){
        resultado.value=parseInt(uno.value)+parseInt(dos.value)
        frase="El usuario hizo una "+operacion.value+" de "+uno.value+"+"+dos.value+"="+resultado.value
        color="blue"
    }else if(operacion.value=="resta"){
        resultado.value=uno.value-dos.value
        frase="El usuario hizo una "+operacion.value+" de "+uno.value+"-"+dos.value+"="+resultado.value
        color="red"
    }else if(operacion.value=="multiplicacion"){
        resultado.value=uno.value*dos.value
        frase="El usuario hizo una "+operacion.value+" de "+uno.value+"*"+dos.value+"="+resultado.value
        color="green"
    }else if(operacion.value=="division"){
        if(dos.value!=0 && uno.value!=0){
            resultado.value=uno.value/dos.value
            frase="El usuario hizo una "+operacion.value+" de "+uno.value+"/"+dos.value+"="+resultado.value
            color="violet"
        }else{
            frase="No se puede dividir entre cero, ni cero entre otros"
            color="violet"
        }
        
    }
    log.style.color=color
    log.style.backgroundColor="white"
    log.innerHTML+=frase+"<br>"
    if(resultado.value%2===0){
        document.body.style.backgroundColor=`rgb(${rojo},${verde},${azul}`
    }else{
        document.body.style.backgroundColor="green"
    }
}

function limpiar(){
    log.innerHTML=""
}