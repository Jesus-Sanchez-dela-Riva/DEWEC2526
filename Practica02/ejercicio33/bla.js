const tareas=[]
const tarea=document.getElementById("tarea_txt")
const descripcion=document.getElementById("descripcion")
const fecha=document.getElementById("fecha")
const lista=document.getElementById("listaTareas")
const btn=document.getElementById("btn1")

let fecha1=new Date()

btn.addEventListener("click", ()=>{
    let fecha1=new Date()
    tareas.push(`${tarea.value} - ${descripcion.value} - ${fecha1}`)
    imprimirTareas()
})

function imprimirTareas(){
    lista.innerHTML=""
    tareas.forEach((e, i) => {
        const eliminar = document.createElement("input")
        eliminar.type = "button"
        eliminar.value = "Eliminar"

        const li = document.createElement("li")
        li.innerHTML=e
        
        eliminar.addEventListener("click", ()=>{
            tareas.splice(i, 1)
            imprimirTareas()
        })

        li.appendChild(eliminar)
        lista.appendChild(li)
    });
}