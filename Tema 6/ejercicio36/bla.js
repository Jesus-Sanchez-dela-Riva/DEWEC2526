class moto{
    constructor(a,m,p){
        this.marca=a
        this.modelo=m
        this.peso=p
        console.log(`Se ha creado una moto de marca ${this.marca} el modelo ${this.modelo} y un peso en vacio ${this.peso}kg`)
    }
    echarGasolina(gasolina){
        this.peso+=gasolina
        console.log(`Al echar ${gasolina}L de gasolina el peso ha subido a ${this.peso}kg`)
    }
}

const ktm=new moto("Ktm", "Duke", 150)
ktm.echarGasolina(15)