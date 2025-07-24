# 📚 Ejercicios de Lógica con JavaScript

## 🎯 Descripción
Proyecto desarrollado para el **Bootcamp Frontend - Módulo 4 - AE4.3** que contiene tres ejercicios de lógica implementados en JavaScript con interfaz web interactiva.

## 🧩 Ejercicios Incluidos

### 🎲 **Ejercicio 1: Evaluador de Números**
- **Objetivo:** Evaluar si un número tiene probabilidad de ganar en un juego de azar
- **Reglas:** 
  - Rango válido: números del 1 al 100
  - Números favorables: > 5 y ≤ 15 (6, 7, 8, 9, 10, 11, 12, 13, 14, 15), o números 55 y 70
- **Resultado:** "El número ingresado tiene opciones de ganar" o "El número ingresado no es favorable"

### 📅 **Ejercicio 2: Año Bisiesto**
- **Objetivo:** Determinar si un año es bisiesto según el calendario Gregoriano
- **Reglas:** 
  - Divisible entre 4 Y no divisible entre 100
  - O bien, divisible entre 400
  - Validación: año ≥ 0
- **Resultado:** "Es un año bisiesto" o "No es un año bisiesto"

### 🎾 **Ejercicio 3: Evaluador de Set de Tenis**
- **Objetivo:** Ayudar al periodista Perio Dista a determinar el resultado de un set de tenis
- **Reglas:**
  - Ganar con 6+ juegos y diferencia ≥ 2
  - Si empate a 6, el ganador llega a 7
  - Detecta resultados inválidos
- **Resultados:** "A ganó el set", "B ganó el set", "El set todavía no termina", o "El resultado es inválido"

## 🛠️ Tecnologías Utilizadas
- **HTML5** - Estructura y contenido
- **CSS3** - Estilos y diseño responsivo
- **JavaScript ES6** - Lógica de programación y interactividad
- **Alerts & Prompts** - Interfaz de usuario

## 📁 Estructura del Proyecto
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

## 🚀 Cómo Usar
1. Abrir `index.html` en cualquier navegador web moderno
2. Hacer clic en el botón del ejercicio que deseas probar
3. Ingresar los datos solicitados en los prompts
4. Ver el resultado en una ventana de alerta

## 💻 Casos de Prueba Recomendados

### Ejercicio 1 (Números):
- `10` → "Tiene opciones de ganar"
- `15` → "Tiene opciones de ganar"
- `55` → "Tiene opciones de ganar" 
- `70` → "Tiene opciones de ganar"
- `25` → "No es favorable"
- `5` → "No es favorable"

### Ejercicio 2 (Años):
- `2024` → "Es bisiesto"
- `1900` → "No es bisiesto"
- `2000` → "Es bisiesto"

### Ejercicio 3 (Tenis):
- `6, 4` → "A ganó el set"
- `7, 6` → "A ganó el set"
- `8, 6` → "Resultado inválido"
- `5, 3` → "Set no termina"

## 👨‍💻 Autor
Desarrollado como parte del Bootcamp Frontend

## 📝 Licencia
Este proyecto es de uso educativo.
