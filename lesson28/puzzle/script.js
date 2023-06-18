const width = 4;
const height = 4;
const length = width * height;
const divs = [];
const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

function createBoard() {
    // יצרנו מערך עם מספרים
    const numbers = new Array(length).fill().map((n, i) => i + 1);

    for (let i = 0; i < length; i++) {
        const div = document.createElement('div');
        const rand = Math.floor(Math.random() * numbers.length);

        // רק אם זה לא המספר האחרון
        if (numbers[rand] !== length) {
            div.innerHTML = numbers[rand];
        }

        numbers.splice(rand, 1);
        board.appendChild(div);
        divs.push(div);
    }
}

function checkAllOptions() {
    const emptyIndex = divs.findIndex(div => div.innerHTML == '');
    const options = [];

    const top = emptyIndex - width;
    const bottom = emptyIndex + width;
    const right = emptyIndex - 1;
    const left = emptyIndex + 1;

    if (top >= 0) {
        options.push(top);
    } 
    
    if (bottom < length) {
        options.push(bottom);
    }

    if (emptyIndex % width != 0) {
        options.push(right);
    }

    if (emptyIndex % width != width - 1) {
        options.push(left);
    }

    console.log(options)
}