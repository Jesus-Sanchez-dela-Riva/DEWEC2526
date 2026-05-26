const jugador = {
    nombre: "Mario",
    vida: 100,

    bajaVida() {
        if(this.vida > 0){
            this.vida-=20
            if(this.vida < 0){
                this.vida=0
            }
        }
    },

    subeVida(){
        if(this.vida < 100 && this.vida > 0){
            this.vida+=20
            if(this.vida > 100){
                this.vida=100
            }
        }
    }
}
const nombre=document.getElementById("nombre")
const vida=document.getElementById("vida")

function actualizarDom(){
    nombre.innerHTML=`Jugador: ${jugador.nombre}`
    vida.innerHTML=`Vida: ${jugador.vida}`

    const progreso=document.getElementById("progreso")
    progreso.style.width=jugador.vida +"%"

    if(jugador.vida > 60){
        progreso.style.background = "linear-gradient(90deg, #00ff88, #00cc66)";
    }else if(jugador.vida > 30){
        progreso.style.background = "linear-gradient(90deg, #ffcc00, #ff8800)";
    }else{
        progreso.style.background = "linear-gradient(90deg, #ff0000, #990000)";
    }

    if(jugador.vida <=0){
        vida.style.color="red"
        vida.innerHTML+=" -HAS MUERTO"
    } else{
        vida.style.color= "green"
    }
}

actualizarDom()

document.addEventListener("keydown", (e) => {
    if(e.key == "d"){
        jugador.bajaVida()
    }

    if(e.key == "c"){
        jugador.subeVida()
    }

    actualizarDom()
})
