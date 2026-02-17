
let colorsArray = [];
function generateColors() {
    colorsArray = [];
    for (i = 0; i < 9; i++){
        colorsArray[i] = generateRandomColor();
    }
    displayColors();
}
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function displayColors() {
    for (i = 0; i < 9; i++){
        document.getElementById("colorBox" + (i+1)).style.backgroundColor = colorsArray[i];}
}

const ColorQuantity = document.querySelectorAll("select")
