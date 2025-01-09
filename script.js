
const grid = document.getElementById('grid');
const sizeButton = document.getElementById('sizeBtn');
const clearButton = document.getElementById('clearBtn');

// Функция для создания сетки
function createGrid(size) {
    grid.innerHTML = ''; // Очистка сетки
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black'; // Изменение цвета ячейки при наведении
        });
        grid.appendChild(cell);
    }
}



// Событие для кнопки изменения сетки
sizeButton.addEventListener('click', () => {
    const newSize = prompt("Введите размер сетки (1-100):");
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Пожалуйста, введите допустимый размер сетки.");
    }
});

// Создание первоначальной сетки
createGrid(16);

// Событие для кнопки очистки
clearButton.addEventListener('click', () => {
    createGrid(100); // Изменение цвета ячейки при наведении
   });


    // rgbButton.addEventListener('click', () => {
    //     function randomColor(min, max) {
    //         return Math.floor(Math.random() * (max - min)) + min;
    //       }
    //       content.onmouseover = function(event) {
    //         console.log(event.target);
    //         event.target.style.backgroundColor = `rgb(${randomColor(0 , 256)}, ${randomColor(0 , 256)}, ${randomColor(0 , 256)})`;
    //       }
    //       content.onmouseout = function(event) {
    //         console.log(event.target);
    //         event.target.style.backgroundColor = '';
    //       }
    // })
