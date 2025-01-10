
const grid = document.getElementById('grid');
const sizeButton = document.getElementById('sizeBtn');
const clearButton = document.getElementById('clearBtn');
const toggleButton = document.getElementById('toggleColor');


let useRandomColor = false; 

function createGrid(size) {
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('mouseover', () => {
            if (useRandomColor) {
                box.style.backgroundColor = getRandomRGB();
            } else {
                box.style.backgroundColor = 'black';
            }
        });

        grid.appendChild(box);
    }
}

function getRandomRGB() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

toggleButton.addEventListener('click', () => {
    useRandomColor = !useRandomColor;
    toggleButton.textContent = useRandomColor ? 'Переключить на черный' : 'Переключить на RGB';
});

let currentSize = 16;

sizeButton.addEventListener('click', () => {
    const newSize = prompt("Введите размер сетки (1-100):");
    if (newSize > 0 && newSize <= 100) {
        currentSize = newSize;
        createGrid(newSize);
    } else {
        alert("Пожалуйста, введите допустимый размер сетки.");
    }
});

createGrid(16);

clearButton.addEventListener('click', () => {
    createGrid(currentSize);
   });