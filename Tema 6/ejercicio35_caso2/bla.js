const mario=document.getElementById("mario")

const personaje={
    nombre: "Mario Bross",

    teletransportar(){
        mario.classList.add("teletransporte")

        setTimeout(()=>{
            let x = Math.random() * (window.innerWidth - 200)
            let y = Math.random() * (window.innerHeight - 300)

            mario.style.left = x+"px"
            mario.style.top = y+"px"

            mario.classList.remove("teletransporte")
        }, 200)
    }
}

document.addEventListener("keydown", (e)=>{
    if(e.key.toLowerCase() == "t"){
        personaje.teletransportar()
    }
})