const width = 4;
const height = 4;
const length = width * height;
const divs = [];
let isGameOver = false;
let options = [];
let counter = 0;
let timer = 0;
let timerInterval;
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
            if (isGameOver) {
                return;
            }

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

        // אירוע המופעל בלחיצה על העכבר
        div.addEventListener("click", ev => {
            if (isGameOver) {
                return;
            }

            const elem = ev.target;

            if (options.includes(i)) {
                const empty = divs.find(el => el.innerHTML == '');
                empty.classList.remove('active');
                empty.innerHTML = elem.innerHTML;
                elem.innerHTML = "";
                document.querySelector(".counter").innerHTML = ++counter;
                checkAllOptions();
            }
        });
    }

    checkAllOptions();

    timerInterval = setInterval(() => {
        const date = new Date(timer * 1000);
        const s = date.getSeconds();
        const m = date.getMinutes();
        document.querySelector(".timer").innerHTML = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
        timer++;
    }, 1000);
}

function checkAllOptions() {
    divs.forEach(el => el.classList.remove('empty', 'option'));
    const emptyIndex = divs.findIndex(div => div.innerHTML == '');
    options = [];
    const top = emptyIndex - width;
    const bottom = emptyIndex + width;
    const right = emptyIndex + 1;
    const left = emptyIndex - 1;

    if (top >= 0) {
        options.push(top);
    } 
    
    if (bottom < length) {
        options.push(bottom);
    }

    if (emptyIndex % width != 0) {
        options.push(left);
    }
    
    if (emptyIndex % width != width - 1) {
        options.push(right);
    }

    divs[emptyIndex].classList.add('empty');
    options.forEach(index => divs[index].classList.add('option'));

    isGameOver = divs.slice(0, -1).every((el, i) => el.innerHTML == i + 1);

    if (isGameOver) {
        gameOver();
    }
}

function cheat() {
    divs.forEach((elem, i) => elem.innerHTML = i + 1);
    divs[divs.length - 1].innerHTML = '';
    checkAllOptions();
}

function gameOver() {
    clearInterval(timerInterval);
    board.classList.add('game-over');

    confetti({
        particleCount: 100,
        spread: 70,
        decay: 0.9,
        origin: { y: 0.6 }
    });

    const winner = document.createElement("div");
    winner.classList.add("winner");
    winner.innerHTML = "ניצחת";

    document.body.appendChild(winner);

    setTimeout(() => {
        location.reload();
    }, 5 * 1000);
}

// אם לוחצים 3 פעמים על המקש "ב" במקלדת, זה מפעיל את הפונקציה שמרמה
let keyConunter = 0;

window.addEventListener("keyup", ev => {
    if (isGameOver) {
        return;
    }

    if (ev.key == "c" || ev.key == "ב") {
        keyConunter++;

        if (keyConunter >= 3) {
            cheat();
        }

        setTimeout(() => {
            keyConunter = 0;
        }, 1500);
    }
})