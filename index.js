// KALKULATOR

let a
let b 
let c

document.getElementById("przycisk").onclick = function(){

    a = document.getElementById("bokA").value;
    a = Number(a);

    b = document.getElementById("bokB").value ;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    c = Math.round(c);

    document.getElementById("bokC").innerHTML = "BOK C ~ " + c;

    document.getElementById("bokA").value = " ";
    document.getElementById("bokB").value = " ";
}

// LICZNIK

let licznik = 0;

document.getElementById("odejmij").onclick = function(){
    
    licznik -= 1;
    document.getElementById("licznik").innerHTML = licznik;
}

document.getElementById("resetuj").onclick = function(){
    
    licznik = 0;
    document.getElementById("licznik").innerHTML = licznik;
}

document.getElementById("dodaj").onclick = function(){
    
    licznik += 1;
    document.getElementById("licznik").innerHTML = licznik;
}