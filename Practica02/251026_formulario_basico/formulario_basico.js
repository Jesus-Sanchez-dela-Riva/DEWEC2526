const uno = document.getElementById('uno')

function muestraDatos(){
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const edad = document.getElementById('edad').value
    const aficiones = document.getElementById('aficiones').value
    const color = document.getElementById('miColor').value
    const tematica = document.getElementById('tematica').value
    
    let mensaje = '';
    mensaje+= nombre;
    mensaje+= ' '
    mensaje+=apellido;
    mensaje+="<br>"
    mensaje+=edad;
    mensaje+="<br>";
    mensaje+=aficiones;

    let imagen="";

    switch(tematica){
        case "Tecnologia":
            imagen = "tecnologia.jpg"
            break;
        case "Motos":
            imagen = "moto.jpg"
            break;
        case "Deportes":
            imagen = "deportes.png"
            break;
        case "Coches":
            imagen = "coche.jpg"
            break;
        default: 
            imagen = ""
            break;
    }
    if(imagen!==""){
        mensaje+=`<img src="${imagen}" style="width:300px; display:block; margin-top:10px;">`;
    }
        
    uno.style.backgroundColor=color
    uno.innerHTML=mensaje

}