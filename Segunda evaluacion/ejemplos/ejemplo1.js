const target=document.getElementById("target")
let contador=document.getElementById("contador")
target.addEventListener("mouseover", piensaenverde)
let suma=0;
contador.innerHTML=`Has entrado ${suma} veces`
function piensaenverde(){
    console.log(++suma)
    //contador.innerHTML="Has entrado "+suma+" veces"
    contador.innerHTML=`Has entrado ${suma} veces`
}