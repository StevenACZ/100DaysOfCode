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

const objectToArray = (obj) => Object.entries(obj);
console.log(objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}));
