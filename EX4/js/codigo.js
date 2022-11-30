var calc;
var num1;
var num2;
var operacion;

function resultado() {
    calc = document.getElementById("calc").value;
    for (let index = 0; index < calc.length; index++) {
        if(isNaN(calc[index]) && index !=0){
            operacion = calc[index];
            num1 = calc.substring(0, index);
            num2 = calc.substring(index+1);
        }
    }

    switch (operacion) {
        case "+": 
            document.getElementById("calc").value = Number(num1)+Number(num2);
            break;
        case "-": 
            document.getElementById("calc").value = Number(num1)-Number(num2);
            break;
        case "*": 
            document.getElementById("calc").value = Number(num1)*Number(num2);
            break;
        case "/": 
            document.getElementById("calc").value = Number(num1)/Number(num2);
            break;

    default: 
        document.getElementById("calc").value = "Error";
        break;
    }
}

function añadirNum0() {
    calc = document.getElementById("calc").value;
    document.getElementById("calc").value = calc.concat('0');
}
function añadirNum1() {
    calc = document.getElementById("calc").value;
    document.getElementById("calc").value = calc.concat('1');
}
function añadirNum2() {
    calc = document.getElementById("calc").value;
    document.getElementById("calc").value = calc.concat('2');
}
function añadirNum3() {
    calc = document.getElementById("calc").value;
    document.getElementById("calc").value = calc.concat('3');
}
function añadirNum4() {
    calc = document.getElementById("calc").value;
    document.getElementById("calc").value = calc.concat('4');
}
function añadirNum5() {
    calc = document.getElementById("calc").value;
    document.getElementById("calc").value = calc.concat('5');
}
function añadirNum6() {
    calc = document.getElementById("calc").value;
    document.getElementById("calc").value = calc.concat('6');
}
function añadirNum7() {
    calc = document.getElementById("calc").value;
    document.getElementById("calc").value = calc.concat('7');
}
function añadirNum8() {
    calc = document.getElementById("calc").value;
    document.getElementById("calc").value = calc.concat('8');
}
function añadirNum9() {
    calc = document.getElementById("calc").value;
    document.getElementById("calc").value = calc.concat('9');
}
function añadirSuma() {
    calc = document.getElementById("calc").value;
    document.getElementById("calc").value = calc.concat('+');
}
function añadirResta() {
    calc = document.getElementById("calc").value;
    document.getElementById("calc").value = calc.concat('-');
}
function añadirMult() {
    calc = document.getElementById("calc").value;
    document.getElementById("calc").value = calc.concat('*');
}
function añadirDiv() {
    calc = document.getElementById("calc").value;
    document.getElementById("calc").value = calc.concat('/');
}
function añadirPunto() {
    calc = document.getElementById("calc").value;
    document.getElementById("calc").value = calc.concat('.');
}

function vaciar() {
    document.getElementById("calc").value = '';
}

function borrar() {
    calc = document.getElementById("calc").value;
    document.getElementById("calc").value = calc.slice(0, -1);
}

function PosNeg() {
    calc = document.getElementById("calc").value;
    var neg = '-';

    if(calc[0] == '-'){
        document.getElementById("calc").value = calc.slice(1);
    }else{
        calc = neg.concat(calc);
        document.getElementById("calc").value = calc;
    }
}

function numX() {
    calc = document.getElementById("calc").value;
    calc = 1/calc;
    document.getElementById("calc").value = calc;
}

function raiz() {
    calc = document.getElementById("calc").value;
    calc *=calc;
    document.getElementById("calc").value = calc;
}

function porCien() {
    calc = document.getElementById("calc").value;
    calc /= 100;
    document.getElementById("calc").value = calc;
}