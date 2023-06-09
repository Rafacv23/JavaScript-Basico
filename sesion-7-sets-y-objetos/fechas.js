// Imprime la fecha de hoy
let hoy = new Date();
console.log(hoy);

// Imprime la fecha de tu nacimiento 
let cumpleanios = new Date(2000, 7, 25);
console.log(cumpleanios);

// Crea una variable que indique si hoy, es más tarde que cumpleanios
let comparar = hoy > cumpleanios;
console.log(comparar);

// Crea una variable que contenga el día de tu nacimiento 
let diaCumpleanios = cumpleanios.getDate;
console.log(diaCumpleanios);

// crea una variable que contenga el mes de tu nacimiento
let mesCumpleanios = (cumpleanios.getMonth + 1);
console.log(mesCumpleanios);

// Crea una variable que contenga el año de tu nacimiento
let anioCumpleanios = cumpleanios.getFullYear;
console.log(anioCumpleanios);