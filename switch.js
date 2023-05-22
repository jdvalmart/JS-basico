var numero = 1;


switch(numero) {
    case 1:
        console.log("soy uno!");
        break;
    case 10:
        console.log("soy un 10");
        break;
    case 100:
        console.log("soy un100");
        break;
    default: 
        console.log("no soy nada");
    
}


//ejemplo de semaforo

function semaforo(color){
    switch(color){
        case "verde":{
            console.log("sigue!")
            break
        }
        case "amarillo":{
            console.log("pasa con precaucion")
            break
        }
        case "rojo":{
            console.log("debes parar")
            break
        }
        default :{
            console.log("no reconozco ese color")
        }
    }
}

semaforo("verde")

// ejemplo de piedra papel o tijera


var piedra = 1;
var papel = 2;
var tijera = 3;
var usuario;
var maquina;

function jugar(usuario,maquina){
    switch (true) {
        case (usuario == maquina):
                console.log("empate")
                break
        case (usuario == piedra && maquina == papel):
                console.log("sacaste piedra perdiste contra papel")
                break
        case(usuario == piedra && maquina == tijera):
                console.log("sacaste piedra ganaste contra tijera")
                break
        case(usuario == papel && maquina == tijera):
                console.log("sacaste papel perdiste contra tijera")
                break
        case(usuario == papel && maquina == piedra):
                console.log("sacaste papel ganaste contra piedra")
                break
        case(usuario == tijera && maquina == piedra):
                console.log("sacaste tijera perdiste contra piedra")
                break
        case(usuario == tijera && maquina == papel):
                console.log("sacaste tijera ganaste contra papel")
                break
        default:
                console.log("tiren de nuevo")
            break
    }
    };

jugar(piedra,papel)