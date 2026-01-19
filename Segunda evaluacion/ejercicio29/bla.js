const caja = document.getElementById("caja");
caja.style.border = "2px solid red";

const textos = document.getElementsByClassName("texto");
textos[0].style.color = "blue";

const items = document.getElementsByTagName("li");
items[1].style.fontWeight = "bold";

const boton = document.querySelector(".btn");
boton.disabled = true;

const cajas = document.querySelectorAll(".caja");
cajas.forEach(caja => {
  caja.style.backgroundColor = "yellow";
});

const contenedor = document.getElementById("contenedor");

// Hijos
console.log(contenedor.children);

// Primer hijo
console.log(contenedor.firstElementChild);

// Padre
console.log(contenedor.parentElement);