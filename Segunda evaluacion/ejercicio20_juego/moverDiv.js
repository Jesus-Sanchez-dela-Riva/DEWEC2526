var miDiv=document.getElementById("hola");
var miDiv2=document.getElementById("hello");
miDiv.style.background="url('mario.png')";
miDiv2.style.background="url('bowser.png')";
miDiv.addEventListener("mouseover", moverDch)
miDiv2.addEventListener("mouseover", moverDch)
miDiv.addEventListener("mouseout", moverIzq)
miDiv2.addEventListener("mouseout", moverIzq)
miDiv.addEventListener("click", moverAb)
miDiv2.addEventListener("click", moverAb)
miDiv.addEventListener("wheel", moverArb)
miDiv2.addEventListener("wheel", moverArb)
miDiv.addEventListener("drag", volver)
miDiv2.addEventListener("drag", volver)

function moverIzq(){
    miDiv.style.marginLeft="0px";
    miDiv2.style.marginLeft="20px";
}

function moverDch(){
    miDiv.style.marginLeft="1000px";
    miDiv.style.marginLeft="1020px";
}

function moverAb(){
    miDiv.style.marginTop="500px";
    miDiv2.style.marginTop="500px";
}

function moverArb(){
    miDiv.style.marginTop="0px";
    miDiv2.style.marginTop="0px";
}

function volver(){
    miDiv.style.marginTop="100px";
    miDiv.style.marginLeft="100px";
    miDiv2.style.marginTop="100px";
    miDiv2.style.marginLeft="120px";
}