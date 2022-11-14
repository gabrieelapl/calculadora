function OperacoesBasicas(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;

    operador = document.querySelector("input[name=opt]:checked").value;
    resultado = eval(parseInt(numero1)+ operador + parseInt(numero2));

    document.getElementById("resultado").innerHTML = resultado;
}

function Radiciacao(){
    radicando = document.getElementById("radicando").value;

    resultado = Math.sqrt(parseInt(radicando));

    document.getElementById("resultado").innerHTML = resultado;
}

function Potenciacao(){
    base = document.getElementById("base").value;
    expoente = document.getElementById("expoente").value;

    resultado = eval(parseInt(Math.pow(base, expoente)));
 
    document.getElementById("resultado").innerHTML = resultado;
}

function AreaDoTriangulo(){
    base = document.getElementById("base").value;
    altura = document.getElementById("altura").value;

    resultado = eval((base * altura)/2);

    document.getElementById("resultado").innerHTML = resultado;
}

function Bhaskara(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;

    delta = Math.pow(b, 2) - 4 * a * c;

    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);

    if(a == 0){
        resultado = "X = " + x1;
    }

    else if(delta < 0){
        resultado = ("Não possui raízes reais.");
    }

    else{
        resultado = "S = {" + x1 + ", " + x2 + "}";
    }

    document.getElementById("resultado-delta").innerHTML = "Δ = " + delta;
    document.getElementById("resultado").innerHTML = resultado;
}