var miDiv=document.getElementById("hola");
var miDiv2=document.getElementById("hello");
miDiv.style.background="url('mario.png')";
document.addEventListener("keydown", mover)
document.addEventListener("keyup", mover)
let derecha=0
let abajo=0
function mover(e){
    if(e.type=="keydown"){
        switch(e.key){
            case "ArrowRight":
                if(derecha>=window.innerWidth-100){
                    derecha=window.innerWidth-120
                }else{
                    derecha+=20
                }
                miDiv.style.left=`${derecha}px`
                break;
            case "ArrowLeft":
                if(derecha<=0){
                    derecha=0
                }else{
                    derecha-=20
                }
                miDiv.style.left=`${derecha}px`
                break;
            case "ArrowDown":
                if(abajo>=window.innerHeight-100){
                    abajo=window.innerHeight-100
                }else{
                    abajo+=20
                }
                miDiv.style.top=`${abajo}px`
                break;
            case "ArrowUp":
                if(abajo<=0){
                    abajo=0
                }else{
                    abajo-=20
                }
                miDiv.style.top=`${abajo}px`
                break;
        }
    }
}