const resultado=document.getElementById("result")
let random
function generaRandom(){
    random=Math.floor(Math.random()*10)
    resultado.innerHTML=random
}
function multiplicaPorDos(){
    resultado.innerHTML=random*2
}