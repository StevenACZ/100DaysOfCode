// 1 
const sum = (a, b) => a + b;
console.log('Suma: ' + sum(5, 6));

// 2
const potencia = (a, b) => a ** b;
console.log('Potencia: ' + potencia(5, 6));

// 3
const sumCubos = (a, b, c) => {
  return a**3 + b**3 + c**3; 
};
console.log('Suma de cubos: ' + sumCubos(1, 5, 9));

// 4
const areaTriangulo = (b, h) => (b * h)/2;
console.log('Area de un triangulo: ' + areaTriangulo(3, 2));

// 5
const operacion = (n1, ope, n2) => {
  switch(ope) {
    case '+':
      return n1 + n2;
      break;
    case '-':
      return n1 - n2;
      break;
    case '/':
      return n1 / n2;
      break;
    case 'x':
      return n1 * n2;
      break;
    case '%':
      return n1 % n2;
      break;
    default:
      return 'Operacion no existente :(';
      break;
  }
}

console.log("Operaciones: " + operacion(2, '+', 2));

/* PREGUNTAS

1)  Una funcion se puede definir de muchas maneras:

1 - function name() {

}

2 - const name = function() {

}

3 - const name = () => {

}

2) Una funcion puede tener argumentos infinitos, y podemos recogerlos
con la propiedad rest ...rest en forma de array;
*/
