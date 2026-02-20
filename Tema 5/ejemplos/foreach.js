const frutas=["fresa", "pera", "uva"]

/*for(let i=0; i<frutas.length; i++){
    console.log(i)
    console.log(frutas[i])
}*/
//frutas.forEach(mifuncion)
/*function mifuncion(){
    console.log('hola')
}*/

/*frutas.forEach(()=>{
    console.log('hola')
})*/

frutas.push("naranja")

/*frutas.forEach(()=>{
    console.log('hola')
})*/

/*frutas.forEach(e=>{
    //console.log(e)
    //console.log(i)
    //console.log(a)
    
})*/

let fecha = new Date()

console.log(fecha.getFullYear())
console.log(fecha.getMonth())
console.log(fecha.getDate())
console.log(fecha.getHours())
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
console.log(fecha.getMilliseconds())
console.log(fecha.getDay())

console.log(fecha.toDateString())

let soloFecha=new Date("2021-11-08")
console.log(soloFecha)