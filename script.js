const container = document.getElementById('container');
const clear = document.getElementById('clear');
const dimensions = document.getElementById('dimensions');
const eraser = document.getElementById('eraser');
const dimensionsLabel = document.querySelector('label[for=dimensions]');
const rainbow = document.getElementById('rainbow');
const colorInput = document.getElementById('colors');

dimensionsLabel.textContent = `Resolution: ${dimensions.value} X ${dimensions.value}`

const numberOfSquares = 256;
for (let i = 0; i < numberOfSquares; i++) {
        const grid = document.createElement('div');
        grid.classList.add("square");

        grid.addEventListener('mousedown', function () {
            grid.style.backgroundColor = `${colorInput.value}`;
            });

        grid.addEventListener('mouseover', function (event) {
            if (event.buttons === 1) {
                grid.style.backgroundColor = `${colorInput.value}`;
            }
        });

    container.appendChild(grid);
}

function updateSquareWidth(newWidth) {
    container.style.setProperty('--square-width', newWidth);
}

function givePrompt() {
    const userNumber = dimensions.value;
    const numberOfSquares =  userNumber * userNumber;
    for (let i = 0; i < numberOfSquares; i++) {
        const grid = document.createElement('div');
        grid.classList.add("square");

        grid.addEventListener('mousedown', function () {
            grid.style.backgroundColor = `${colorInput.value}`;
            });

        grid.addEventListener('mouseover', function (event) {
            if (event.buttons === 1) {
                grid.style.backgroundColor = `${colorInput.value}`;
            }
        });

    container.appendChild(grid);
    }

updateSquareWidth(`${100 / Math.sqrt(numberOfSquares)}%`);
}

function clearContainer() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function erase() {
    const grid = document.querySelectorAll('.square');
    grid.forEach(function (grid) {
        grid.addEventListener('mousedown', function () {
            grid.style.backgroundColor = 'white';
            });
    
        grid.addEventListener('mouseover', function () {
            if (event.buttons === 1) {
                grid.style.backgroundColor = 'white';
                }
        });
    })
}

function makeRainbow() {
    const grid = document.querySelectorAll('.square');
    grid.forEach(function (grid) {
        grid.addEventListener('mousedown', function () {
            let randomR = Math.floor(Math.random() * 256);
            let randomB = Math.floor(Math.random() * 256);
            let randomG = Math.floor(Math.random() * 256);
            grid.style.backgroundColor = `rgb(${randomR},${randomB},${randomG})`;
            });
    
        grid.addEventListener('mouseover', function (event) {
            if (event.buttons === 1) {
                let randomR = Math.floor(Math.random() * 256);
                let randomB = Math.floor(Math.random() * 256);
                let randomG = Math.floor(Math.random() * 256);
                grid.style.backgroundColor = `rgb(${randomR},${randomB},${randomG})`;
                }
        });
    })
}

function changeColor() {
    const grid = document.querySelectorAll('.square');
    grid.forEach(function(grid) {
        grid.addEventListener('mousedown', function () {
            grid.style.backgroundColor = `${colorInput.value}`;
            });
        grid.addEventListener('mouseover', function (event) {
            if (event.buttons === 1) {
                grid.style.backgroundColor = `${colorInput.value}`;
            }
        });
    });
}

dimensions.addEventListener('input',function(event) {
    clearContainer();
    givePrompt();
    dimensionsLabel.textContent = `Resolution: ${dimensions.value} X ${dimensions.value}`
});

clear.addEventListener('click',function () {
    const grid = document.querySelectorAll('.square');
    grid.forEach(function (grid) {
        grid.style.backgroundColor = 'white'
    })
});

eraser.addEventListener('change', () => {
    if (eraser.checked) {
        erase();
        if (rainbow.checked) {
            rainbow.checked = false
        }
    } else {
        changeColor();
    }
});

rainbow.addEventListener('change', () => {
    if (rainbow.checked) {
        makeRainbow();
        if (eraser.checked) {
            eraser.checked = false
        }
    } else {
        changeColor();
    }
});

