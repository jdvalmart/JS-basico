var articulos = [
    {nombre: "bici", costo:"3000"},
    {nombre: "Tv", costo:"2500"},
    {nombre: "libro", costo:"320"},
    {nombre: "celular", costo:"10000"},
    {nombre: "Laptop", costo:"20000"},
    {nombre: "Teclado", costo:"500"},
    {nombre: "Audifonos", costo:"1700"},
];

// metodo filter -> sirve para validar si algo es real o falso

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

// metodo map -> ayuda a mapear ciertos articulos

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

//metodo find -> ayuda a encontrar algo dentro del un array generando un nuevo array

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

encuentraArticulo

// metodo foreach -> este metodo no genera un nuevo array sino que filtra el mismo array

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

//metodo some -> nos regresa una validacion de true o false y crea un nuevo array

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
});

//metodo push -> nos permite agregar uno o mas elementos al final de un array

let numArray = [1,2,3,4,5]

function newNum() {
    numArray.push(6,7)
    console.log(numArray)
}
newNum

// ejemplo con arrays // el metodo unshift permite ingresar elementos al inicio.


let txtArray = ["Ana", "Juan", "Diego", "Lautaro"]

function addCharaters(){
    txtArray.push("Chris", "Maria")
    txtArray.unshift("Oscar", "Mariana")
    console.log(txtArray)
}

addCharaters()



// con el metodo shift eliminamos el elemento del indice 0 del array

let array = [1,2,3,4,5]
console.log(array)

let shiftArray = array.shift()
console.log(shiftArray)

// con el metodo pop eliminamos el elemento del ultimo indice del array

let darray = [1,2,3,4,5]
console.log(darray)

let deleteArray = darray.pop()
console.log(darray)

