/* Escribir un programa que imprima los horarios en que debe tomar los medicamentos un paciente. Solicitar
al usuario la hora de la toma inicial (0-23) y la frecuencia de la toma diaria (1-12) */

let horaInicio = prompt("¿A qué hora tomó el medicamento?")
let tomaDiaria = prompt("¿Con qué frecuencia toma el medicamento")
let n = 1;

for(let i=horaInicio; i<=23; i++){
    let codigo = "<p>La toma No." + n + "es a la(s): " + i + "hrs</p>";
    document.write(codigo);
    n = n + 1;
}