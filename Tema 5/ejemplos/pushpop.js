const compañeros=["Marcos", "Antonio", "Jesus"]
const eliminados=[]
console.log(compañeros.join())

pushear()
mostrar_compañero()

eliminar_compañero()
mostrar_compañero()
mostrar_eliminados()

function mostrar_compañero(){    
    console.log("-------Mostrar Compañeros--------")
    for(let i=0; i<compañeros.length; i++){
        console.log(compañeros[i])
    }
}

function pushear(){
    compañeros.push("Luis")
    compañeros.splice(1, 0, "Nacho")
}

function eliminar_compañero(){
    let eliminar = compañeros.pop()
    console.log("-------Recien Eliminados---------")
    console.log(eliminar)
    eliminados.push(eliminar)
    eliminar=compañeros.shift()
    console.log(eliminar)
    eliminados.unshift(eliminar)
}

function mostrar_eliminados(){
    console.log("-------Mostrar Compañeros Eliminados--------")
    for(let i=0; i<eliminados.length; i++){
        console.log(eliminados[i])
    }
}
