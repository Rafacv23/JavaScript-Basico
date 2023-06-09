const listaCompra = ["Patatas", "Leche", "Huevos", "Harina", "Queso"];
console.log(listaCompra);

// añadimos 1 elemento al array
listaCompra.push("Aceite de girasol");
console.log(listaCompra);

// eliminamos el aceite de girasol
listaCompra.pop();
console.log(listaCompra);

// lista películas favoritas: objetos (título, director y fecha)
const listaPeliculas = [
    {
    titulo: "El Padrino",
    publicacion: 1972,
    director: "Francis Ford Coppola",
    },
    {
        titulo: "El laberinto del fauno",
        publicacion: 2006,
        director: "Guillermo del Toro",
    },
    {
        titulo: "The Dark Night Rises",
        publicacion: 2012,
        director: "Christopher Nolan",
    }
]

// Filtramos listaPeliculas para que solo salgan las posteriores al año: 2010
const filtroPublicacion = [listaPeliculas.filter(objeto => objeto.publicacion >= 2010)]
console.log(filtroPublicacion);

// Lista con los directores de la anterior lista
const listaDirectores = [listaPeliculas.map(objeto => objeto.director) ]
console.log(listaDirectores);

//Lista con los títulos de las películas de listaPeliculas
const listaTitulo = [ listaPeliculas.map(obj => obj.titulo) ]
console.log(listaTitulo);

// unimos las 2 listas creadas con .concat()
const listaTituloDirectores = [ listaTitulo.concat(listaDirectores) ]
console.log(listaTituloDirectores);

// Unimos las 2 listas creadas pero con factor de propagación
const listaTituloDirectoresPropagacion = [...listaTitulo, ...listaDirectores]
console.log(listaTituloDirectoresPropagacion);