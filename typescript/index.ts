import { compileFunction } from 'vm';

console.log('Hola Mundo');

var sumar = (a: number, b: number) => console.log(a + b);

sumar(5, 8);

//boleanos
let estado: boolean = true;
//numerico
let numero: number = 4;
//String
let cadena: String = 'Hola mundo';
//Arrays

//Arrays de solo un dato
let personas: String[] = [];
personas = ['Miguel', 'Valeria'];

//Arrays multi typos de datos

let personasYEdad: Array<string | number | boolean> = [];
personasYEdad.push('Angel');
personasYEdad.push(1);
personasYEdad.push(true);

//Enum | enumeradores
enum Color {
	rojo = 'Rojo',
	azul = 'Azul',
	verde = 'Verde',
}

let colorFavorito: Color = Color.rojo;
console.log(`Mi color favorito es ${colorFavorito}`);

//Any
let comodin: any = 'joker';
comodin = { nombre: 'Angel' };

//Object

let Objeto: object = {};

//Funciones

function add(a: number, b: number): number {
	return a + b;
}

const sum = add(4, 5);

//Arrow function en TypeScript

const primeraFn = function (a: number): (number) => number {
	return (b: number) => b + a;
};

const primeraFase = primeraFn(4);
const segundaFase = primeraFase(6);

var resul = segundaFase;
console.log(resul);

//Pasar parametros opcionales o valores por omisión/defecto

//opcional
const nombreCompleto = (primerNombre: String, apellido?: String) => {
	return `${primerNombre} ${apellido}`;
};
const angel = nombreCompleto('Angel');

//omisión/defecto
const nombreCompleto1 = (primerNombre: String, apellido: String = 'Loor') => {
	return `${primerNombre} ${apellido}`;
};
const angel1 = nombreCompleto1('Angel');

//Interfaces

interface Rectangulo {
	ancho: number;
	alto: number;
	//Enum
	color?: Color;
}

let rect: Rectangulo = {
	ancho: 4,
	alto: 6,
	color: Color.rojo,
};

function area(r: Rectangulo): number {
	return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
	return this.color
		? `Un rectangulo color ${this.color}`
		: `Un rectangulo sin color`;
};

console.log(rect.toString());

//Clase en TypeScript
class Persona {
	private nombre: String;
	private edad: number;
	private colorCamisa: Color;

	constructor(nombre: string, edad: number, colorCamisa: Color) {
		this.nombre = nombre;
		this.edad = edad;
		this.colorCamisa = colorCamisa;
	}

	quienSoy() {
		return `Hola me llamo ${this.nombre} y tengo ${this.edad}, mi camisa es de color ${this.colorCamisa}`;
	}
}

const miguel = new Persona('Angel', 24, Color.verde);
const quienEsMiguel = miguel.quienSoy();
console.log(quienEsMiguel);

//Patrones de diseño

//singleton

import Singleton from './Singleton';

const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log('A es igual a B?', a == b);

//Patron Observer
