const length = 30;
const height = 30;

const elem = document.querySelector('.board');
const snake = [3, 2, 1, 0];
let head = snake[0];

for (let i = 0; i < 900; i++) {
    const div = document.createElement('div');

    elem.appendChild(div);
}

function color() {
    const divs = elem.querySelectorAll('div');

    divs.forEach(el => {
        el.classList.remove('active');
    });

    snake.forEach(index => {
        divs[index].classList.add('active');
    });
}

color();

function moveSnake() {
    snake.pop();
    snake.unshift(head);
    color();
}

function up() {
    
}

function right() {

}

function down() {
    head += length;
    moveSnake();
}

function left() {
    head++;
    moveSnake();
}

window.addEventListener('keydown', ev => {
    ev.preventDefault();

    switch (ev.key) {
        case 'ArrowUp': up(); break;
        case 'ArrowRight': right(); break;
        case 'ArrowDown': down(); break;
        case 'ArrowLeft': left(); break;
    }
});