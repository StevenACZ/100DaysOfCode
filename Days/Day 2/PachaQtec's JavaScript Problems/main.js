// (1) ----------------------------------------------------------------------
// Utilizando función arrow, crear una función que reciba como parámetros
// un nombre, apellido y edad y los retorne en un string concatenado 
// “Hola mi nombre es sebastiányabiku y mi edad 33”
// --------------------------------------------------------------------------
/*
const hi = (name, lastName, age) => `Hello my name is ${name} ${lastName} and I'm ${age} years old.`;
console.log(hi('Steven', 'Zaa', 18));
*/

// (2) ----------------------------------------------------------------------
// Cree una función que tome números y devuelva la suma de sus cubos.
// sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// --------------------------------------------------------------------------
/*
const sumCubos = (a, b, c) => {
  return a**3 + b**3 + c**3; 
};
console.log('Suma de cubos: ' + sumCubos(1, 5, 9));
*/

// (3) ----------------------------------------------------------------------
// Crear una funcion que me retorne el tipo de valor entregado, utilizar 
// la función e imprimir los distintos tipos de JS.
// --------------------------------------------------------------------------
/*
const type = (value) => typeof(value);
console.log(type(23))
*/

// (4) ----------------------------------------------------------------------
// Crear una función que reciba n cantidad de argumentos 
// y los sume ( utilizar parametros rest)
// --------------------------------------------------------------------------
/*
const sumTot = (...rest) => rest.reduce((a, b) => a + b);
console.log(sumTot(3,5,3,1,10));
*/

// (5) ----------------------------------------------------------------------
// Crear una función que reciba una matriz de valores y filtre los 
// valores que no son string
// --------------------------------------------------------------------------
/*
const isNotString = (element) => typeof element !== 'string' ? true: false;

const noString = (arr) =>  arr.filter(isNotString);
console.log(noString(['steven', 123 , 'designer', 902, true, false, 10, 'jose']));
*/

// (6) ----------------------------------------------------------------------
// Cree una función que tome una matriz de números y devuelva los
// números mínimos y máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// --------------------------------------------------------------------------
/*
const minMaxNumbers = (arr) => {
  let minMax = [];
  minMax.push(Math.min(...arr));
  minMax.push(Math.max(...arr));
  return minMax;
}
console.log(minMaxNumbers([50,1400,500,100]));
*/

// (7) ----------------------------------------------------------------------
// Escriba una función que tome una matriz de 10 enteros (entre 0 y 9)
// y devuelva una cadena en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
// --------------------------------------------------------------------------
/*
const formatPhoneNumber = (arr) => {
  let nums = [];
  nums = arr.filter((value) => value >= 0 && value <= 9);
  return `(${nums[0]}${nums[1]}${nums[2]}) ${nums[3]}${nums[4]}${nums[5]}-${nums[6]}${nums[7]}${nums[8]}${nums[9]}`;
}
console.log(formatPhoneNumber([1,2,3,4,5,6,7,8,9,0, 100, 150]));
*/

// (8) ----------------------------------------------------------------------
// Cree una función que tome una matriz de matrices con números. 
// Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
// --------------------------------------------------------------------------
/*
const findLargestNums = (arr) => {
  let max = [];
  for (var i = 0; i < arr.length; i++) {
    max.push(Math.max(...arr[i]));
  }
  return max;
}
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));
*/

// (9) ----------------------------------------------------------------------
// Dada una palabra, escriba una función que devuelva el 
// primer índice y el último índice de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

// charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.
// --------------------------------------------------------------------------
/*
const charIndex = (sentence, letter) => {
  let result = [];
  result.push(sentence.indexOf(letter));
  result.push(sentence.lastIndexOf(letter));
  return result;
}

console.log(charIndex('circumlocution', 'c'));
*/

// (10) ----------------------------------------------------------------------
// Escriba una función que convierta un objeto en una matriz, 
// donde cada elemento representa un par clave-valor.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// --------------------------------------------------------------------------
/*
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5 
}

console.log(Object.entries(obj));
*/

// (11) ----------------------------------------------------------------------
// Cree la función que toma una matriz con objetos y devuelve la suma 
// de los presupuestos de las personas.

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700
// --------------------------------------------------------------------------
/*
const getBudgets = (arr) => {
  let sumTot = 0;
  arr.forEach((e, index) => {
    sumTot += arr[index]['budget'];
  });
  return sumTot;
}

console.log(getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]));
*/

// (12) ----------------------------------------------------------------------
// Cree una función que tome una matriz de estudiantes y devuelva 
// una matriz de nombres de estudiantes.
// getStudentNames([
//   { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞ ["Becky", "John", "Steve"]
// --------------------------------------------------------------------------
/*
const getStudentNames = (arr) => {
  let studentNames = [];
  arr.forEach(element => {
    studentNames.push(element['name']);
  });
  return studentNames;
}

console.log(getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]));
*/

// (13) ----------------------------------------------------------------------
//Escriba una función que convierta un objeto en una matriz de claves y valores.
// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
// --------------------------------------------------------------------------
/*
const objectToArray = (obj) => Object.entries(obj);
console.log(objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}));
*/

// (14) ----------------------------------------------------------------------
// Cree una función donde, dado el número n, devuelva la suma de todos 
// los números cuadrados  incluyendo n.

// squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
// --------------------------------------------------------------------------
/*
const squaresSum = (n) => {
  let sumTot = 0;
  for (var i = 1; i <= n; i++) {
    sumTot += i**2
  }
  return sumTot;
}
console.log(squaresSum(3));
*/

// (15) ----------------------------------------------------------------------
// Cree una función para multiplicar todos los valores en una matriz por 
// la cantidad de valores en la matriz dada

// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
// --------------------------------------------------------------------------
/*
const multiplyByLength = (arr) => {
  let newArr = [];
  arr.forEach(e => {
    newArr.push(e * arr.length);
  });
  return newArr;
}
console.log(multiplyByLength([2, 3, 1, 0]));
*/

// (16) ----------------------------------------------------------------------
// Cree una función que tome un número como argumento y devuelva una matriz 
// de números contando desde este número a cero.

// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
// --------------------------------------------------------------------------
/*
const countdown = (n) => {
  let arr = [];
  for (var i = 0; i <= n; i++) {
    arr.unshift(i);
  }
  return arr;
}
console.log(countdown(5));
*/

// (17) ----------------------------------------------------------------------
// Cree una función que tome una matriz y devuelva la diferencia entre los 
// números más grandes y más pequeños.

// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
// --------------------------------------------------------------------------
/*
const diffMaxMin = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return `Smallest number is ${min}, biggest is ${max}, the difference is ${max - min}.`;
}
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
*/

// (18) ----------------------------------------------------------------------
// Cree una función que filtre las cadenas de una matriz y 
// devuelva una nueva matriz que solo contenga enteros.

// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
// --------------------------------------------------------------------------
/*
const filterList = (arr) => {
  let newArr = [];
  arr.forEach(e => {
    if (typeof e === 'number') {
      newArr.push(e);
    } 
  });
  return newArr;
}
console.log(filterList([1, 2, 3, "x", "y", 10]));
*/

// (19) ----------------------------------------------------------------------
// Cree una función que tome dos argumentos (elemento, tiempos). 
// El primer argumento (elemento) es el elemento que necesita repetirse,
// mientras que el segundo argumento (veces) es la cantidad de veces que
// se debe repetir el elemento. Devuelve el resultado en una matriz.

// repeat(13, 5) ➞ [13, 13, 13, 13, 13]
// --------------------------------------------------------------------------
/*
const repeat = (e, times) => {
  let newArr = [];
  for (var i = 0; i < times; i++) {
    newArr.push(e);
  }
  return newArr;
}
console.log(repeat(13, 5));
*/

// (20) ----------------------------------------------------------------------
// Escriba una función, .vreplace () que extienda el prototipo de cadena 
// reemplazando todas las vocales en una cadena con una vocal especificada.

// "apples and bananas".vreplace("u") ➞ "upplus und bununus"
// --------------------------------------------------------------------------

function isVowel(char) {
  return 'aeiou'.includes(char);
}

String.prototype.vreplace = function (char) {
  let newString = '';
  for (var i = 0; i < this.length; i++) {
    if (isVowel(this[i])) {
      newString += char;
    } else {
      newString += this[i];
    }
  }
  return newString;
};
console.log("apples and bananas".vreplace("u"));