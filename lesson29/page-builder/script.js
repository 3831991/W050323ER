const styling = {
    backgroundColor: 'white',
    fontSize: '30px',
    padding: '16px',
    color: 'black',
};

const elementStructures = [
    {
        id: 'title',
        title: 'כותרת',
    },
    {
        id: 'text',
        title: 'תיבת טקסט',
    },
    {
        id: 'input',
        title: 'תיבת קלט',
    },
    {
        id: 'button',
        title: 'לחצן',
    },
];

const elementType = document.querySelector('.elementType');

elementStructures.forEach(item => {
    const options = document.createElement('option');
    options.innerHTML = item.title;
    options.value = item.id;
    elementType.appendChild(options)
});

elementType.addEventListener('change', ev => {
    const type = ev.target.value;

    document.querySelectorAll(".elements section:not(section:first-child)").forEach(el => {
        el.style.display = el.classList.contains(type) ? 'block' : 'none';
    });
});

function syncStyle() {
    const page = document.querySelector(".page");

    for (const s in styling) {
        page.style[s] = styling[s];
    }
}

function changeStyle(key, value) {
    styling[key] = value;
    syncStyle();
}

document.querySelectorAll("nav a").forEach(a => {
    // הוספת אירוע לחיצה על התפריט
    a.addEventListener('click', ev => {
        // לבטל את האקטיב מכולם + הסתרת כל האלמנטים
        document.querySelectorAll("nav a").forEach(el => {
            el.classList.remove('active');
            document.querySelector(el.id).style.display = 'none';
        });

        // צביעת התפריט הנוכחי
        ev.target.classList.add('active');
        // הצגת האלמנט הנוכחי
        document.querySelector(ev.target.id).style.display = 'block';
    });
});