const salida=document.getElementById("salida")
const heroe=document.getElementById("heroe")
const villano=document.getElementById("villano")

class Personaje{
    constructor(n,v,p){
        this.nombre=n
        this.vida=v
        this.poder=p
    }

    bajarVida(cantidad){
        this.vida-=cantidad
        if(this.vida<=0){
            salida.innerHTML+=`${this.nombre} ha muerto<br>`
        }else{
            salida.innerHTML+=`A ${this.nombre} le han quitado esta cantidad de vida ${cantidad} la vida que le queda es: ${this.vida}`
        }
    }

    ataque(direccion){
        salida.innerHTML+=`${this.nombre} ataca con ${this.poder.nombre} a ${direccion.nombre}<br>`
        direccion.bajarVida(this.poder.daño)
    }
}

class Heroe extends Personaje{
    constructor(n,v,p,as){
        super(n,v,p)
        this.ataqueEspecial=as
    }

    superAtaque(direccion){
        salida.innerHTML+=`${this.nombre} ataca con ${this.ataqueEspecial.nombre} a ${direccion.nombre}<br>`
        direccion.bajarVida(this.ataqueEspecial.daño)
    }
}

class Villano extends Personaje{
    constructor(n,v,p,as){
        super(n,v,p)
        this.ataqueEspecial=as
    }

    superAtaque(direccion){
        salida.innerHTML+=`${this.nombre} ataca con ${this.ataqueEspecial.nombre} a ${direccion.nombre}<br>`
        direccion.bajarVida(this.ataqueEspecial.daño)
    }
}

const heroes=[
    new Heroe("Spiderman", 100, {nombre: "Telaraña", daño: 10}, {nombre: "Golpe Arácnido", daño: 30}),
    new Heroe("Capitán America", 100, {nombre: "Escudo", daño: 5}, {nombre: "Golpe Supremo", daño: 25}),
    new Heroe("Thor", 100, {nombre: "Rayo", daño: 10}, {nombre: "Martillazo", daño: 25})
]

const villanos=[
    new Villano("Loki", 100, {nombre: "Ilusión", daño: 5}, {nombre: "Engaño Mortal", daño: 25}),
    new Villano("Thanos", 150, {nombre: "Patada Titán", daño: 10}, {nombre: "Chasquido", daño: 30}),
    new Villano("Duende Verde", 100, {nombre: "Rayo", daño: 5}, {nombre: "Explosión Final", daño: 25})
]

let heroeAleatorio=Math.floor(Math.random()*3)
let villanoAleatorio=Math.floor(Math.random()*3)

let jugador=heroes[heroeAleatorio]
let enemigo=villanos[villanoAleatorio]
let turno = "jugador"

function pintarCartas(){
    heroe.innerHTML=`
        <h3>${jugador.nombre}</h3>
        <p>Vida: ${jugador.vida}</p>
        <input type="button" id="normal" value="${jugador.poder.nombre} (${jugador.poder.daño})">
        <input type="button" id="especial" value="${jugador.ataqueEspecial.nombre} (${jugador.ataqueEspecial.daño})">
    `
    villano.innerHTML=`
        <h3>${enemigo.nombre}</h3>
        <p>Vida: ${enemigo.vida}</p>
        <input type="button" value="${enemigo.poder.nombre} (${enemigo.poder.daño})">
        <input type="button" value="${enemigo.ataqueEspecial.nombre} (${enemigo.ataqueEspecial.daño})">
    `

    let normal=document.getElementById("normal")
    let especial=document.getElementById("especial")

    normal.addEventListener("click", atacar)
    especial.addEventListener("click", atacarEspecial)

    let botones = heroe.querySelectorAll("input")

    if(turno!=="jugador"){
        botones.forEach(b => b.disabled=true)
    }else{
        botones.forEach(b => b.disabled=false)
    }
}

function atacar(){
    if(turno==="jugador" && jugador.vida>0 && enemigo.vida>0){
        salida.innerHTML+="<br>"
        jugador.ataque(enemigo)
        pintarCartas()

        if(enemigo.vida>0){
            turno="enemigo"
            setTimeout(turnoEnemigo, 2000)
        }
    }
}

function atacarEspecial(){
    if(turno==="jugador" && jugador.vida>0 && enemigo.vida>0){
        salida.innerHTML+="<br>"
        jugador.superAtaque(enemigo)
        pintarCartas()

        if(enemigo.vida>0){
            turno="enemigo"
            setTimeout(turnoEnemigo, 2000)
        }
    }
}

function turnoEnemigo(){
    if(jugador.vida>0 && enemigo.vida>0){
        salida.innerHTML+="<br>"

        let probabilidad=Math.random()

        if(probabilidad>0.65){
            enemigo.ataque(jugador)
        }else{
            enemigo.superAtaque(jugador)
        }

        if(jugador.vida>0){
            turno="jugador"
        }
        pintarCartas()
    }
}

pintarCartas()