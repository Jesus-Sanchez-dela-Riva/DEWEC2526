/*setTimeout( miFuncion, 1000)

function miFuncion(){
    alert();
}*/

setInterval( ()=>{ 
                    let rojo=Math.floor(Math.random()*256)
                    let verde=Math.floor(Math.random()*256)
                    let azul=Math.floor(Math.random()*256)
                    document.body.style.backgroundColor=`rgb(${rojo},${verde},${azul}`
                } , 0.1)

function miFuncion(){
    //alert();
}