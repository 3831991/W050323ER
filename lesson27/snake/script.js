const height = 30;
const width = 30;
const snake = [3, 2, 1, 0];
let head = snake[0];
let direction = 'left';
let interval;

const rightBoundaries = [];
const leftBoundaries = [];

// גבולות ימין
for (let i = 0; i < height; i++) {
    rightBoundaries.push(width * i - 1);
}

// גבולות שמאל
for (let i = 1; i <= height; i++) {
    leftBoundaries.push(width * i);
}

const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

function createBoard() {
    for (let i = 0; i < height * width; i++) {
        const div = document.createElement('div');
        div.innerHTML = i;
        board.appendChild(div);
    }

    color();
}

function color() {
    // Get all board elements.
    const divs = document.querySelectorAll('.board div');

    // Remove all classes.
    divs.forEach(elem => {
        elem.classList.remove('active');
        elem.classList.remove('head');
        elem.classList.remove('up');
        elem.classList.remove('right');
        elem.classList.remove('down');
        elem.classList.remove('left');
    });

    // Add the class "Active" to the element of the snake.
    snake.forEach(num => divs[num].classList.add('active'));

    divs[head].classList.add('head');
    divs[head].classList.add(direction);
}

function move(dir) {
    const divs = document.querySelectorAll('.board div');

    if (dir === 'up') {
        head -= width;

        if (!divs[head]) {
            alert("ימעפאן כפול")
        }
    } else if (dir === 'down') {
        head += width;
        
        if (!divs[head]) {
            alert("ימעפאן כפול")
        }
    } else if (dir === 'left') {
        head++;

        if (leftBoundaries.includes(head)) {
            alert("ימעפאן")
        }
    } else if (dir === 'right') {
        head--;

        if (rightBoundaries.includes(head)) {
            alert("ימעפאן")
        }
    }

    direction = dir;
    snake.unshift(head);
    snake.pop();
    color();
    startAuto();
}

function startAuto() {
    clearInterval(interval);
    interval = setInterval(() => move(direction), 200);
}

window.addEventListener('keydown', ev => {
    ev.preventDefault();

    // Checks which key was pressed.
    switch (ev.key) {
        case 'ArrowUp': move('up'); break;
        case 'ArrowRight': move('right'); break;
        case 'ArrowDown': move('down'); break;
        case 'ArrowLeft': move('left'); break;
    }
});