const height = 40;
const width = 35;
const snake = [3, 2, 1, 0];
let head = snake[0];

const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

function createBoard() {
    for (let i = 0; i < height * width; i++) {
        const div = document.createElement('div');
        board.appendChild(div);
    }

    color();
}

function color() {
    // Get all board elements.
    const divs = document.querySelectorAll('.board div');

    // Remove the class "Active" from all elements.
    divs.forEach(elem => elem.classList.remove('active'));

    // Add the class "Active" to the element of the snake.
    snake.forEach(num => divs[num].classList.add('active'));
}