const resultado=document.getElementById("resultado")
let vehiculo=document.getElementById("vehiculo_select")
function piensaEnVerde(){
    resultado.style.background="green"
}
function muestraVehiculo(){
    if(vehiculo=="coche"){
        resultado.style.background="url('coche.png')"
    }else if(vehiculo=="moto"){
        resultado.style.background="url('moto.png')"
    }else{
        resultado.style.background="url('camion.png')"
    }
}