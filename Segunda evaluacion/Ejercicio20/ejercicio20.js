const target=document.getElementById("target")
let contador=document.getElementById("contador")
target.addEventListener("mouseover", piensaenverde)
target.addEventListener("mouseout", cambiar)
let suma=0
contador.innerHTML=`Has entrado ${suma} veces`
function piensaenverde(){
    //contador.innerHTML="Has entrado "+suma+" veces"
    contador.innerHTML=`Has entrado ${suma} veces`
    suma++
    document.body.style.backgroundColor="white"
    if(suma % 10 == 0){
        alert(`Llevas ${suma} veces`)
    }
}

function cambiar(){
    let rojo=Math.floor(Math.random()*256)
    let verde=Math.floor(Math.random()*256)
    let azul=Math.floor(Math.random()*256)
    document.body.style.backgroundColor=`rgb(${rojo},${verde},${azul})`
    contador.innerHTML+="<br>El color es: "+ `rgb(${rojo},${verde},${azul})`
}