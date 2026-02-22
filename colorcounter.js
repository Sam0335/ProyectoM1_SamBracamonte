
let colorsArray = [];
let isShowingHSL = false;

// Estructura base
function generateColors() {
    const n = document.getElementById("BoxQuantity").value;

    colorsArray = [];
    for (i = 0; i < 9; i++){
        colorsArray[i] = generateRandomColor();
    }
    isShowingHSL = false;
    const ocultarColorType = document.getElementById("colorType");
    ocultarColorType.style.display = n > 0 ? "inline-block" : "none";
    displayColors(n);
}

// Generador de colores aleatorios HEX
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Convertir HEX a HSL
function hexToHSL(hex) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }
    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

// Cambiar entre HEX y HSL
function toggleColorType() {
    isShowingHSL = !isShowingHSL;
    const button = document.getElementById("colorType")
    const n = document.getElementById("BoxQuantity").value;

    button.textContent = isShowingHSL ? "Cambiar a HEX" : "Cambiar a HSL"
    displayColors(n);
}

// Colores dependiendo la cantidad seleccionada
function displayColors(n) {
    for (i = 0; i < 9; i++){
        const box = document.getElementById("colorBox" + (i+1));
        if (i < n) {
            box.style.backgroundColor = colorsArray[i];
            box.textContent = isShowingHSL ? hexToHSL(colorsArray[i]) : colorsArray[i];
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    }
}