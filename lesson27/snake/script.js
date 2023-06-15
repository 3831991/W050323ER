const height = 40;
const width = 30;
const snake = [10,9,8,7,6,5,4,3, 2, 1, 0];
let head = snake[0];
let direction = 'left';
let isGameOver = false;
let random;
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
        board.appendChild(div);
    }

    color();
    setApple();
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
        // elem.classList.remove('topLeftRadius');
        // elem.classList.remove('topRightRadius');
        // elem.classList.remove('bottomRightRadius');
        // elem.classList.remove('bottomLeftRadius');
    });

    // Add the class "Active" to the element of the snake.
    snake.forEach((num, i) => {
        divs[num].classList.add('active');

        // const prev = snake[i + 1];
        // const next = snake[i - 1];

        // const corners = {
        //     [width + 1]: 'topLeftRadius',
        //     [1 - width]: 'topRightRadius',
        //     [-1 - width]: 'bottomRightRadius',
        //     [width - 1]: 'bottomLeftRadius',
        // };

        // if (prev && next) {
        //     const diffrence = next - prev;

        //     if (corners[diffrence]) {
        //         divs[num].classList.add(corners[diffrence]);
        //     }
        // }

        // if (true) {
        //     divs[num].classList.add('topLeftRadius');
        // } else if (true) {
        //     divs[num].classList.add('topRightRadius');
        // } else if (true) {
        //     divs[num].classList.add('bottomRightRadius');
        // } else if (true) {
        //     divs[num].classList.add('bottomLeftRadius');
        // }
    });

    divs[head].classList.add('head');
    divs[head].classList.add(direction);
}

function move(dir) {
    if (isGameOver) {
        return;
    }

    const divs = document.querySelectorAll('.board div');

    if (dir === 'up') {
        if (direction === 'down') {
            return;
        }

        head -= width;

        if (!divs[head]) {
            gameOver();
            return;
        }
    } else if (dir === 'down') {
        if (direction === 'up') {
            return;
        }

        head += width;

        if (!divs[head]) {
            gameOver();
            return;
        }
    } else if (dir === 'left') {
        if (direction === 'right') {
            return;
        }

        head++;

        if (leftBoundaries.includes(head)) {
            gameOver();
            return;
        }
    } else if (dir === 'right') {
        if (direction === 'left') {
            return;
        }

        head--;

        if (rightBoundaries.includes(head)) {
            gameOver();
            return;
        }
    }

    if (snake.includes(head)) {
        gameOver();
        return;
    }

    direction = dir;
    snake.unshift(head);

    if (head === random) {
        const audio = document.createElement('audio');
        audio.src = "Pebble.ogg";
        audio.play();
        setApple();
    } else {
        snake.pop();
    }

    color();
    startAuto();
}

function gameOver() {
    isGameOver = true;
    clearInterval(interval);
    const audio = document.createElement('audio');
    audio.src = "Country_Blues.ogg";
    audio.play();
    
    setTimeout(() => {
        alert("מצטער מאוד, אך המשחק נפסל... 😒");
        location.reload();
    }, 50);
}

function setApple() {
    const divs = document.querySelectorAll('.board div');
    random = Math.floor(Math.random() * divs.length);

    if (snake.includes(random)) {
        setApple();
    } else {
        divs.forEach(elem => elem.classList.remove('apple'));
        divs[random].classList.add('apple');
    }
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
        case 'Escape': clearInterval(interval); break;
    }
});