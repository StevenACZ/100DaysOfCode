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

const sumTot = (...rest) => rest.reduce((a, b) => a + b);
console.log(sumTot(3,5,3,1,10));
