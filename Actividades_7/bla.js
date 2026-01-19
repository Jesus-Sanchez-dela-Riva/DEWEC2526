/*alert("Hola mundo");
confirm("hola mundo");
prompt("hola mundo");
console.log("Hola buenos dias");
alert("Hola"+nombre);
console.log("Tu edad es: "+edad);
var edad=prompt("¿Cuantos años tienes?");
var nombre=prompt("¿Como te llamas?");
console.log("Hola "+nombre+" tienes: "+edad+" años");
var futbolista=prompt("¿Tu futbolista TOP?");
console.log(futbolista);*/

/*var mivariable="profeluis";
mivariable=confirm("Estas de acuerdo");
console.log(mivariable);*/

function cambiarparrafo(){
    var parrafito_js=document.getElementById('parrafo2');
    parrafito_js.style.color="blue";
    parrafito_js.style.backgroundColor="yellow";
    parrafito_js.style.padding="5em";
    parrafito_js.style.fontSize="2em";
}

var mivariable=prompt("Trump vs Sanchez vs Sarkozy");
var guardado=("Yo soy amigo de ");
function guardar(){
    var guardado=document.getElementById('parrafo');
    guardado.innerHTML=guardado+mivariable;
}