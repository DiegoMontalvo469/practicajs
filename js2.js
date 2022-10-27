/* Ejemplo arreglo */

let equipos = ["tigres","rayados","america"];

console.log("Tipo de dato",
            typeof equipos);

console.log("Datos",
            equipos);

console.log("Total equipos",
            equipos.length);

console.log("Primer equipo",
            equipos[0]);

console.log("Ultimo equipo",
            equipos[-1]);

console.log("Último",
            equipos[equipos.length-1]);

equipos.push("necaxa");

console.log(equipos);
console.log("ultimo", equipos.pop());


/* Definir un objeto  */
let materias = ["web","conta","costos"];

let grupo52 = {
     "nombre" : "grupo 52",
     "semestre" : 5,
     "carrera" : "LTI",
     "materias" : materias,
};

console.log(grupo52);

console.log("nombre:", grupo52[0]) /* error */
console.log("nombre:", grupo52["nombre"]) /* sí :D */
console.log("nombre:", grupo52.nombre);
console.log("Primer materia:",
             grupo52["materias"][0] );

console.log("Primer materia:",
             grupo52.materias[0] );

grupo52.facultad = "facpya";

console.log(grupo52);

// let carrera = prompt("¿Cuál es tu carrera?")


document.write("<marquee>Hola</marquee>");

document.write(`<ul>
                    <li>LTI</li>
                    <li>LA</li>
                    <li>CP</li>
                    <li>LNI</li>
                </ul>`);

// Ejemplo if

let calif = 90;


if (calif >= 95 && calif <=100) {
    console.log("Excelente :D");
}
else {
    console.log("No excelente D:")
}

// sentencia condicional múltiple switch

let numero = 2

switch (numero) {
    case 1:
        console.log("uno")
        break;
    case 2:
        console.log("dos")
        break;
    case 3:
        console.log("tres")
        break;
    case 4:
        console.log("cuatro")
        break;
    default:
        console.log("error")
        break;
}

// Ciclo for

for(let i=1; i<=100; i++){
   let codigo = "<marquee>" + i + "</marquee>"
   document.write(codigo);
}

for(let i=10;   ; i--){
    document.write(i + "<br>");
}


/* Escribir un programa en js que permita calcular el total a pagar de un empleado. Solicitar el
numero de horas trabajadas y el pago por hora. Pagar las horas extras al triple. Se
consideran las primeras 40 horas como normales. */

let horas = prompt("¿Cuantas horas trabajó ésta semana?");
let sueldo = prompt("¿Cuanto gana por hora?");

if (horas > 40) {
    let horasExtra = horas - 40;
    let sueldoExtra = (horasExtra * sueldo)*3;
    let sueldoTotal = (40 * sueldo) + sueldoExtra;
    let codigo1 = "<p>" + "Su sueldo de esta semana es: " + sueldoTotal + "</p>";
    document.write(codigo1);
}
else {
    let total = horas * sueldo;
    let codigo1 = "<p>" + "Su sueldo de esta semana es: " + total + "</p>";
    document.write(codigo1);
}