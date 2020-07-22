var a= 0;
var b= 0;

var calcularmultiplicacion =0;

a=prompt("Digite un numero a");
b=prompt("Digite un numero b");
calcularmultiplicacion= multiplicacion(a,b);

function multiplicacion(nA,nB) {
    const result = nA * nB;
    console.log("El resultado de la multiplicacion es:" + result)
}