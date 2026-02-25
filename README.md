# Generador de Paleta de Colores

## Instrucciones de uso

1. Seleccionar la cantidad de colores deseada (6, 8 o 9) en el selector.
2. Hacer click en **Generar Paleta** para generar colores aleatorios.
3. Usar el botón **Cambiar a HSL / Cambiar a HEX** para alternar el formato.
4. Hacer click sobre cualquier caja de color para copiar su valor al portapapeles.

## Decisiones técnicas

- **Dos generadores independientes**: los colores HEX y HSL se generan con su propia lógica, sin conversión entre formatos. Al cambiar de formato se genera una paleta nueva.
- **Estado en variables globales**: `colorsArray` e `isHSLMode` mantienen el estado de la paleta activa sin necesidad de frameworks.
- **Toast reutilizable**: un único elemento `#toast` maneja tanto la confirmación de paleta generada como el copiado al portapapeles.
- **Estructura simple y limpia**: el proyecto utiliza HTML, CSS y JavaScript de manera semántica con estilo `camelCase`.

## Pasos para publicar y desplegar la página en GitHub Pages

**[!] Recomendable tener Git descargado.**

1. Crear un repositorio público en GitHub.
2. Subir el proyecto al repositorio.

    ↳ Abrir terminal.

    ↳ Ingresar los siguientes pasos uno por uno:
``` 
git init
git add .
git commit -m 'Initial commit'
git branch -m main
git remote add origin https://github.com/Sam0335/ProyectoM1_SamBracamonte.git
git push -u origin main 
```
3. Dentro del repositorio en Github, ir a `Settings > Pages`, seleccionar la rama principal como fuente y guardar.
4. La aplicación quedará disponible en `https://sam0335.github.io/ProyectoM1_SamBracamonte/`.

## Pasos para ejecutar la aplicación en local

**[!] Recomendable tener Git descargado.**

1. Clonar el repositorio en la terminal:
```
git clone https://github.com/Sam0335/ProyectoM1_SamBracamonte.git
```
2. Abrir `index.html` directamente en cualquier navegador moderno. No requiere instalación ni servidor.
```
index.html
    🡩 Abrir este archivo
CSS/style.css
script.js
```