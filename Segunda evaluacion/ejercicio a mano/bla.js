let padre=document.getElementById("padre")

let hijo1 = document.createElement("div")
let arb=Math.floor(Math.random()*window.innerHeight)
let izq=Math.floor(Math.random()*window.innerWidth)

hijo1.style.marginLeft=izq+"px"
hijo1.style.marginTop=arb+"px"
hijo1.className="mostrar"
padre.appendChild(hijo1)

let boton = document.createElement("input")
boton.setAttribute("id", "maduro")
boton.setAttribute("type", "button")
boton.setAttribute("value", "Cambiar")
boton.addEventListener("click", cambiar)
function cambiar(){
    arb=Math.floor(Math.random()*1000)
    izq=Math.floor(Math.random()*1000)
    hijo1.style.marginLeft=izq+"px"
    hijo1.style.marginTop=arb+"px"
}
padre.appendChild(boton)
