
let colorsArray = [];
let isHSLMode = false;

// Estructura base
function generateColors() {
    const n = document.getElementById("boxQuantity").value;

// Alerta de seleccionar valor
if (n == -1) {
    alert("Por favor seleccionar una cantidad de color válida");
    return;
}

    colorsArray = [];
    for (let i = 0; i < 9; i++) {
        colorsArray[i] = isHSLMode ? generateRandomHSL() : generateRandomHEX();
    }

    // Ocultar texto y botón de "Cambiar entre HEX y HSL"
    const ocultarColorType = document.getElementById("colorType");
    const ocultarTexto = document.getElementById("colorTypeText")
    ocultarColorType.style.display = n > 0 ? "inline-block" : "none";
    ocultarTexto.style.display = n > 0 ? "block" : "none";

    displayColors(n);
    mostrarToast();
}

// Toast al generar paleta / Copiar al portapapeles
function mostrarToast(mensaje = "¡Paleta generada exitosamente!") {
    const toast = document.getElementById("toast");
    toast.textContent = mensaje
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}

// Generador de colores aleatorios HEX
function generateRandomHEX() {
    const letters = '0123456789ABCDEF';
    let HEX = '#';
    for (let i = 0; i < 6; i++) {
        HEX += letters[Math.floor(Math.random() * 16)];
    }
    return HEX;
}

// Generador de colores aleatorios HSL
function generateRandomHSL() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 101);
    const l = Math.floor(Math.random() * 101);
    return `hsl(${h}, ${s}%, ${l}%)`;
}

// Cambiar entre HEX y HSL
function toggleColorType() {
    const n = document.getElementById("boxQuantity").value;
    isHSLMode = !isHSLMode;

    for (let i = 0; i < 9; i++) {
        colorsArray[i] = isHSLMode ? generateRandomHSL() : generateRandomHEX();
    }
    document.getElementById("colorType").textContent = isHSLMode ? "Cambiar a HEX" : "Cambiar a HSL";
    displayColors(n);
}

// Mostrar colores dependiendo la cantidad seleccionada
function displayColors(n) {
    for (let i = 0; i < 9; i++){
        const box = document.getElementById("colorBox" + (i+1));
        if (i < n) {
            box.style.backgroundColor = colorsArray[i];
            box.textContent = colorsArray[i];
            box.style.display = "flex";
            box.onclick = () => {
                navigator.clipboard.writeText(colorsArray[i]);
                mostrarToast("Copiado al portapapeles");
            }
        } else {
            box.style.display = "none";
        }
    }
}