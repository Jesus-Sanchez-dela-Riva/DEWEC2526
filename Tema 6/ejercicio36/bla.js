class Moto{
    constructor(a,m,p){
        this.marca=a
        this.modelo=m
        this.peso=p
    }
    echarGasolina(gasolina){
        this.peso+=gasolina
        actualizarDom()
    }

    mover(){
        const limite = window.innerWidth - 300
        if(posicion >= limite){
            posicion = 50
        }else{
            posicion += 100
        }

        moto.style.left=posicion +"px"
    }
}

const ktm=new Moto("Ktm", "Duke", 150)
const info=document.getElementById("info")
const moto=document.getElementById("moto")
let posicion = 50

function actualizarDom(){
    info.innerHTML=`Moto: ${ktm.marca} ${ktm.modelo} | Peso: ${ktm.peso}kg`
}

actualizarDom()

document.addEventListener("keydown", (e)=>{
    if(e.key.toLowerCase() == "g"){
        ktm.echarGasolina(10)
    }

    if(e.key.toLowerCase() == "m"){
        ktm.mover()
    }
})