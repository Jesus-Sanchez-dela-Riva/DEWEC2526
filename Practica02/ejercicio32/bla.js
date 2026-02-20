const padre=document.getElementById("padre")
const insertar=document.getElementById("insertar")
const salida=document.getElementById("salida")
const moteros=[]

let escribir= document.createElement("input")
escribir.setAttribute("id", "escribir")
insertar.appendChild(escribir)

let btnAnadir= document.createElement("button")
btnAnadir.innerHTML="Añadir piloto"
insertar.appendChild(btnAnadir)
btnAnadir.addEventListener("click", anadir)

let btnEliminar= document.createElement("button")
btnEliminar.innerHTML="Eliminar piloto"
insertar.appendChild(btnEliminar)
btnEliminar.addEventListener("click", eliminar)

let btnAnadirPrincipio= document.createElement("button")
btnAnadirPrincipio.innerHTML="Añadir primer piloto"
insertar.appendChild(btnAnadirPrincipio)
btnAnadirPrincipio.addEventListener("click", anadirDelante)

let btnEliminarPrincipio= document.createElement("button")
btnEliminarPrincipio.innerHTML="Eliminar primer piloto"
insertar.appendChild(btnEliminarPrincipio)
btnEliminarPrincipio.addEventListener("click", eliminarDelante)

let btnListar= document.createElement("button")
btnListar.innerHTML="Listar pilotos"
insertar.appendChild(btnListar)
btnListar.addEventListener("click", listar)

let btnOrdenar= document.createElement("button")
btnOrdenar.innerHTML="Ordenar"
insertar.appendChild(btnOrdenar)
btnOrdenar.addEventListener("click", ordenar)

let btnLimpiar= document.createElement("button")
btnLimpiar.innerHTML="Limpiar Lista"
insertar.appendChild(btnLimpiar)
btnLimpiar.addEventListener("click", limpiar)

function anadir(){
    moteros.push(escribir.value)
    listar()
    escribir.value=""
}

function eliminar(){
    moteros.pop()
    listar()
}

function anadirDelante(){
    moteros.unshift(escribir.value)
    listar()
    escribir.value=""
}

function eliminarDelante(){
    moteros.shift()
    listar()
}

function listar(){
    salida.innerHTML=""
    for(let i=0; i<moteros.length; i++){
        salida.innerHTML+=moteros[i]+" - "
    }
}

function ordenar(){
    moteros.sort()
    listar()
}

function limpiar(){
    salida.innerHTML=""
}