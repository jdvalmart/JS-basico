// condicional if

var edad =18;


if (edad === 18) {
    console.log("puedes votar, sera tu primera votacion");
} else if (edad > 18) {
    console.log("puedes votar");
}else{
    console.log("aun no puedes votar")
}



// ejemplo de else if
//
//
 function calcularDescuento(articulos, precio) {
     var precioFinal

if (articulos <=5) {
    //hasta 5 articulos
     precioFinal = precio * (1 - 0.1)
} else if (articulos > 5 && articulos <= 10) {
    // de 6 a 10m articulos
     precioFinal = precio * (1 - 0.15)
} else {
    // de 10 en adelante
     precioFinal = precio * (1 - 0.2)
}
     return precioFinal

 }
calcularDescuento(4, 10)
calcularDescuento(8, 20)
calcularDescuento(15, 50)




// operador ternario
// condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "si soy un uno" : "no soy un uno";

function esPar(numero){
    return numero%2 === 0 ? "es par" : "no es par"
}

esPar(2)
esPar(3)


// reto piedra papel o tijera
// piedra gana tijera
// tijera gana papel
// papel gana piedra




var piedra = 1;
var papel = 2;
var tijera = 3;
var usuario;
var maquina;

function jugar(usuario,maquina){
    
    if(usuario == maquina){
        console.log("empate");
    }else if(usuario == piedra && maquina == papel){
        console.log("sacaste piedra perdiste contra papel");
    }else if(usuario == piedra && maquina == tijera){
        console.log("sacaste piedra ganaste contra tijera");
    }else if(usuario == papel && maquina == tijera){
        console.log("sacaste papel perdiste contra tijera");
    }else if(usuario == papel && maquina == piedra){
        console.log("sacaste papel ganaste contra piedra");
    }else if(usuario == tijera && maquina == piedra){
        console.log("sacaste tijera perdiste contra piedra");
    }else if (usuario == tijera && maquina == papel){
        console.log("sacaste tijera ganaste contra papel");
    }
};

jugar(piedra,papel)


// ENUNCIADO EJERCICIO 1
// Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:

// En caso afirmativo el usuario responderá si
// En caso contrario responderá no.
// Si el usuario responde si se escribirá por el documento «irás a la cárcel».

// Si el usuario responde no se escribirá por el documento web «irás a casa».

// En cualquier caso en el documento web se escribirá «la documentación por favor».
// escribe un programa que pregunte al usuario si es culpable o no.

var culpable=prompt("eres culpable?")

if (culpable == "si"){
    console.log("iras a la carcel");
}else if (culpable == "no"){
    console.log("iras a casa");
} else {
    console.log("la documentacion por favor")
}

// Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida
// cuanto le costará en función del topping que elija.

// El helado sin topping cuesta 1.90€.
// El topping de oreo cuesta 1€.
// El topping de KitKat cuesta 1.50€.
// El topping de brownie cuesta 0.75€.
// El topping de lacasitos cuesta 0.95€.
// En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla «no tenemos este topping,
// lo sentimos. » y a continuación informar del precio del helado sin ningún topping.
//
// Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno).

var topping = window.prompt("qué topping quieres");
		var precio = 0.00;
		var helado = 1.90;
		var precioFinal = 0.00;

		if(topping=="oreo"){
			precio = 1;
		}else if(topping == "kitkat"){
			precio = 1.50;
		}else if(topping == "brownie"){
			precio = 0.75;
		}else  if(topping == "lacasitos"){
			precio = 0.95;
		}else{
			document.write("no tenemos este topping, lo sentimos. ");
			precio = 0;
		}

		precioFinal = helado + precio;
		document.write("el helado cuesta " + precioFinal + " €");




        export function solution(article) {

            if (article == "computadora") {
                return "con mi computadora puedo programar usando javascript"
            }else if (article == "celular") {
                return "en mi celular puedo aprender usando la app de platzi"
            }else if (article == "cable") {
                return "hay un cable en mi bota"
            }else {
                return "articulo no encontrado"
            }
          }

        
        export function solution(article) {
            if (article == 'computadora') {
              return 'Con mi computadora puedo programar usando JavaScript';
            } else if (article == 'celular') {
              return 'En mi celular puedo aprender usando la app de Platzi'
            } else if (article == 'cable') {
              return '¡Hay un cable en mi bota!'
            } else  {
              return 'Artículo no encontrado'
            }
          }
          

       var lampara = prompt("seleciona una opcion: enciende, desconetada , quemada"); 

       if (lampara == "enciende"){
        console.log("lampara esta buena");
       } else if(lampara == "desconectada"){
        console.log("lampara desenchufada");
       }else if (lampara  == "quemada"){
        console.log("reemplazar el foco");
       }else{
        console.log("comprar una nueva")
       }

       var suma = 100;
       var contador = 0;
       var sumatoria = 0;

       for (contador = 0; contador < suma.length; contador++) {
        sumatoria = suma[contador];
        
       }

       console.log(sumatoria)