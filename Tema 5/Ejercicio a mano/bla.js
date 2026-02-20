const tareas = ['sacar al perro','entregar practica']
const tarea = document.getElementById("tarea_txt")
const lista = document.getElementById("listaTareas")

document.getElementById("btn1").addEventListener("click",()=>{
    tareas.push(tarea.value)
    imprimirTareas();
})
function imprimirTareas(){
    tareas.forEach(e=>{
        console.log(e)
        const listar = document.createElement("li")
        listar.innerHTML=e
        lista.appendChild(listar)
    })
}