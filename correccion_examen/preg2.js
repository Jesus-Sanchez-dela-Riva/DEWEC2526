const resultado=document.getElementById("resultado")
let vehiculo=document.getElementById("vehiculo_select")
function piensaEnVerde(){
    resultado.style.backgroundColor="green"
}
function muestraVehiculo(){
    if(vehiculo.value=="coche"){
        resultado.style.backgroundImage="url('coche.png')"
    }else if(vehiculo.value=="moto"){
        resultado.style.backgroundImage="url('moto.png')"
    }else if(vehiculo.value=="camion"){
        resultado.style.backgroundImage="url('camion.png')"
    }
}