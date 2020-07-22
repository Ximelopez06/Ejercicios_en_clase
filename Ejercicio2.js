var a =0;
var b =0;
var c =0;
var d =0;
var calcularMitad = 0;

a = parseInt(prompt("Digitar un numero a"));
b = parseInt(prompt("Digitar un numero b"));
c = parseInt(prompt("Digitar un numero c"));
d = parseInt(prompt("Digitar un numero d"));

calcularMitad = calcular(a,b,c,d);

function calcular(nA, nB, nC, nD){
    const result = (nA + nB + nC + nD);
    media = (result/4);
    console.log("La media de todos los valores es la siguiente:" + media); 
}