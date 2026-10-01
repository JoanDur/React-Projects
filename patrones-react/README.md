# Patrones en React: callbacks, prop children y operador spread

Proyecto pequeño y **educativo** que trabaja con **componentes** y **props** en React, demostrando tres patrones fundamentales. Todo el código está comentado en español.

## Patrones demostrados

| Patrón                         | Dónde verlo        | Idea                                                                                                                                                                            |
| ------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Callbacks**               | `Contador` + `App` | El estado vive en el componente padre (`App`). El hijo (`Contador`) recibe funciones por props (`onIncrementar`, `onReiniciar`) y las "llama de vuelta" cuando ocurre un clic.  |
| **2. prop children**           | `Tarjeta`          | El componente `Tarjeta` dibuja un marco y coloca dentro todo lo que se escriba **entre sus etiquetas**, que llega mediante la prop especial `children`.                         |
| **3. Operador spread (`...`)** | `App` + `Perfil`   | Se usa para copiar un objeto sin mutarlo (`{ ...perfilBase, rol: ... }`), unir arreglos (`[...equipoA, ...equipoB]`) y pasar muchas props de golpe (`<Perfil {...persona} />`). |

## Estructura

```
patrones-react/
├── index.html   # Carga React, ReactDOM y Babel desde CDN; monta la app
├── app.jsx      # Componentes y los tres patrones (archivo principal)
├── styles.css   # Estilos de presentación
└── README.md    # Este archivo
```

## Cómo ejecutarlo

No requiere `npm install`. React, ReactDOM y Babel se cargan desde un CDN, así que basta con tener conexión a internet.

**Opción A — abrir el archivo directamente:**
Abre `index.html` en tu navegador (doble clic).

**Opción B — servidor local (recomendado):**
Desde la carpeta `patrones-react/`:

```bash
# con Python
python3 -m http.server 8000

# o con Node
npx serve .
```

Luego visita `http://localhost:8000`.

> Nota: Babel compila el JSX en el navegador, lo cual es perfecto para aprender/demostrar. Para un proyecto real conviene usar una herramienta de build como Vite.
