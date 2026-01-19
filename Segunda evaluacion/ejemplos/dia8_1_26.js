let padre=document.getElementById("padre")

let hijo1=document.createElement("div")
hijo1.innerHTML="paco paco"
padre.appendChild(hijo1)

let hijo2=document.createElement("div")
hijo2.className="circulo"
hijo2.innerHTML="O"
padre.appendChild(hijo2)

let hijo3=document.createElement("ul")
hijo3.innerHTML="Caballeros del Zodiaco"
let nieto1=document.createElement("li")
nieto1.innerHTML="Seiya"
let nieto2=document.createElement("li")
nieto2.innerHTML="Sergiv"
padre.appendChild(hijo3)
hijo3.appendChild(nieto1)
hijo3.appendChild(nieto2)

let hijo5=document.createElement("div")
hijo5.className="cuadrado"
padre.appendChild(hijo5)

let crear=document.createElement("input")
crear.setAttribute("type", "button")
crear.setAttribute("value", "crear hijo")
crear.setAttribute("id", "madurar")
crear.setAttribute("class", "circulo")
crear.addEventListener("click", crearHijo)
let hijo22=document.createElement("div")
function crearHijo(){
    hijo22.className="circuloRojo"
    hijo22.innerHTML="O"
    padre.appendChild(hijo22)
}
padre.appendChild(crear)

let cain=document.createElement("input")
cain.setAttribute("type", "button")
cain.setAttribute("value", "matar a hijo")
cain.setAttribute("id", "maduro")
cain.setAttribute("class", "circulo")
cain.addEventListener("click", matarHijo)
function matarHijo(){
    padre.removeChild(hijo22)
}
padre.appendChild(cain)