# Ejercicios de Lógica con JavaScript

## Descripción
Proyecto desarrollado para el **Bootcamp Frontend - Módulo 4 - AE4.3** que contiene tres ejercicios de lógica implementados en JavaScript con interfaz web interactiva.

## Ejercicios Incluidos

### Ejercicio 1: Evaluador de Números
- **Objetivo:** Evaluar si un número tiene probabilidad de ganar en un juego de azar
- **Reglas:** 
  - Rango válido: números del 1 al 100
  - Números favorables: mayores a 5 y menores o iguales a 15 (6, 7, 8, 9, 10, 11, 12, 13, 14, 15), o números 55 y 70
- **Resultado:** "El número ingresado tiene opciones de ganar" o "El número ingresado no es favorable"

### Ejercicio 2: Año Bisiesto
- **Objetivo:** Determinar si un año es bisiesto según el calendario Gregoriano
- **Reglas:** 
  - Divisible entre 4 Y no divisible entre 100
  - O bien, divisible entre 400
  - Validación: año mayor o igual a 0
- **Resultado:** "Es un año bisiesto" o "No es un año bisiesto"

### Ejercicio 3: Evaluador de Set de Tenis
- **Objetivo:** Ayudar al periodista Perio Dista a determinar el resultado de un set de tenis
- **Reglas:**
  - Ganar con 6 o más juegos y diferencia mayor o igual a 2
  - Si empate a 6, el ganador llega a 7
  - Detecta resultados inválidos
- **Resultados:** "A ganó el set", "B ganó el set", "El set todavía no termina", o "El resultado es inválido"

## Tecnologías Utilizadas
- **HTML5** - Estructura y contenido
- **CSS3** - Estilos y diseño responsivo
- **JavaScript ES6** - Lógica de programación y interactividad
- **Alerts & Prompts** - Interfaz de usuario

## Estructura del Proyecto
```
problemas-if/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos del proyecto
│   └── js/
│       └── script.js       # Lógica JavaScript
└── README.md               # Este archivo
```

## Cómo Usar
1. Abrir `index.html` en cualquier navegador web moderno
2. Hacer clic en el botón del ejercicio que deseas probar
3. Ingresar los datos solicitados en los prompts
4. Ver el resultado en una ventana de alerta

## Casos de Prueba Recomendados

### Ejercicio 1 (Números):
- `6` → "Tiene opciones de ganar"
- `10` → "Tiene opciones de ganar"
- `15` → "Tiene opciones de ganar"
- `55` → "Tiene opciones de ganar" 
- `70` → "Tiene opciones de ganar"
- `5` → "No es favorable"
- `16` → "No es favorable"
- `25` → "No es favorable"

### Ejercicio 2 (Años):
- `2024` → "Es bisiesto"
- `1900` → "No es bisiesto"
- `2000` → "Es bisiesto"
- `2023` → "No es bisiesto"

### Ejercicio 3 (Tenis):
- `6, 4` → "A ganó el set"
- `7, 6` → "A ganó el set"
- `6, 6` → "Set no termina"
- `5, 3` → "Set no termina"
- `8, 6` → "Resultado inválido"
- `7, 3` → "Resultado inválido"

## Autor
Desarrollado como parte del Bootcamp Frontend

## Licencia
MIT License

Copyright (c) 2025 Bootcamp Frontend

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
