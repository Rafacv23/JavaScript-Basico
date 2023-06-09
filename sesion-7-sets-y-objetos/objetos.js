// Crear un objeto con: (nombre, apellido, edad, altura, eresDev )
const persona = {
    nombre: "Rafa",
    apellido: "Canosa",
    edad: 22,
    altura: 1.75,
    eresDev: true
};

// crear una variable que almacene la edad a partir del objeto persona
let edad = persona.edad;
console.log(edad);

// crear una lista que contenga el objeto persona y un nuevo objeto con los datos personales de 2 amigos
const listaPersonas = [
    persona, {
        nombre: "Ana",
        apellido: "Vázquez",
        edad: 23,
        altura: 1.60,
        eresDev: false
    },
    {
        nombre: "Miguel",
        apellido: "Ángel",
        edad: 21,
        altura: 1.73,
        eresDev: false
    }
];

console.log(listaPersonas);

// nueva lista con los objetos de la lista: listaPersonas ordenados por edad de mayor a menor
const listaOrdenada = listaPersonas.sort((a,b) => b.edad - a.edad);
console.log(listaOrdenada);