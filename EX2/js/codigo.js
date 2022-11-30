// --------------------------------FECHA-------------------------------------

let redate = /^\d{2}\/\d{2}\/\d{4}$/;

escribirFecha();

function comprobarFecha() {
    var fecha = document.getElementById("fecha").value;

    if (fecha.match(redate) === null) {
        document.getElementById("vfecha").innerHTML = "Fecha no válida";
    } else {
        document.getElementById("vfecha").innerHTML = "Fecha válida";
    }
}

//--------------------------------EMAIL------------------------------------

let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function comprobarEmail(){
    var email = document.getElementById("email").value;
    var a = email.toLowerCase().match(re);

    if (a == null) {
        document.getElementById("verificacion").innerHTML = "Email no válido";
    } else {
        document.getElementById("verificacion").innerHTML = "Email válido";
    }
}

//--------------------------REEMPLAZO--------------------------

function escapeHTML(text) {
    var replacements = [["&", "&amp;"], ["\"", "&quot;"], ["<", "&lt;"], [">", "&gt;"]];

    forEach(replacements, function(replace) {
        text = text.replace(replace[0], replace[1]);
    });
    return text;
}

function escapeHTML2(){
    var text = document.getElementById("texto").value;
    const rep = / /g;
    var m;
}

//-----------------------------------INVERSION-----------------------------------------

let str = "John Smith";

document.getElementById("inversion").innerHTML = str.replace(/(john) (smith)/i, '$2, $1');

