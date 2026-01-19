function edad(){
    var asdf = document.getElementById("uno")
    var edad = prompt("cuantos años tienes");
    console.log(edad)

    if(edad>=18){
        asdf.style.backgroundImage="url(vino.jpg)"
    }else if(edad>=12){
        asdf.style.backgroundImage="url(goku.jpg)"
    }else{
        asdf.style.backgroundImage="url(peppa_pig.jpg)"
    }
}