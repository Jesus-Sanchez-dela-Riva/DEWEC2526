const proverbios=[
    "A cada cerdo le llega su San Martín", 
    "Cree el ladrón que todos son de su condición", 
    "De tal palo, tal astilla",
    "Si el rio suena agua lleva",
    "El que no llora no mama",
    "En casa de herrero, cuchara de palo"
]

const fortune=document.createElement("button")
fortune.innerHTML="fortune"
document.body.appendChild(fortune)
fortune.addEventListener("click", proverbioRandom)
const proverbio = document.createElement("p")
document.body.appendChild(proverbio)
function proverbioRandom(){
    let numero=Math.floor(Math.random()*6)
    proverbio.innerHTML=proverbios[numero]
}