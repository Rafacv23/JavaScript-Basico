const nombre = "Rafa";
const edad = 23;
const dev = true;
const dia = 25;
const mes = 7;
const anio = 2000;
const fechaNaci = new Date(2000, 7, 25);
const libroFav = {
    titulo: "Rebelión en la granja",
    autor: "George Orwell",
    fecha: 1945,
    url: "https://es.wikipedia.org/wiki/Rebeli%C3%B3n_en_la_granja",
}

const lista = new Array(nombre, edad, dev, fechaNaci, libroFav);

console.log(lista);