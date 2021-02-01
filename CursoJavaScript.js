//Aprender a utilizar el debugger para poder depurar código
debugger

////// ===== Valores =====
// ..... Valores primitivos ..... 

// Int
40
// String
"Angel Loor"
// Boolean
true
false
// Valores nulos o indefinidos
null
undefined

// .....valores no primitivos (Objetos)..... 
// Arrays
var area = [1, 2, 3, 'String', true];
// Objetos
var obj = { nombre: 'Angel', apellido: 'Loor' }


// ===== Variables =====

var nombre = "Angel"

// Hay dos estados de una variable (Declarar / Inicilizar)

// Declarar
var nombre

// Inicializar
nombre = "Angel"

//Arrays
var elementos = ["Computadora", "Celular"]

//Objeto
var persona = {
    nombre: "Diego",
    edad: 24,
    elemento: ["hola", "cola"]
}

// ..... Manejo de String ..... 
var nombre = 'Angel',
    apellido = 'Loor'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)

// ..... Manejo de decimales ..... 

var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3) / 100 //redondear una cantidad con Math.round()
var totalStr = total.toFixed(2) //toFixed(n) para tomar en cuenta n cantidad de decimales que queremos
var total2 = parseFloat(totalStr) //parsear de un string a un float (convertir de texto a numero decimal) 


// ===== Funciones =====

// Funciones declarativa
function miFuncion() {
    return 3;
}

// Funcion Expresiva
var miFuncion = function (a, b) {
    return a + b;
}

// Concatenar valores dentro de un String
var saludarEstudiante = function (nombreEstudiante) {
    console.log(`hola ${nombreEstudiante}`);
}

// Otra manera de obtener un valor por consola es el return

var miFuncion = function (a, b) {
    return a + b;
}

miFuncion(4, 4);


// ..... Ejemplo funciones ..... 

var daniel = {
    nombre: "Daniel",
    apellido: "Páez",
    edad: 18,
    peso: 55
}

var diasDelAño = 365;
var incrementoPeso = 0.200 //0.200 gramos


//Funcion donde se aumenta el valor del peso del objeto persona
const aumentarDePeso = persona => persona.peso += incrementoPeso;

//Funcion donde se baja el valor del peso del objeto persona
const bajarDePeso = persona => persona.peso -= incrementoPeso;


function cambioPeso(persona) {

    //este codigo se ejecutara TODOS LOS DIAS DEL AÑO
    for (var i = 1; i <= diasDelAño; i++) {

        var ramdom = Math.random();
        //una variable guarda un numero aleatorio entre 0 y 1

        //este codigo se ejecutara el 25% de las veces
        if (ramdom <= 0.25) {
            //aumenta de peso
            aumentarDePeso(persona)
        }

        else if (ramdom <= 0.50) {
            //baja de peso
            bajarDePeso(persona)
        }

    }

}

console.log(`Al inicio del año ${daniel.nombre} pesa ${daniel.peso} kg`)

cambioPeso(daniel)

console.log(`Al inicio del año ${daniel.nombre} pesa ${daniel.peso.toFixed(1)} kg`);

// ===== Scope =====

// El scope es el alcance que tiene las variables dentro de un archivo .js

// Scope Global: son la variables que estan definidas de manera globlal.
// Scope Local: son la variables que estan definidas dentro de una funcio. 


// ===== Hoisting =====

// Hoisting es cuando las declaraciones de variables y funciones se procesan antes de ejecutar cualquier código, al momento de qe se genere el hosting, las funciones se declarán primero, y despues las variables.

console.log(miNombre);

var miNombre = "Diego";

var miNombre = undefined;

console.log(miNombre + "soy hoisting");

miNombre = "Diego";


// =====  Hoisting con funciones  =====

hey();

function hey() {
    console.log('Hola soy un hoisting' + miNombre);
};

var miNombre = 'Diego';

// ===== Coercion =====

// es el proceso de convertir una variable de un tipo a otro

// ..... Coercion inplicita .....

var a = 20;

var b = a + "";

//da como resultado a '20' de tipo string

// más ejemplos

var a = [1, 2];
var b = [3, 4];

a + b // En este ejemplo, por la concatenación, ambos arrays son obligados a convertirse en strings, y luego se juntan.

// ..... Coercion Explícita ..... 

var a = 30;

var c = String(a);

var d = Number(c);

// Otro ejemplo

var a = 30;
var b = a.toString();

var c = "100";
var d = +c; // Unary operator '+' de forma explícita convierte a número

// más ejemplos

var num1 = "3.14";
var num2 = 5 + +num1;

/*  
Number + Number = Number
Number + String = String
String + Number = String
String + String = String
*/

// ===== Truthy y Falsy =====

// Son valores que son verdaderos o falsos 

// Falsy (False)

"" // un string vacío 
0 - 0
null
NaN
false
undefined

//Truthy (true)

"hola"
30
{ a: 1 }
[1, 3]
true
function a() { }

// ===== Operadores =====

// Binary operators, y esto es porque significa que están 2 operandos involucrado 

// ...... Operadores Matemáticos ..... 

3 + 2
50 - 10
10 * 3
20 / 2

'Diego ' + 'De Granda'

// ..... Asignación ..... 

var a = 1;

// ..... Comparación ..... 

3 == '3' // es igual = true

3 === '3' // es estrictamente igual (Valida el tipo dato) = false

5 < 3, 5 <= 3, 5 > 3, 5 >= 3 // menor, menor o igual, mayo, mayor o igual 

// ..... Lógicos ..... 

!false // operador not (no)

a && b // operador and (y), este operador genera una valicación siempe y cuando ambas variables sean verdad, "var 1 y var 2"

true || false // operador or (o), este operador genera una validacion siempre y cuando cuaquier de as variables sea verdad, "var 1 o var 2"


// ..... Operadores de incremento ..... 

var edad = 40;

edad++;  // operador de incremento por 1
edad += 2;
edad--;
edad -= 2;

edad;

// ===== estructuras de control ====

// ...... If ......

var opcion1 = "Piedra";
var opcion2 = "Papel";
var opcion3 = "Tijera";

function jugar(Persona, Cpu) {

    if (Persona != Cpu) {
        if ((Persona == opcion2) && (Cpu == opcion1)) {
            console.log("Gano la persona");
        } else {
            if ((Persona == opcion3) && (Cpu == opcion2)) {
                console.log("Gano la persona");
            } else {
                if ((Persona == opcion1) && (Cpu == opcion3)) {
                    console.log("Gano la persona");
                } else {
                    console.log("El CPU Gano!!");
                }
            }
        }
    } else {
        console.log("Empate");
    }
}

jugar(opcion1, opcion2);

// ..... for ..... 

var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]);
}

for (var estudiante of estudiantes) {
    saludarEstudiante(estudiante);
}

// ..... While ..... 

while (estudiantes.length > 0) {   // Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea
    var estudiante = estudiantes.shift();  // shift() es un método que saca un elemento del array de la posición 0 a la última, Pop() comienza de la última a la primera.
    saludarEstudiante(estudiante);
}

//ejemplo do While

var diego = {
    nombre: 'Diego',
    apellido: 'Aguilera',
    peso: '55'
}
const META = diego.peso + 3
const aumentarDePeso = persona => persona.peso += 0.4
const bajarDePeso = persona => persona.peso -= 0.4
var cont = 0
function simular(persona) {
    while (persona.peso < META) {
        var random = Math.random()
        if (random < 0.75) {
            aumentarDePeso(persona)
        } else if (random < 1) {
            bajarDePeso(persona)
        }
        cont++
    }
}

simular(diego)

// ..... Do while ..... 

do {

} while (true)

// ..... Switch .....

var signo = 'cáncer';

switch (signo) {
    case 'cancer':
    case 'cáncer':
        console.log("Soy cancer!");
        break;
    case 'aries':
        console.log("Soy aries!");
        break;
    default:
        console.log("No soy nada");
}


// ===== Objetos =====

var carro = {
    marca: "Hynday",
    modelo: "Tiburon",
    anio: "2020",
    detalleDelAuto: function () {
        console.log(`${this.marca} ${this.modelo} ${this.anio}`)
    }
}

carro.marca;

carro.detalleDelAuto();

// ..... Funcion Constructora ..... 

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

// Reto

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

function generaAutos() {
    var autos = [];

    for (var i = 0; i < 30; i++) {
        var newAuto = new auto("auto" + i, "Modelo" + i, 2020);
        autos.push(newAuto);
    }
    return autos;
}

// Te permite hacer que ingresen un valor dentro del navegador

var marca = prompt("Ingresa la marca del auto");



//  ===== Arrays =====

// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación

var frutas = []; // Array Literal Syntax 

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas);
console.log(frutas.length); // length es una propiedad del array

// Acceder (por índice) a un elemento del Array
console.log(frutas[0]);   // Los arrays iician en "0" 


// ..... Metodos para mutar Arrays ..... 

// .push();

var masFrutas = frutas.push("Uvas"); // Esté metodo añadirá "Uvas" al final del array
console.log(frutas);

// .pop();

var utlimo = frutas.pop("Uvas"); // Eliminará "Uvas" del final 
console.log(frutas);

// unshift()

var nuevaLogitud = frutas.unshift("Uvas"); // Añade "Uvas" al inicio 
console.log(frutas);

// shift()

var borrarFruta = frutas.shift("Manzana"); // Elimina el primero elemento del array
console.log(frutas);

// .indexOf();

var posicion = frutas.indexOf("Platano"); // te dará la posición de ese item en el array
console.log(frutas);

// ..... Métodos de Arrays ..... 

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "libro", costo: 320 },
    { nombre: "Celular", costo: 1000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "audifonos", costo: 1700 }
];

// Filtrar todos los articulos que el costo sea menor a 500 
var articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 500;
});

// Ayudar a mapear (Traer informacion que nos interesa)
var nombreArticulo = articulos.map(function (articulo) {
    return articulo.nombre + articulo.costo;
});

// Encuentra un objeto segun un parametro (a diferencia de filter solo trae un objeto, que es la primera coincidencia)
var encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Celular";
});

// recorrer el arrays y traer todas las propiedades
articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});

//retorna un true o false dependiendo de la condicion

var articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700;
});


//!!!!Eficiencia al escribir código!!!!

var personas = {
    persona: {
        nombre: 'Angel',
        edad: 24
    }
}

function saludar(personas) {
    var { nombre, edad } = personas.persona
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}

saludar(personas)


function saludar({ persona: { nombre, edad } }) {
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}


// Acceder al  atributo de manera mas eficiente
var persona = {
    nombre: "angel",
    edad: 24,
    apellido: "loor"
}

function imprimirNombre(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona; //esto es lo mismo que la linea anterior
    console.log(nombre.toUpperCase());
}


// Devuelve un objeto totalmente nuevo
function objetoModificado(persona) {
    return {
        ...persona,
        edad: persona.edad + 1,
        otroAtributo: 'Valor'
    }
}

objetoModificado(persona);

// ---------------------------------- Arrow Functions ----------------------------------

var MAYORIA_DE_EDAD = 18;

var camilo = {
    nombre: "Camilo",
    edad: 12,
};

var daniel = {
    nombre: "Daniel",
    edad: 22,
};

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}

const esMayorDeEdad = (persona) => persona.edad >= MAYORIA_DE_EDAD;

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;


const imprimirSiEsMayorDeEdad = persona => esMayorDeEdad(persona) ?
    console.log(`${persona.nombre} es mayor de edad`) :
    console.log(`${persona.nombre} es menor de edad`);


const permitirAcceso = persona => !esMayorDeEdad(persona) ?
    console.log(`ACCESO DENEGADO`) :
    console.log(`PERMITIR ACCESO`);

// ===== Clases en JavaScript =====

// no hay en sí clases en JavaScript, en si se tratan de prototipos de objetos que contienen atributos y funciones

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    saludar(fn) {
        var nombre = this.nombre
        console.log(`Hola soy ${nombre} y soy una persona`);
        if (fn) {
            fn(nombre, true)
        }
    }
}

// no existe como tal la herencia de objetos, se llama herencia prototipal
class Desarrollador extends Persona {
    constructor(nombre, apellido, edad, tiempoDeDesarrollo) {
        super(nombre, apellido, edad)
        this.tiempoDeDesarrollo = tiempoDeDesarrollo
    }

    saludar(fn) {
        var nombre = this.nombre
        console.log(`Hola soy ${nombre} y soy un Desarrollador`);
        //fijarse que es posible enviar funciones como parámetros
        if (fn) {
            fn(nombre, true)
        }
    }
}

function responderSaludo(nombre, esDev) {
    console.log(`Hola ${nombre}`)
    if (esDev) {
        console.log(`hola no sabías que eras Dev`)
    }
}

Angel = new Desarrollador('Angel', 'Loor', 24)

Angel.saludar(responderSaludo);

/*Asyncronismo en JavaScript
*JavaScript solo puede ejecutar una tarea a la vez, sin embargo, puede delegar 
*la ejecución de ciertas funciones a otros procesos, este modelo de concurrencia se llama Eventloop
*El callstack es la pila de tareas donde se ejecutan las tareas de manera síncrona
*Pero si necesita que se ejecute tareas como:
*Peticiones a servidores
*Interacciones Visuales
*navegación client-side (lado del cliente)
*Eventos que se realizan cada cierto tiempo
*Estas tareas se ejecutan de manera asíncrona porque son tareas que le corresponde a otros procesos
*cuando se terminan de ejecutar estas tareas se van a callback queue, donde espera que todas las tareas síncronas estén listas para devolver todas las tareas
*/

/*callbacks 
Un callback es una función que se pasa a otra función como un argumento.
Esta función se invoca, después, dentro de la función externa para completar alguna acción.
*/

const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(url, opts, function (data) {
            resolve(data);
        }).fail(() => reject(id));
    });
}

function onError(id) {
    console.log(`Succedio un error al obtener el persona con id ${id}`);
}

//Promesas

/*Qué son las promesas?
Tenemos que pensar las promesas como valores que aún no conocemos. Es la promesa de que ahí va a haber un valor cuando una acción asíncrona suceda y se devuelva.
Las promesas tienen 3 estados y son como cualquier otro objeto de javascript.
El primero de los estados es ‘pending’. Es el estado cuando las creamos.
Si se resuelve exitosamente pasa al estado ‘fulfilled’.
Si ocurre algún error y no se resuelve pasa al estado de ‘rejected’.

Las promesas pueden no ser asíncronas también.
Para obtener el valor de la resolución de la promesa llamamos a la función _.then(val =>) _a la que le vamos a pasar como parámetro otra función en la que el primer parámetro será el valor que esperábamos.
Si sucede algún error agregamos el método .catch(err=>) al que se le asigna una función también como parámetro que va a recibir el error.
Las promesas se declaran de la siguiente manera:

new Promise( function( resolve, reject ) {
    ...
}).then( valor => {
    ...
}).catch( err => {
    ...
})

*/

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(url, opts, function (data) {
            resolve(data);
        }).fail(() => reject(id));
    });
}

function onError(id) {
    console.log(`Succedio un error al obtener el persona con id ${id}`);
}

//Promesas Encadenadas
obtenerPersonaje(1)
    .then(function (personaje) {
        console.log(`El persona 1 es ${personaje.name}`);
        return obtenerPersonaje(2);
    })
    .then(function (personaje) {
        console.log(`El persona 2 es ${personaje.name}`);
        return obtenerPersonaje(3);
    })
    .then(function (personaje) {
        console.log(`El persona 3 es ${personaje.name}`);
    })
    .catch(onError);

//Múltiples promesas en paralelo

var ids = [1, 2, 3, 4, 5, 6, 7];

var promesas = ids.map((id) => obtenerPersonaje(id));

Promise.all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError);

/**
 * Async-await es la manera más simple y clara de realizar tareas asíncronas. Await detiene la ejecución del programa hasta que todas las promesas sean resueltas.
 * Para poder utilizar esta forma, hay que colocar async antes de la definición de la función, y encerrar el llamado a Promises.all() dentro de un bloque try … catch.
 */

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7];
    var promesas = ids.map((id) => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.table(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()

// ===== Complementos =====


/**
 * 
 * lET reduce su alcance solo al bloque en el que esta
 * VAR lo escala
 * CONST no puede cambiar el valor de la variable
 *  
 */

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

function esMayorDeEdad(persona) {
    var mensaje
    if (persona.edad > 18) {
        mensaje = 'Es mayor de edad'
    }
    else {
        mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
}


esMayorDeEdad(sacha)


// ===== Manejo de fechas ===== 

function diaEntreFechas(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24
    //abs sirve para retornar un valor positivo indistintamente si la operacion da negativo
    const diferencia = Math.abs(fecha1 - fecha2)
    //floor redondea el decimal
    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1990, 7, 12)

// ===== Funciones Recursivsa ===== 

function divisionEntera(dividendo, divisor) {

    if (dividendo < divisor) return 0

    return 1 + divisionEntera(dividendo - divisor, divisor)
}

// =====  Memorización: ahorrando cómputo =====

function factorial(numero) {
    //Cada funcion puede tener atributos internos
    //this.cache define una variable cache para almacenar cualquier valor
    if (!this.cache) {
        this.cache = {}
    }

    if (this.cache[numero]) {
        return this.cache[numero]
    }

    if (numero === 1) return 1

    this.cache[numero] = numero * factorial(numero - 1)
    return this.cache[numero]
}

// ===== Entiende los closures de JavaScript ======

/**
 * Un closure, básicamente, es una función que recuerda el estado de las variables al momento de ser invocada,
 * y conserva este estado a través de reiteradas ejecuciones.
 * Un aspecto fundamental de los closures es que son funciones que retornan otras funciones.
 */

function crearSaludo(finalDeFrase) {
    return function () {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('wey')
const saludoColombiano = crearSaludo('parce')

saludoArgentino('Anegl')
saludoMexicano('Angel')
saludoColombiano('Angel')


// ===== Estructuras de datos inmutables =====

/**
 * Las estructuras de datos inmutables forman parte de los principios de la Programación Funcional y nos permiten evitar tener efectos colaterales en los datos.
 * En otras palabras, que hayan modificaciones en las variables sin nuestro consentimiento, produciendo comportamientos inesperados en el programa.
 */

const angel = {
    nombre: 'Angel',
    apellido: 'Loor',
    edad: 24
}

// const compleanosInmutable = persona => {
//     persona = JSON.parse(JSON.stringify(persona))
//     return {
//         ...persona,
//         edad: persona.edad + 1
//     }
// }

const cumpleañosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})

cumpleañosInmutable(angel)


// ===== Cambiando de contexto al llamar a una función ===== 

/**
El contexto (o alcance) de una función es por lo general, window. Así que en ciertos casos, cuando intentamos referirnos a this en alguna parte del código, es posible que tengamos un comportamiento inesperado, porque el contexto quizás no sea el que esperamos.
Existen al menos tres maneras de cambiar el contexto de una función.
Usando el método .bind, enviamos la referencia a la función sin ejecutarla, pasando el contexto como parámetro.
Usando el método .call, ejecutamos inmediatamente la función con el contexto indicado
Usando el método .apply, es similar a .call pero los parámetros adicionales se pasan como un arreglo de valores
 */

const fernando = {
    nombre: ' Fernando',
    apellido: 'Huaman'
}

const yesika = {
    nombre: ' Yesika',
    apellido: 'Cortés'
}

function Saludar(saludo = 'Hola') {
    console.log(`${saludo} mi nombre es ${this.nombre}`)
}

//bind carga la funcion con el nuevo contexto pero no la ejecuta solo la deja lista
const saludarAFernando = Saludar.bind(fernando, 'Hola che,')
saludarAFernando()

//call carga y ejecuta la funcion, la manera de pasar parametros es por comas
Saludar.call(fernando, 'Hola che,')

//primer parametro es el contexto o objeto que tomara como referencia this, el array contiene los parametros en orden
Saludar.apply(fernando, ['Hola che'])

// ===== ¿Cuándo hace falta poner el punto y coma al final de la línea? ===== 

// Caso 1
console.log('Curso de JS'); console.log('Trabajando en Platzi');

// Caso 2.
// Despúes del console.log se empieza con un arreglo que se desea iterar. Es obligatorio colocar el punto y coma, de lo contrario JS marca error
console.log('Hola bienvenido');

[1, 2, 3, 4].forEach((elemento) => {
    console.log(elemento)
})

// Caso 3
// No le encuentro mucho sentido a esto pero tambien marca error
let nombre = 'Alejandro'
console.log('JS es lo máximo');

`${nombre}, te ha gustado el curso`


// Caso 4
// Cuando se declaran funciones que se invocan de manera automática
console.log('Teminamos');

(function () {
    var version = 2.2
    console.log(`Esta es una función IIFE, es decir se invoca inmediatamente y protege el ambiente de contaminarse con variables globales ${version}`)
})()

    // En el contexto global, la variable version no existe, ya que fué declarada dentro de una funcion IIFE
    // console.log(version)




    // Immediately-invoked function expressions IIFE
    (function () {
        console.log('Hola soy un IIFE')
    })();

//Clousures forma de obtener variables privadas en nuestro codigo

function makeCounter(n) {
    let count = n;

    return {
        increase: function () {
            count = count + 1;
        },
        decrease: function () {
            count = count - 1;
        },
        getCount: function () {
            return count;
        }
    };
}
let counter = makeCounter(5);