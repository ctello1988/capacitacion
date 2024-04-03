//Tipos de datos en typscript, objetos Arreglos e Interfaces: number, string, boolean, Date
let nombre: string = 'Javier';
let edad: number = 23;
let casado: boolean = true;
let fechaNacimiento: Date = new Date();

enum Color { Rojo, Verde, Azul = 'red' }

const arregloNumerico: number[] = [];

interface Persona {
    nombre: string;
    apellido: string;
    fechaNacimiento: Date,
    getEdad(): number;
}

const jacinto: Persona = {
    apellido: 'Rodriguez',
    nombre: 'Javier',
    fechaNacimiento: new Date(),
    getEdad: (): number => {
        return 20;
    }
};

console.log(jacinto.getEdad());

class Empleado implements Persona {
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;

    constructor(apellido: string, nombre: string, fechaNacimiento: Date) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }



    getEdad(): number {
        return 20;
    }

}

const empleado = new Empleado('Gutierrez', 'Maria', new Date());

empleado.getEdad();

const empleados: Persona[] = [jacinto, empleado];

empleados.forEach(empleado => {
    console.log(empleado);
});

abstract class MiClaseAbstracta {
    abstract edad: number;
    abstract foo(): void;
}


// Funciones en typscript
function sumar(a: number, b: number): number {
    return a + b;
}

const myfuncion: (cadena: string) => string = (cadena: string) => cadena + 'Hola';
myfuncion('Jorlan');

const miMultiplicacion: (numero: number, numero2: number) => number = (numero: number, numero2: number): number => {
    const result = numero * numero2;
    return result;
};

let crearPersona: (persona: Persona) => void;

crearPersona = (persona: Persona): number => {
    let numero = 10;
    console.log(persona.getEdad());
    return numero;
};


//Desestructuracion de objetos, arrglos, argumentos
const nombreNormal = empleado.nombre;
const { getEdad, nombre: nombreEmpleado } = empleado;

console.log(getEdad(), nombreEmpleado);

const empleado2: Persona = { ...empleado, apellido: 'Jimenez' };

const [, , mario] = empleados;
const nuevoArreglo = [mario, ...empleados];

const copiarPersona = ({ nombre: alias, apellido }: Persona): Persona => {
    console.log(alias, apellido);
};

function nuevaFuncion({ fechaNacimiento }: Persona): void {
    console.log(fechaNacimiento);
}


//Genericos
function establecerNombre<T>(nombre: T): T {
    return nombre;
}

establecerNombre<number>(5);

class ClaseGenerica<T> {
    nombre: T;
    constructor(public nombre: T) {

    }

    retornarNombre(): T {
        return this.nombre;
    }
}

const objetoNuevo = new ClaseGenerica<string>('Jorlan');


interface IGenerica<T> {
    nombre: T;
}

const implemetacionGenerica: IGenerica<Number> = {
    nombre: 5
};




//Importaciones y exportaciones

//Clases, extender clases y herencias
class Jorlan extends Empleado {
    constructor(apellido: string, nombre: string, fechaNacimiento: Date) {
        super(apellido, nombre, fechaNacimiento);
    }
}

export {
    nombre,
    Persona
};