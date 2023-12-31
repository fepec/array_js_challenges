const btnChallengeOne = document.getElementById("btnChallenge1");
const btnChallengeTwo = document.getElementById("btnChallenge2");
const btnChallengeThree = document.getElementById("btnChallenge3");
const btnChallengeFour = document.getElementById("btnChallenge4");
const btnChallengeFive = document.getElementById("btnChallenge5");
const btnChallengeSix = document.getElementById("btnChallenge6");
const btnChallengeSeven = document.getElementById("btnChallenge7");
const btnChallengeEight = document.getElementById("btnChallenge8");

/**
 * Challenge 1: Mostrar contenidos de array con for
 * */
function challengeUno() {
  // Declarar array y poblarlo
  let frutas = ["albaricoque", "banano", "cereza", "dátil"];
  // Correr FOR hasta el último elemento y mostrar contenido en consola.
  for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
  }
}

/**
 * Challenge 2: Mostrar contenidos de array con forEach
 */
function challengeDos() {
  // Declarar array y poblarlo.
  let frutas = ["albaricoque", "banano", "cereza", "dátil"];
  // Correr FOR hasta el último elemento y mostrar contenido en consola.
  frutas.forEach((f) => {
    console.log(f);
  });
}

/**
 * Challenge 3: Crear un menú que se repita si se ingresa la opción equivocada.
 */

// Esta función pide los números sobre los cuales se hará la operación. Se utiliza en la función challengeTres().
function getNumber(textoPrompt) {
  let num = parseFloat(prompt(textoPrompt));
  while (isNaN(num)) {
    num = parseFloat(
      prompt(
        `¡OPCION ERRADA!\nPor favor ingrese sólo números.\nIntente de nuevo.\n${textoPrompt}`
      )
    );
  }
  return num;
}

function challengeTres() {
  // Pedimos el numero de operation entre 1 y 4  y lo convertimos a entero
  let operation = parseInt(
    prompt(
      "OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."
    )
  );

  // Validamos que la operación no sea errada o mayor 4 o menor que 1
  // isNan() nos permite validar el el valor de la variable es un NaN osea que no ingresaron numeros

  while (isNaN(operation) || operation > 4 || operation < 1) {
    operation = parseInt(
      prompt(
        "¡OPCIÓN ERRADA!\n\nOPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."
      )
    );
  }

  // Pedimos los numeros
  let num1 = getNumber("Ingrese numero 1.");
  let num2 = getNumber("Ingrese numero 2.");
  let result = 0;

  // Si todo lo anterior esta OK, hacemos las operationes matematicas
  switch (operation) {
    case 1:
      result = num1 + num2;
      alert("El resultado de la suma es: " + result);
      break;
    case 2:
      result = num1 - num2;
      alert(result);
      break;
    case 3:
      result = num1 * num2;
      alert("El resultado de la multiplicación es: " + result);
      break;
    case 4:
      if (num2 === 0) {
        alert("No es posible dividir por cero");
      } else {
        result = num1 / num2;
        alert("El resultado de la división es: " + result);
      }
      break;
  }
}

/**
 * Challenge 4: encontrar el número más grande en un array con for.
 */

function challengeCuatro() {
  const arrayEntrada = [45, 23, 67, 89, 12, 56];
  // Variable para almacenar valor más alto.
  let masAlto = arrayEntrada[0];

  // For para recorrer el array.
  for (let i = 0; i < arrayEntrada.length; i++) {
    console.log(`i: ${i} | aE: ${arrayEntrada[i]} | mA: ${masAlto} `);
    // comparar valor almacenado con valor de array[i].
    if (arrayEntrada[i] > masAlto) {
      masAlto = arrayEntrada[i];
    }
  }
  console.log(`El valor más alto es ${masAlto}`);
}

/**
 * Challenge 5: sumar los valores de un array con forEach
 */

function challengeCinco() {
  const arrayEntrada = [2, 4, 6, 8, 10];
  // variable para almacenar resultado
  let sumatoria = 0;

  arrayEntrada.forEach((a) => {
    sumatoria += a;
  });
  console.log(`La suma de todos los elementos es: ${sumatoria}`);
}

/**
 * Challenge 6: multiplicar cada elemento de un array por 2 y almacenar la respuesta en un nuevo array.
 */

function challengeSeis() {
  const arrayEntrada = [3, 7, 2, 8];
  let arraySalida = [];

  for (let i = 0; i < arrayEntrada.length; i++) {
    arraySalida[i] = arrayEntrada[i] * 2;
  }

  console.log(arraySalida);
}

/**
 * Challenge 7: crear un programa que sume los elementos pares.
 */
function challengeSiete() {
  const arrayEntrada = [1, 2, 7, 3, 10, 12];
  let sumaPares = 0;

  arrayEntrada.forEach((a) => {
    if (a % 2 === 0) {
      sumaPares += a;
    }
  });

  console.log(`La suma de los elementos pares es: ${sumaPares}`);
}

/**
 * Challenge 8: encontrar el primer número mayor a 50 en un array usando while.
 */

function challengeOcho() {
  const arrayEntrada = [30, 45, 60, 72, 48, 10];
  let i = 0;
    
  while (i <= arrayEntrada.length)  {
    // Condicional que mira si el valor de la posición i es mayor a 50.
    if (arrayEntrada[i] > 50) {
      console.log(
        `La posición ${i} | ${arrayEntrada[i]}, contiene el primer valor mayor a 50.`
      );
      // Si valor es mayor a 50, break. Ya no necesitamos recorrer más. 
      break;      
    }
    console.log(`i: ${i} v: ${arrayEntrada[i]}`);
    i++;    
  }
}

btnChallengeOne.onclick = function () {
  challengeUno();
};
btnChallengeTwo.onclick = function () {
  challengeDos();
};
btnChallengeThree.onclick = function () {
  challengeTres();
};
btnChallengeFour.onclick = function () {
  challengeCuatro();
};
btnChallengeFive.onclick = function () {
  challengeCinco();
};
btnChallengeSix.onclick = function () {
  challengeSeis();
};
btnChallengeSeven.onclick = function () {
  challengeSiete();
};
btnChallengeEight.onclick = function () {
  challengeOcho();
};
