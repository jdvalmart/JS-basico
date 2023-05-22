
// ciclo for & for...of

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

//ejemplo bucle for
for (var i= 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

//ejemplo bucle for...of

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

// ciclo while

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes)
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}