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

    $("#new-element").click(() => {
        $("ul").prepend("<li>Hola mundo</li>");
    })
    $("li").hover(function () {
        $("li").css("color", "blue");
        }
    );
})
