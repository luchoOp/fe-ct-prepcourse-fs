/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   x= x + y;
   return x;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   x= x - y;
   return x;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   x = x / y;
   return x;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   x = x * y;
   return x;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   x = x % y;
   return x;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
