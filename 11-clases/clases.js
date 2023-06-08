class Persona {
    #nombre;
    #edad;
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }
    getDatos(){
        return "Este estudiante se llama: " + this.#nombre + ", tiene: " + this.#edad + " años"
    }
}


class Estudiante extends Persona{
    _asignaturas = ["Javascript", "HTML", "CSS"]

    constructor(nombre, edad, _asignaturas){
        super(nombre, edad)
        this._asignaturas = _asignaturas;
    }
    getAsignatura(){
        return "Está estudiando: " + this._asignaturas
    }
}

const estudiante1 = new Estudiante("Rafa", 23, "Javascript", "HTML");
console.log(estudiante1.getDatos());
console.log(estudiante1.getAsignatura());