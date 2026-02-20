const boton = document.getElementById("boton")

boton.addEventListener("click",imprimir)

function imprimir(){
    const fecha = document.getElementById("fecha")
    const fecha2 = document.getElementById("fecha1")
    
    let fecha1 = new Date(fecha.value)
    let fecha3 = new Date(fecha2.value)
    console.log(fecha1.getMonth())
    console.log(fecha3.getDay())
}