var dado1;
var dado2;
var suma;
var lanzamientos = 0;

const tiradas = [0,0,0,0,0,0,0,0,0,0,0];

for (let index = 0; index < 36000; index++) {
    lanzarDados();
    lanzamientos++;
    document.getElementById("lanzamientos").innerHTML = lanzamientos;
    suma = dado1 + dado2;
    sumarTiradas();
}

function lanzarDados() {
    var min = 1;
    var max = 6;

    min = Math.ceil(min);
    max = Math.floor(max);

    dado1 = Math.floor(Math.random() * (max - min + 1) + min);
    dado2 = Math.floor(Math.random() * (max - min + 1) + min);
}

function sumarTiradas() {
    switch (suma) {
        case 2:
            tiradas[0]++;
            document.getElementById("r2").innerHTML = tiradas[0];
            break;
        case 3:
            tiradas[1]++;
            document.getElementById("r3").innerHTML  = tiradas[1];
            break;
        case 4:
            tiradas[2]++;
            document.getElementById("r4").innerHTML = tiradas[2];
            break;
        case 5:
            tiradas[3]++;
            document.getElementById("r5").innerHTML = tiradas[3];
            break;
        case 6:
            tiradas[4]++;
            document.getElementById("r6").innerHTML = tiradas[4];
            break;
        case 7:
            tiradas[5]++;
            document.getElementById("r7").innerHTML = tiradas[5];
            break;
        case 8:
            tiradas[6]++;
            document.getElementById("r8").innerHTML = tiradas[6];
            break;
        case 9:
            tiradas[7]++;
            document.getElementById("r9").innerHTML = tiradas[7];
            break;
        case 10:
            tiradas[8]++;
            document.getElementById("r10").innerHTML = tiradas[8];
            break;
        case 11:
            tiradas[9]++;
            document.getElementById("r11").innerHTML = tiradas[9];
            break;
        case 12:
            tiradas[10]++;
            document.getElementById("r12").innerHTML = tiradas[10];
            break;

        default:
            break;
    }
}