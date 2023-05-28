const numbers = [27,27,41,37,29,54,6,95,22,63,33,34,68,42,99,61,46,41,79,9,59,59,49,17,8,31,49,70,31,71];

const tasks = [
    {
        title: 'יש להציג את סכום המערך',
        result: '',
    },
    {
        title: 'יש להציג את ממוצע המערך',
        fn: () => {
            
        },
    },
    {
        title: 'יש להציג את המספר הגדול שבמערך',
        fn: () => {
            
        },
    },
];

const frameElem = document.querySelector('.frame');

tasks.forEach(task => {
    const div = document.createElement('div');
    div.className = 'task';

    const h2 = document.createElement('h2');
    h2.innerHTML = task.title;

    div.appendChild(h2);

    frameElem.appendChild(div);
})