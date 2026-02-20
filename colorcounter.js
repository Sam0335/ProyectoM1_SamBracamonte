
let colorsArray = [];

function generateColors() {
    const n = document.getElementById("BoxQuantity").value;

    colorsArray = [];
    for (i = 0; i < 9; i++){
        colorsArray[i] = generateRandomColor();
    }
    displayColors(n);
}

// Generador de colores HEX
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Colores dependiendo la cantidad seleccionada
function displayColors(n) {
    for (i = 0; i < 9; i++){
        const box = document.getElementById("colorBox" + (i+1));
        if (i < n) {
            box.style.backgroundColor = colorsArray[i];
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    }
}