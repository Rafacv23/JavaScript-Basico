let nombre = "Rafa";
console.log(nombre);

let apellido = "Canosa";
console.log(apellido);

let apellido2= "vallejo";
console.log(apellido2);

let estudiante = nombre + " " + apellido;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase(estudiante);
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase(estudiante);
console.log(estudianteMinus);

let numEstudiante = estudiante.length;
console.log(numEstudiante);

let firstNombre = nombre.slice(0,1);
console.log(firstNombre);

let lastApellido = apellido.slice(5);
console.log(lastApellido);

let estudianteEspacios = nombre.concat(apellido);
console.log(estudianteEspacios);

let isNombre = estudiante.includes(nombre);
console.log(isNombre);