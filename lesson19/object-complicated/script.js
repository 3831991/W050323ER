const numbers = [27,27,41,37,29,54,6,95,22,63,33,34,68,42,99,61,46,41,79,9,59,59,49,17,8,31,49,70,31,71];

const tasks = [
    {
        title: 'יש להציג את סכום המערך',
        result: numbers.reduce((res, n) => res += n, 0),
    },
    {
        title: 'יש להציג את ממוצע המערך',
        result: Math.round(numbers.reduce((res, n) => res += n, 0) / numbers.length),

    },
    {
        title: 'יש להציג את המספר הגדול שבמערך',
        result: Math.max(...numbers),
    },
    {
        title: 'יש להציג את כל המספרים הגדולים מ-40',
        result: numbers.filter(n => n > 40).join(', '),
    },
];

const frameElem = document.querySelector('.frame');

// הצגת המערך
const p = document.createElement('p');
p.className = 'alert';
p.innerHTML = numbers.join(', ');
frameElem.appendChild(p);

tasks.forEach(task => {
    // יצירת מסגרת לכל משימה
    const div = document.createElement('div');
    div.className = 'task';

    // כותרת של המשימה
    const h2 = document.createElement('h2');
    h2.innerHTML = task.title;
    div.appendChild(h2);

    // אלמנט שמציג את התוצאה
    const p = document.createElement('p');
    p.innerHTML = task.result;
    div.appendChild(p);

    // הוספת המשימה לאתר
    frameElem.appendChild(div);
});