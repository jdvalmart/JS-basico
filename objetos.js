
//ejemplo de objeto
var miAuto = {
    marca: "Toyota",
    modelo: "corolla",
    annio: 2023,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
}

// funcion constructora de objetos

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo1 = new auto("Tesla", "Model X", 2018);
var autoNuevo2 = new auto("Tesla", "Model Y", 2019);

