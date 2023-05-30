let numero = 10;
var i = numero-1;

while(numero){
    numero *= i;
    i--;
    if (i <= 1) break;
}
console.log(numero);