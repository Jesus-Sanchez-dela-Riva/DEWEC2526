const hud = document.createElement("div")
hud.setAttribute("id", "hud")

const btnStart=document.createElement("button")
btnStart.innerHTML="Empezar"

const btnPause=document.createElement("button")
btnPause.innerHTML="Pausar"

const btnRestart=document.createElement("button")
btnRestart.innerHTML="Reiniciar"

const marcador=document.createElement("span")
marcador.innerHTML=" Puntos: 0"

hud.appendChild(btnStart)
hud.appendChild(btnPause)
hud.appendChild(btnRestart)
hud.appendChild(marcador)

document.body.appendChild(hud)

const parrafo=document.createElement("p")
parrafo.innerHTML+="Dale a empezar para generar los div para matarlos<br>"
parrafo.innerHTML+="Tienes 30 segundos para matarlos <br>Si a los 30 segundos no lo has matado tienes que regcargar la pagina<br>"
parrafo.innerHTML+="Los botones de pausar y reinicira no funcionan, si les das no hacen nada<br>"
parrafo.innerHTML+="Los divs tienen 20 vidas, si les das las 20 veces los matas"
document.body.appendChild(parrafo)

const juego=document.createElement("div")
juego.id="juego"
document.body.appendChild(juego)

let puntuacion=0
let vidas1=20
let partidaTerminada = false;

function crearSprite1(){
    let arb1=Math.floor(Math.random()*200)
    let izq1=Math.floor(Math.random()*300)
    const sprite1=document.createElement("div")
    sprite1.style.top=arb1+"px"
    sprite1.style.left=izq1+"px"
    sprite1.style.background="red"
    sprite1.className="sprite"
    juego.appendChild(sprite1)
    sprite1.addEventListener("click", ()=>{
        vidas1--
        if(vidas1==0){
            juego.removeChild(sprite1)
            puntuacion++
            marcador.innerHTML=" Puntos: "+puntuacion
        }else{
            puntuacion++
            marcador.innerHTML=" Puntos: "+puntuacion
        }
        if(vidas1==0 && vidas2==0 && !partidaTerminada){
            partidaTerminada = true;
            clearInterval(partidaAcabada);
            alert("HAS GANADO EL JUEGO")
            juego.style.background="url(win.png)"
        }
    })
    let posicion1=izq1
    let direccion1=1
    let posicion2=arb1
    let direccion2=1
    
    sprite1=setInterval(()=>{
        posicion1+=20*direccion1
        sprite1.style.left=posicion1+"px"

        if(posicion1>=340 || posicion1<=0){
            direccion1*=-1
        }
        posicion2+=20*direccion2
        sprite1.style.top=posicion2+"px"

        if(posicion2>=240 || posicion2<=10){
            direccion2*=-1
        }
    } , 1000)
    
}

let vidas2=20
function crearSprite2(){
    let arb2=Math.floor(Math.random()*200)
    let izq2=Math.floor(Math.random()*300)
    const sprite2=document.createElement("div")
    sprite2.style.top=arb2+"px"
    sprite2.style.left=izq2+"px"
    sprite2.style.background="blue"
    sprite2.className="sprite"
    juego.appendChild(sprite2)
    sprite2.addEventListener("click", ()=>{
        vidas2--
        if(vidas2==0){
            juego.removeChild(sprite2)
            puntuacion++
            marcador.innerHTML=" Puntos: "+puntuacion
        }else{
            puntuacion++
            marcador.innerHTML=" Puntos: "+puntuacion
        }
        if(vidas1==0 && vidas2==0 && !partidaTerminada){
            partidaTerminada = true;
            clearInterval(partidaAcabada);
            alert("HAS GANADO EL JUEGO")
            juego.style.background="url(win.png)"
        }
    })

    let posicion1=izq2
    let direccion1=1
    let posicion2=arb2
    let direccion2=1
    sprite2=setInterval(()=>{
        posicion1+=20*direccion1
        sprite2.style.left=posicion1+"px"

        if(posicion1>=300 || posicion1<=0){
            direccion1*=-1
        }
        posicion2+=20*direccion2
        sprite2.style.top=posicion2+"px"

        if(posicion2>=200 || posicion2<=0){
            direccion2*=-1
        }
    } , 1000)
    
}
const partidaAcabada=finPartida()
function finPartida(){
    setInterval(() => {
        if (partidaTerminada) return;

        partidaTerminada = true;

        // Eliminar sprites si existen
        const sprites = document.querySelectorAll(".sprite");
        sprites.forEach(sprite => {
            sprite.remove();
        });

        // Cambiar fondo
        juego.style.backgroundImage = "url('game_over.png')";
        juego.style.backgroundSize = "cover";

        // Parar el intervalo (para que solo pase una vez)
        clearInterval(partidaAcabada);

    }, 30000);
}


btnStart.addEventListener("click", function(){
    setTimeout(crearSprite1, 1000)
    setTimeout(crearSprite2, 3000)
    
})

