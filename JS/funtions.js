console.log("prueba de conexión");

//tipos de variables
//const para variables constantes

const pi = 3.1416;
const pulgada = 2.3;
const name = "Keila Vacca";


//var para variables globales

var cal_days = 15;


//let para variables de bloque o locales

let count = 1;
let j = 0;

//formas de impresión

//alert
alert("name");

//console
console.log(name);
console.log(cal_days);
console.log("15");
console.log(true);

//pantalla-boby

document.write(name);
document.getElementById("box_one").innerHTML = "<h1>Keila Vacca</h1>";
document.getElementById("box_two").innerText = "<h1>Keila Vacca</h1>";

//librerias

Swal.fire({
   icon: 'info',
   title: 'Keila Vacca',
   text: name,
   footer: name,
   showConfirmButton: false,
   timer: 2000,
   position: 'center-end'
})
//  Swal.fire(name);


//tipos de datos


//numericos

var number_one = 10;
var number_two = 2.5;

//String
var text = "soy un texto";

//booleanos

var boolean = true; //false

//array

var array_num = [1, 2, 3, 4, 5, 6];
var array_text = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var array_mix = [1, "a", 2.5, "c"];
var array_mul = [
   { name: "Eliany", last_name: "Navarro", age: "17" },
   { name: "Maria", last_name: "perez", age: "22" },
   { name: "Angie", last_name: "Alvarez", age: "23" },
   { name: "Sofía", last_name: "Montaguth ", age: "34" },
]


//operadores basicos

//suma
var suma = number_one + number_two;
console.log("suma = " + suma);


//resta

var resta = number_one - number_two;
console.log("resta = " + resta);

//multiplicacion
var multiplicacion = number_one * number_two;
console.log("multiplicacion= " + multiplicacion);

//division

var division = number_one / number_two;
console.log("division = " + division);

//modulo

var modulo = number_one % number_two;
console.log("modulo = " + modulo);


console.log(
   "suma = " + suma + " \n" +
   "resta = " + resta + " \n" +
   "multiplicacion= " + multiplicacion + " \n" +
   "division = " + division + " \n" +
   "modulo = " + modulo
);
var respuesta =
   "suma = " + suma + "<br>" +
   "resta = " + resta + "<br>" +
   "multiplicacion= " + multiplicacion + "<br>" +
   "division = " + division + "<br>" +
   "modulo = " + modulo;

Swal.fire(respuesta);

Swal.fire({
   showConfirmButton: false,
   background: '#000',
   icon: 'success',
   title: 'respuesta',
   html: respuesta
});

//operadores lógicos y estructuras condicionales

//and && con if

// = asignación
// == valor
// === valor y tipo de dato

var bool = false;
var numeric = 7;

if (!bool && numeric === 7) {//bool == true
   console.log("entra if");
} else {
   console.log("entra else");
}

//or || con if

var age = 31;

if (age == 32 || numeric === 7) {
   console.log("entra if");
   age++; //+=n n=incremento
} else {
   console.log("entra else");
   age--;
}
console.log(age);

// for 
console.log(array_text.length);
var size = array_text.length;

for (let i = 0; i < size; i++) {
   console.log(array_text[i] + (i + 1));
}

//while

let position = 0;

while (position < size) {
   console.log(array_text[position] + (i + 1));
   position++;
}

//do while

let w = 0;

do {
   console.log(array_text[w] + (i + 1));
   w++;
} while (w < size)

//eventos y funciones

function load_page() {
   jm();
   jm2();
}

function jm() {
   alert("bienvenido")
}
function jm2() {
   alert("bienvenido dos")
}

function box_onblur() {
   alert("salió");
}

function box_onblur() {
   const box_onblur = document.querySelector("#box_onblur");
   if (box_onblur.ariaValueMax.length <= 2) {
      alert("problemas con el texto");
   }
}

const btn_changeColor = document.querySelector("#change_color");

btn_changeColor.addEventListener("click",() => {
    document.body.style.backgroundColor = "red";
    document.body.style.color= "#fff";
});


const form = document.getElementById("form_register");
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const validation = document.getElementById("validation");

form.addEventListener("submit", name_event => {
   name_event.preventDefault();
   let info = "";
   if (nombres.value.length <= 2 || apellidos.value.length <= 2) {
      info += "nombres o  pellidos incorrectos";
      validation.style.color = "red";
   } else {
      info += "su nombre es : " + nombres.value + "" + "su apellido es : " + apellidos.value;
      validation.style.color = "green";

   }
   validation.innerText = info;
});


function load_page() {

   document.getElementById("nombres").focus();
   //focus se abilita cuando carga la pagina
   document.getElementById("apellidos").disabled = true; //bloquea
   let date = new Date();
   console.log(date.getSeconds());
   let info = " ";
   for (let i = 0; i < array_mul.length; i++) {
      //console.log("nombre :"+array_mul[i].name+"apellido :"+array_mul[i].last_name+"edad :"+array_mul[i].age);
      //info += "nombre :"+array_mul[i].name+"apellido :"+array_mul[i].last_name+"edad :"+array_mul[i].age + "<br>";
      info += "<tr><td>" + array_mul[i].name + "</td>" + "<td>" + array_mul[i].last_name + "</td>" + "<td>" + array_mul[i].age + "</td></tr>";
   }
   document.getElementById("imprimir_datos").innerHTML = info;
}

function validate() {
   let nombres = document.getElementById("nombres").value;
   console.log(nombres);
   alert(nombres.toUpperCase());

   if (nombres.length > 2) {
      document.getElementById("apellidos").disabled = false;
      document.getElementById("apellidos").focus();
      document.getElementById("nombres").value = "";

   }
}


