const jugador = {
    nombre: "Mario",
    vida: 100
}
const ataca=document.getElementById("ataca")
console.log(jugador.nombre)
console.log(jugador.vida)
ataca.addEventListener("click", ()=>{
    if(jugador.vida<=0){
        console.log("Has muerto ya")
    }else{
        jugador.vida-=20
        console.log(`Has recibido 20 de daño, te queda esta vida: ${jugador.vida}`)
    }
})
