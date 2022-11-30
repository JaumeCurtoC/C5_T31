darHora();

var reloj = window.setInterval(function(){
    darHora();
}, 1000);

function darHora() {
    var fecha = new Date();

    document.getElementById("horas").innerHTML = fecha.getHours();
    document.getElementById("minutos").innerHTML = fecha.getMinutes();
    document.getElementById("segundos").innerHTML = fecha.getSeconds();
}