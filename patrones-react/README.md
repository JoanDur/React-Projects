# Patrones en React: callbacks, prop children y operador spread

Proyecto pequeño y **educativo** en React (con **Vite**) que trabaja con **componentes** y **props**, demostrando tres patrones fundamentales. Todo el código está comentado en español.

## Patrones demostrados

| Patrón                         | Dónde verlo                           | Idea                                                                                                                                                                            |
| ------------------------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Callbacks**               | `components/Contador.jsx` + `App.jsx` | El estado vive en el componente padre (`App`). El hijo (`Contador`) recibe funciones por props (`onIncrementar`, `onReiniciar`) y las "llama de vuelta" cuando ocurre un clic.  |
| **2. prop children**           | `components/Tarjeta.jsx`              | El componente `Tarjeta` dibuja un marco y coloca dentro todo lo que se escriba **entre sus etiquetas**, que llega mediante la prop especial `children`.                         |
| **3. Operador spread (`...`)** | `App.jsx` + `components/Perfil.jsx`   | Se usa para copiar un objeto sin mutarlo (`{ ...perfilBase, rol: ... }`), unir arreglos (`[...equipoA, ...equipoB]`) y pasar muchas props de golpe (`<Perfil {...persona} />`). |

## Estructura

```
patrones-react/
├── index.html            # HTML base; carga /src/main.jsx
├── package.json          # Dependencias y scripts (npm)
├── vite.config.js        # Configuración de Vite + plugin de React
├── .gitignore
└── src/
    ├── main.jsx          # Punto de entrada: monta <App />
    ├── App.jsx           # Componente principal (coordina los 3 patrones)
    ├── styles.css        # Estilos de presentación
    └── components/
        ├── Tarjeta.jsx   # Patrón 2: prop children
        ├── Contador.jsx  # Patrón 1: callbacks
        └── Perfil.jsx    # Usado con el patrón 3: spread
```

## Cómo ejecutarlo

Requiere **Node.js 18+**.

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo
npm run dev
```

Luego abre la URL que muestra la terminal (normalmente `http://localhost:5173`).

Otros scripts:

```bash
npm run build     # genera la versión de producción en /dist
npm run preview   # sirve el build de producción localmente
```
