// Un operador lógico es una expresión que devuelve un valor booleano
// para controlar el flujo de ejecución. Los operadores lógicos permiten
// combinar operaciones de comparación que devuelven true o false.

// Ejemplo: 
// Los números mayores a 1 y menores o iguales a 100, existen números que
// tienen más probabilidad de ganar. Esto aplica cuando un número es menor
// o igual a 15 y mayor a 5, o bien si el número es el 70 o el 55.
// Escribe una función que reciba un número e identifique si el número
// ingresado es de mayor probabilidad. Ingresa el número que se evaluará
// en tu programa y da la solución apropiada en JavaScript.

// El número será el que proporciona el usuario por medio de un prompt.
// El programa debe mostrar un mensaje "El número ingresado es favorable" en
// caso contrario.

function evaluarNumero() {
    let numero = parseInt(prompt("Ingresa un número:"));
    
    if (isNaN(numero)) {
        alert('Por favor, ingresa un número válido.');
        return;
    }
    
    if (numero >= 1 && numero <= 100) {
        if ((numero > 5 && numero < 15) || numero === 70 || numero === 55) {
            alert(`El número ingresado tiene opciones de ganar`);
        } else {
            alert(`El número ingresado no es favorable`);
        }
    } else {
        alert(`El número ${numero} se encuentra fuera del rango permitido (1 - 100).`);
    }
}

// Problema 2:
// Un año es bisiesto en el calendario Gregoriano si es divisible entre 4 y no
// divisible entre 100, o bien, si es divisible entre 400.
// Requerimiento:
// Desarrolla un algoritmo que reciba un número que represente a un año, e
// indique si corresponde a un año bisiesto o no. Debes validar que el valor
// ingresado sea un número mayor o igual a cero; de no ser así, no se puede
// realizar operación adicional alguna.

function evaluarAnioBisiesto(anio) {
    if (anio >= 0) {
        if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
            alert(`Es un año bisiesto. ${anio}`);
        } else {
            alert(`No es un año bisiesto. ${anio}`);
        }
    } else {
        alert(`Año ingresado no está permitido. ${anio}`);
    }
}

// Función auxiliar para solicitar año al usuario
function evaluarAnio() {
    let anio = parseInt(prompt("Ingresa un año:"));
    if (isNaN(anio)) {
        alert('Por favor, ingresa un número válido.');
        return;
    }
    evaluarAnioBisiesto(anio);
}

// Problema 3:
// Un periodista llamado Perio Dista, debe relatar un partido de tenis, pero no
// conoce las reglas del deporte. En particular, no ha logrado aprender cómo
// saber si un set ya terminó, y quién lo ganó.
//
// Un partido de tenis se divide en sets. Para ganar un set, un jugador debe
// ganar 6 juegos, pero además debe haber ganado por lo menos dos juegos
// más que su rival. Si el set está empatado a 5 juegos, el ganador es el
// primero en llegar a 7. Si está empatado a 6, se juega un tie-break.

// Función basada en la imagen proporcionada
function resultadoTenis(juegosA, juegosB) {
    if (Number.isInteger(juegosA) && Number.isInteger(juegosB)) {
        // Verificar si el jugador A ganó el set
        if ((juegosA >= 6 && juegosA - juegosB >= 2) || (juegosA === 7 && juegosB === 6)) {
            console.log("A ganó el set", 'a:', juegosA, 'b:', juegosB);
            alert('A ganó el set');
        } 
        // Verificar si el jugador B ganó el set
        else if ((juegosB >= 6 && juegosB - juegosA >= 2) || (juegosB === 7 && juegosA === 6)) {
            console.log("B ganó el set", 'a:', juegosA, 'b:', juegosB);
            alert('B ganó el set');
        }
        // Verificar si es resultado inválido
        else if ((juegosA > 7 || juegosB > 7) || 
                 (juegosA === 7 && juegosB < 5) || 
                 (juegosB === 7 && juegosA < 5) ||
                 (juegosA > 6 && juegosB > 6 && Math.abs(juegosA - juegosB) > 1)) {
            console.log('El resultado es inválido (por ejemplo, 8-6 o 7-3)', 'a:', juegosA, 'b:', juegosB);
            alert('El resultado es inválido (por ejemplo, 8-6 o 7-3)');
        }
        // En cualquier otro caso, el set todavía no termina
        else {
            console.log('El set todavía no termina', 'a:', juegosA, 'b:', juegosB);
            alert('El set todavía no termina');
        }
    } else {
        console.log('Los números ingresados no son válidos o el tipo de datos es incorrecto.', 'a:', juegosA, 'b:', juegosB);
        alert('Los números ingresados no son válidos o el tipo de datos es incorrecto.');
    }
}

function evaluarSetTenis(jugadorA, jugadorB) {
    // Llamar directamente a la función mejorada que incluye todas las validaciones
    resultadoTenis(jugadorA, jugadorB);
}

// Función auxiliar para solicitar puntajes al usuario
function evaluarTenis() {
    let jugadorA = parseInt(prompt("Ingresa los juegos ganados por el Jugador A:"));
    let jugadorB = parseInt(prompt("Ingresa los juegos ganados por el Jugador B:"));
    
    evaluarSetTenis(jugadorA, jugadorB);
}
