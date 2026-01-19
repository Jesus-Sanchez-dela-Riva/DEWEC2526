const uno = document.getElementById("uno")
const dos = document.getElementById("dos")
const tres = document.getElementById("tres")
const cuatro = document.getElementById("cuatro")
const cinco = document.getElementById("cinco")
const izq = document.getElementById("Izquierda")
const arb = document.getElementById("Arriba")
function generar(){
  izq.value=Math.floor(Math.random()*1000)
  arb.value=Math.floor(Math.random()*500)
}
function mover(){    
  uno.style.marginLeft=izq.value+"px";
  uno.style.marginTop=arb.value+"px";
  dos.style.marginLeft=izq.value+"px";
  dos.style.marginTop=arb.value+"px";
  tres.style.marginLeft=izq.value+"px";
  tres.style.marginTop=arb.value+"px";
  cuatro.style.marginLeft=izq.value+"px";
  cuatro.style.marginTop=arb.value+"px";
  cinco.style.marginLeft=izq.value+"px";
  cinco.style.marginTop=arb.value+"px";
    
}
uno.style.background="url('pelota.png')"
dos.style.background="url('pelota.png')"
tres.style.background="url('pelota.png')"
cuatro.style.background="url('pelota.png')"
cinco.style.background="url('pelota.png')"