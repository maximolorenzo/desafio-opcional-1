let nombre = prompt('Ingrese nombre y apellido');
let nota1 = parseInt (prompt('Ingrese su primera nota'));
let nota2 = parseInt (prompt('Ingrese su segunda nota'));
let nota3 = parseInt (prompt('Ingrese su tercera nota'));

let listaNotas = [nota1,nota2,nota3]

let  sumarNotas= 0

for( let i = 0; i < 3; i++){
    sumarNotas += listaNotas[i]
}
let promedio = sumarNotas/3
if(promedio == 10){
    alert ( nombre + ' ' + "entraste al top 10 te sacaste un: " +promedio +" Felicidades!")
}
 else if( promedio > 6){
    alert  (nombre + ' ' +'estas aprobado con un: ' +promedio)
}else {
    alert  (nombre + ' ' +'no aprobaste te sacaste un: ' +promedio)
}





