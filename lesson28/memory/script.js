const amount = 12;
const numbers = [];
let attamps = 0;
let timer = 0;

let timerInterval = setInterval(() => {
    timer++;

    const date = new Date(timer * 1000);
    const m = date.getMinutes();
    const s = date.getSeconds();

    document.querySelector('.timer').innerHTML = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
}, 1000);

const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(6, 1fr)`;

for (let i = 1; i <= amount; i++) {
    numbers.push(i, i);
}

for (let i = 1; i <= amount * 2; i++) {
    // אינדקס רנדומלי מהמערך
    const rand = Math.floor(Math.random() * numbers.length);
    
    const div = document.createElement("div");
    div.innerHTML = `<span>${numbers[rand]}</span>`;
    board.appendChild(div);

    // בכדי שלא יהיו כפילויות, לאחר שהשתמשנו במיקום מסויים, הסרנו אותו מהמערך
    numbers.splice(rand, 1);

    div.addEventListener("click", ev => {
        if (ev.target.classList.contains('hidden')) {
            return;
        }

        if (board.querySelectorAll(".showing").length == 2) {
            return;
        }

        ev.target.classList.add("showing");

        board.querySelectorAll(".cheat").forEach(elem => elem.classList.remove('cheat'));
        const elements = board.querySelectorAll("div:not(.showing)");

        for (const elem of elements) {
            if (elem.textContent == ev.target.textContent) {
                elem.classList.add("cheat");
                break;
            }
        }

        check();
    });
}

function check() {
    const cards = board.querySelectorAll(".showing");

    if (cards.length == 2) {
        const first = cards[0];
        const last = cards[1];
        document.querySelector(".counter").innerHTML = ++attamps;

        if (first.textContent == last.textContent) {
            setTimeout(() => {
                first.classList.remove("showing");
                last.classList.remove("showing");
                
                first.classList.add("hidden");
                last.classList.add("hidden");

                checkIsComplete();
            }, 1000);
        } else {
            setTimeout(() => {
                first.classList.remove("showing");
                last.classList.remove("showing");
            }, 1500);
        }
    }
}

function checkIsComplete() {
    const cards = board.querySelectorAll("div:not(.hidden)");

    if (!cards.length) {
        clearInterval(timerInterval);

        confetti({
            particleCount: 100,
            spread: 70,
            decay: 0.9,
            origin: { y: 0.6 }
        });
    }
}