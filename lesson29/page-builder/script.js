const styling = {
    backgroundColor: 'white',
    fontSize: '30px',
    padding: '16px',
    color: 'black',
};

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