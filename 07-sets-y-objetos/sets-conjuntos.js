// Crear set con los nombres de mi familia
let nombreFamilia = ["Rafa", "Ana", "Rodrigo", "Félix", "Merce"];
const familia = new Set (nombreFamilia);
console.log(familia);

// modifica familia, para añadir repetido tu nombre: "Rafa"
familia.add("Rafa");
console.log(familia);

// modificar familia, para añadir el nombre: "JavaScript"
familia.add ("JavaScript");
console.log(familia);