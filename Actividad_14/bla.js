const uno = document.getElementById("uno")
function muestraDatos(){
    const nombre = document.getElementById("nombre")
    const apellido = document.getElementById("apellido")
    const edad = document.getElementById("edad")

    let valorEdad = edad.value

    console.log("La edad es: "+valorEdad)
    console.log("El tipo de la variable valorEdad es: "+typeof(valorEdad))

    console.log("Vamos a sumar 64 a la edad ¿que pasará?")
    valorEdad+=64;
    console.error("La edad tras sumar es: "+valorEdad)
    console.error("pues NO HA SUMADO... HA CONCATENADO")

    valorEdad = edad.value

    console.info("Hay que 'forzar' el tipo de variable")

    let valorEdad2 = parseInt(valorEdad)
    console.log("El tipo de la variable valorEdad2 es: "+typeof(valorEdad2))
    valorEdad2+=64;
    console.error("La edad tras sumar es: "+valorEdad2)

    let mensaje=""
    mensaje+=nombre.value
    mensaje+=" "
    mensaje+=apellido.value

    uno.innerHTML=mensaje
}