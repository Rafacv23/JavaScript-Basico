// Crear una función sin parámetros que siempre devuelva true
function verdadero(){
    return true;
}

let verdad = verdadero();
console.log(verdad);

/* Crear una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa"
, 5 segundos después de ejecutarse */
function promesa(){
    console.log("Hola soy una promesa");
}

const asin = setTimeout(promesa, 5000);

// versión 2 ahora, con funa asincronia
async function promise(){
    await new Promise (resolve => setTimeout(resolve, 5000));
    console.log("Hola soy una promesa");
}

promise();

// Una función generadora de índices automáticos 
function* gen(){
    let id = 0;
    while (true) {
        id++;
        yield id;
    }
}

const id = gen();

console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);