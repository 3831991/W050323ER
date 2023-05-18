const task1 = document.querySelector('#task1');
const task2 = document.querySelector('#task2');
const task3 = document.querySelector('#task3');
const task4 = document.querySelector('#task4');

task1.querySelector('button').addEventListener('click', function() {
    const rand = Math.random();
    const res = Math.floor(rand * 50) + 1;
    task1.querySelector('p').innerHTML = res;
});

task2.querySelector('button').addEventListener('click', function() {
    const max = task2.querySelector("input").value;
    const rand = Math.random();
    const res = Math.floor(rand * max) + 1;
    task2.querySelector('p').innerHTML = res;
});

task3.querySelector('button').addEventListener('click', function() {
    const min = +task3.querySelector("#min").value;
    const max = +task3.querySelector("#max").value;
    
    const rand = Math.random();
    const res = Math.floor(rand * (max - min + 1)) + min;
    task3.querySelector('p').innerHTML = res;
});

const chars = ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ל","מ","נ","ס","ע","פ","צ","ק","ר","ש","ת","ך","ם","ן","ף","ץ"];

task4.querySelector('button').addEventListener('click', function() {
    const len = +task4.querySelector("input").value;
    let str = "";

    for (let i = 0; i < len; i++) {
        const rand = Math.floor(Math.random() * chars.length);
        str += chars[rand];

        if (i % 6 === 0) {
            str += " ";
        }
    }

    task4.querySelector('p').innerHTML = str;
});