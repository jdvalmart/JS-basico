// inicializacion de variables

let autos = [];
let cantidadAutos = 0;
let cantRegistrados = 0;


// funcion constructora

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.model = modelo;
    this.annio = annio;
}

// solicitud de datos al usuario

cantidadAutos = prompt("ingrese cuantos autos va a registrar 5 0 10")

//ejecuto el ciclo mientras la cantidad de autos registrados sea menor
// a la cantidad de autos que el usuario desea registrar


while (cantRegistrados<cantidadAutos) {
    let marca =prompt("marca");
    let modelo =prompt("modelo");
    let annio =prompt("annio");

    //paso las variables del scope local a la funcion constructora
    var autoNuevo = new auto(marca, modelo, annio);

    //agrego el auto a mi arreglo de autos
    autos.unshift(autoNuevo);

    //incremento la cantidad de autos registrados en uno
    cantRegistrados++;
    
}

console.log(autos);

