const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText);
        event.dataTransfer.setData("text/plain", event.target.id);
        parrafo.classList.add("arrastrado")
    })

    const borrar = document.getElementById("borrar")
borrar.addEventListener("dragover", event =>{
    event.preventDefault()
})

borrar.addEventListener("drop", event => {
    let elementoId = event.dataTransfer.getData("text/plain")
    let elemento = document.getElementById(elementoId)
    if(elemento){
    elemento.remove()
    }
})

    parrafo.addEventListener("dragend", () => {
        console.log("He terminado de arrastrar: " + parrafo.innerText);
        parrafo.classList.remove("arrastrado");
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", () => {
        console.log("Estoy sobre la sección: " +seccion.innerHTML);
    }) 

    seccion.addEventListener("drop", event => {
        event.preventDefault()
        console.log("drop");
    } )
});