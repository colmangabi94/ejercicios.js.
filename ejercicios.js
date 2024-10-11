// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine(): {
    const result = 10 >= 9; // Comprueba si 10 es mayor o igual que 9
    console.log(result);   // Imprime el resultado en consola
}

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero(): {
   const  result = 0 === 0; // Comprueba si 0 es igual a 0
   console.log(result);   // Imprime el resultado en consola

}  
   
// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven(): {
    const result = (7 > 8) && (7 < 10); // Comprueba si 7 es mayor que 8 y menor que 10
    console.log(result); // Imprime el resultado en consola
}


// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct(): {
  const  price = 1500; // Precio del producto
  const discount = 0.25; // Descuento del 25%
  const money = 1150; // Dinero que tienes
  const result = money >= price * (1 - discount); // Verifica si puedes comprar el
  console.log(result);   // Imprime si puedes o no
}
// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable(): {
    const  mensaje = "Hola Mundo"; // Crea una variable llamada `mensaje`
    console.log(mensaje);   // Imprime la variable en consola
}

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable():  {
    const   resultado = 2 + 3; // Crea una variable llamada `resultado`
    console.log(resultado);   // Imprime la variable en consola
}

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant(): {
    const  IS_DISABLED = true; // Crea una constante llamada `IS_DISABLED`
    console.log(IS_DISABLED);   // Imprime la constante en consola

}

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable(): {
    let   capacidad = null; // Crea una variable llamada `capacidad`
    console.log(capacidad);   // Imprime la variable en consola

}

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable(): {
    let    dinero = undefined; // Crea una variable llamada `dinero`
    console.log(dinero);   // Imprime la variable en consola

}

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType(): {
    let    userName = "Juan"; // Crea una variable llamada `userName`
    const   tipo = typeof userName; // Verifica el tipo de la variable
    console.log(tipo);   // Imprime el tipo de dato en consola

}

// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString(): {
    let dogId = "12345"; // Crea una variable llamada `dogId`
    const tipo = typeof dogId; // Verifica el tipo de la variable
    console.log(tipo);   // Imprime el tipo de dato en consola

}

// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage(): {
   console.log  ("Hola, mundo!"); // Imprime un mensaje en la consola

}

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge(): {
const edad  = 30; // Crea una variable llamada `edad`
console.log(edad);   // Imprime el valor de la variable en consola

}

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion(): {
const  version = 2024; // Crea una variable llamada `version`
console.log(`La versión de JavaScript es ${version}`); // Imprime el mensaje y el valor

}

// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine;  
    compareZeroAndZero;   
    compareSeven;   

    canBuyProduct;
    createMessageVariable;
    createSumVariable; 
    createDisabledConstant,
    createNullVariable;
    createUndefinedVariable;
    checkUserNameType;
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};