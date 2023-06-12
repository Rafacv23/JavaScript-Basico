const nombre = "Rafa";
const apellido = "Canosa";

const persona = {
    nombre: nombre,
    apellido:apellido,
}


sessionStorage.setItem("persona", JSON.stringify({persona}));
console.log(JSON.parse(sessionStorage.getItem("persona")));
localStorage.setItem("persona", persona);

const expiracion = new Date();
expiracion.setMinutes(expiracion.getTime()+ (minutos * 60 * 1000));

document.cookie = persona + "=" +persona +";"+ expiracion.toUTCString();