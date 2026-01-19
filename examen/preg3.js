const resultado=document.getElementById("result")
let random
function generaRandom(){
    random=Math.floor(Math.random()*10)
    resultado=random
}
function multiplicaPorDos(){
    resultado*=2
}