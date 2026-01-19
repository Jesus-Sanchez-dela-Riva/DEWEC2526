let padre=document.getElementById("padre")

let hijo1 = document.createElement("div")
let arb1=Math.floor(Math.random()*50)
let izq1=Math.floor(Math.random()*1150)
let arb2=Math.floor(Math.random()*50)
let izq2=Math.floor(Math.random()*1150)
let arb3=Math.floor(Math.random()*50)
let izq3=Math.floor(Math.random()*1150)
let arb4=Math.floor(Math.random()*50)
let izq4=Math.floor(Math.random()*1150)
let arb5=Math.floor(Math.random()*50)
let izq5=Math.floor(Math.random()*1150)

hijo1.style.marginLeft=izq1+"px"
hijo1.style.marginTop=arb1+"px"
hijo1.className="mostrar"
hijo1.style.background="url('mario.png')"
padre.appendChild(hijo1)

let hijo2 = document.createElement("div")
hijo2.style.marginLeft=izq2+"px"
hijo2.style.marginTop=arb2+"px"
hijo2.className="mostrar"
hijo2.style.background="url('bowser.png')"
padre.appendChild(hijo2)

let hijo3 = document.createElement("div")
hijo3.style.marginLeft=izq3+"px"
hijo3.style.marginTop=arb3+"px"
hijo3.className="luigi"
hijo3.style.background="url('luigi.png')"
padre.appendChild(hijo3)

let hijo4 = document.createElement("div")
hijo4.style.marginLeft=izq4+"px"
hijo4.style.marginTop=arb4+"px"
hijo4.className="mostrar"
hijo4.style.background="url('peach.png')"
padre.appendChild(hijo4)

let hijo5 = document.createElement("div")
hijo5.style.marginLeft=izq5+"px"
hijo5.style.marginTop=arb5+"px"
hijo5.className="yoshi"
hijo5.style.background="url('yoshi.png')"
padre.appendChild(hijo5)

let boton = document.createElement("input")
boton.setAttribute("type", "button")
boton.setAttribute("value", "Eliminar")
boton.addEventListener("click", elimina)
function elimina(){
    padre.removeChild(hijo1)
    padre.removeChild(hijo2)
    padre.removeChild(hijo3)
    padre.removeChild(hijo4)
    padre.removeChild(hijo5)
}
padre.appendChild(boton)

let boton1 = document.createElement("input")
boton1.setAttribute("type", "button")
boton1.setAttribute("value", "Crear")
boton1.addEventListener("click", crea)
function crea(){
    arb1=Math.floor(Math.random()*50)
    izq1=Math.floor(Math.random()*1150)
    arb2=Math.floor(Math.random()*50)
    izq2=Math.floor(Math.random()*1150)
    arb3=Math.floor(Math.random()*50)
    izq3=Math.floor(Math.random()*1150)
    arb4=Math.floor(Math.random()*50)
    izq4=Math.floor(Math.random()*1150)
    arb5=Math.floor(Math.random()*50)
    izq5=Math.floor(Math.random()*1150)

    hijo1.style.marginLeft=izq1+"px"
    hijo1.style.marginTop=arb1+"px"
    hijo1.className="mostrar"
    hijo1.style.background="url('mario.png')"
    padre.appendChild(hijo1)

    hijo2.style.marginLeft=izq2+"px"
    hijo2.style.marginTop=arb2+"px"
    hijo2.className="mostrar"
    hijo2.style.background="url('bowser.png')"
    padre.appendChild(hijo2)

    hijo3.style.marginLeft=izq3+"px"
    hijo3.style.marginTop=arb3+"px"
    hijo3.className="luigi"
    hijo3.style.background="url('luigi.png')"
    padre.appendChild(hijo3)

    hijo4.style.marginLeft=izq4+"px"
    hijo4.style.marginTop=arb4+"px"
    hijo4.className="mostrar"
    hijo4.style.background="url('peach.png')"
    padre.appendChild(hijo4)

    hijo5.style.marginLeft=izq5+"px"
    hijo5.style.marginTop=arb5+"px"
    hijo5.className="yoshi"
    hijo5.style.background="url('yoshi.png')"
    padre.appendChild(hijo5)
}
padre.appendChild(boton1)