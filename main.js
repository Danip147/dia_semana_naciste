//Saber en que año naciste


var anyo = prompt("¿En que año naciste?"); //lo que los usuarios introducen
var mes = prompt("¿En que mes naciste?");
var dia = prompt("¿En que dia naciste?");

var fechaCompleta = (anyo + '/' + mes  + '/' + dia);

//objeto dias
const days = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
}

let birthday = new Date (fechaCompleta);

document.getElementById("dia").innerHTML = (days[birthday.getDay()]);





