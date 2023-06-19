function factorial(n) {
    var resultado = 1;
    for (var i = 1; i <= n; i++) {
        resultado *= i
    } return resultado;
}

var numero = 10;
var factorialNumero = factorial(numero);

console.log(factorialNumero);