const boton = document.getElementById("click");
console.log(boton);

boton.addEventListener("click", () =>{
    alerta();
})

alerta = () => console.warn("Click en el boton");

$(document).ready(() => {
    $("#jquery").click(() => {
        console.log("Hola, estoy utilizando JQuery");
    })
})
