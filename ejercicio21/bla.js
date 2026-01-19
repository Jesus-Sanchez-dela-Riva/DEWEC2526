document.addEventListener("keydown", cambiaColor)
document.addEventListener("keyup", cambiaColor)
document.addEventListener("mousemove",coordenadas)
const audio1=document.getElementById("audio1");
const audio2=document.getElementById("audio2");
const audio3=document.getElementById("audio3");
const audio4=document.getElementById("audio4");
const audio5=document.getElementById("audio5");
const audio6=document.getElementById("audio6");
const a=document.getElementById("a");
const s=document.getElementById("s");
const d=document.getElementById("d");
const z=document.getElementById("z");
const x=document.getElementById("x");
const c=document.getElementById("c");

let coordenadaX = document.getElementById("coordenadaX")
let coordenadaY = document.getElementById("coordenadaY")

function cambiaColor(e){
    if(e.type=="keydown"){
        switch(e.key){
        case "a":   
            a.style.backgroundColor="red"
            audio1.play();
            break;
        case "s":
            s.style.backgroundColor="blue"
            audio2.play();
            break;
        case "d":
            d.style.backgroundColor="yellow"
            audio3.play();
            break;
        case "z":
            z.style.backgroundColor="purple"
            audio4.play();
            break;
        case "x":
            x.style.backgroundColor="pink"
            audio5.play();
            break;
        case "c":
            c.style.backgroundColor="green"
            audio6.play();
            break;
        }
    }
    if(e.type=="keyup"){
        switch(e.key){
        case "a":
            a.style.backgroundColor="white"
            audio1.pause();
            break;
        case "s":
            s.style.backgroundColor="white"
            audio2.pause();
            break;
        case "d":
            d.style.backgroundColor="white"
            audio3.pause();
            break;
        case "z":
            z.style.backgroundColor="white"
            audio4.pause();
            break;
        case "x":
            x.style.backgroundColor="white"
            audio5.pause();
            break;
        case "c":
            c.style.backgroundColor="white"
            audio6.pause();
            break;
        }
    }
}
function coordenadas(e){
    coordenadaX.innerHTML="Coordenadas X:<br>"+e.clientX
    coordenadaY.innerHTML="Coordenadas Y:<br>"+e.clientY
}