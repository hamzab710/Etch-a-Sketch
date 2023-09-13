const container = document.getElementById('container');
const restart = document.getElementById('restart');
const clear = document.getElementById('clear');
const dimensions = document.querySelector('.dimensions');
const submit = document.querySelector('.submit');
const eraser = document.querySelector('.eraser');
const rainbow = document.getElementById('rainbow');

function clearContainer() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
const numberOfSquares = 256;
for (let i = 0; i < numberOfSquares; i++) {
        const grid = document.createElement('div');
        grid.classList.add("square");

        grid.addEventListener('mousedown', function () {
            grid.style.backgroundColor = 'black';
            });

        grid.addEventListener('mouseover', function () {
            if (event.buttons === 1) {
                grid.style.backgroundColor = 'black';
            }
        });

    container.appendChild(grid);
}

clear.addEventListener('click',function () {
    const grid = document.querySelectorAll('.square');
    grid.forEach(function (grid) {
        grid.style.backgroundColor = 'white'
    })
});

function updateSquareWidth(newWidth) {
    container.style.setProperty('--square-width', newWidth);
}

function givePrompt() {
    const userNumber = Number(dimensions.value);
    const numberOfSquares =  userNumber * userNumber;
    for (let i = 0; i < numberOfSquares; i++) {
        const grid = document.createElement('div');
        grid.classList.add("square");

        grid.addEventListener('mousedown', function () {
            grid.style.backgroundColor = 'black';
            });

        grid.addEventListener('mouseover', function () {
            if (event.buttons === 1) {
                grid.style.backgroundColor = 'black';
            }
        });

    container.appendChild(grid);
    }

updateSquareWidth(`${100 / Math.sqrt(numberOfSquares)}%`);
}

restart.addEventListener('click', function () {
    const dimensions = document.querySelector('.dimensions');
    const submit = document.querySelector('.submit');
    dimensions.style.display = 'inline';
    submit.style.display = 'inline';
})

submit.addEventListener('click',function () {
    clearContainer();
    givePrompt();
    const dimensions = document.querySelector('.dimensions');
    const submit = document.querySelector('.submit');
    dimensions.style.display = 'none';
    submit.style.display = 'none';
});

function erase() {
    const grid = document.querySelectorAll('.square');
    grid.forEach(function (grid) {
        grid.addEventListener('mousedown', function () {
            grid.style.backgroundColor = 'white';
            });
    
        grid.addEventListener('mouseover', function (event) {
            if (event.buttons === 1) {
                grid.style.backgroundColor = 'white';
                }
        });
    })
}

eraser.addEventListener('click', erase);

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

rainbow.addEventListener('click', makeRainbow);