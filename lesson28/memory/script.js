const width = 4;
const height = 4;
const length = width * height;
const divs = [];
let isGameOver = false;

const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

function createBoard() {
    for (let i = 0; i < length; i++) {
        const div = document.createElement('div');
        board.appendChild(div);
        divs.push(div);

        const span = document.createElement('span');
        span.innerHTML = i + 1;
        div.appendChild(span);

        // אירוע המופעל בלחיצה על העכבר
        div.addEventListener("click", ev => {
            if (isGameOver) {
                return;
            }

            ev.target.classList.add('showing')
        });
    }
}


function gameOver() {
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