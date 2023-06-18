const width = 4;
const height = 4;
const length = width * height;
const divs = [];
let options = [];
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

        // אירוע המופעל במעבר עכבר
        div.addEventListener("mouseover", ev => {
            const empty = divs.find(el => el.innerHTML == '');
            empty.classList.remove('active');

            if (options.includes(i)) {
                empty.classList.add('active');
            }
        });

        // אירוע המופעל בעזיבת העכבר
        div.addEventListener("mouseout", ev => {
            const empty = divs.find(el => el.innerHTML == '');
            empty.classList.remove('active');
        });

        // אירוע המופעל בלחיצה על
        div.addEventListener("click", ev => {
            const elem = ev.target;

            if (options.includes(i)) {
                const empty = divs.find(el => el.innerHTML == '');
                empty.classList.remove('active');
                empty.innerHTML = elem.innerHTML;
                elem.innerHTML = "";
                checkAllOptions();
            }
        });
    }

    checkAllOptions();
}

function checkAllOptions() {
    const emptyIndex = divs.findIndex(div => div.innerHTML == '');
    options = [];
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
}