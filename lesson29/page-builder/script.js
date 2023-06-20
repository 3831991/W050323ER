const styling = {
    backgroundColor: 'white',
    fontSize: '30px',
    padding: '16px',
    color: 'black',
};

// פונקציה שמגדירה את העיצוב הכללי של האתר
function syncStyle() {
    const page = document.querySelector(".page");

    for (const s in styling) {
        page.style[s] = styling[s];
    }
}

// פונקציה שמשנה את האובייקט של העיצוב ישירות מהאלמנטים
function changeStyle(key, value) {
    styling[key] = value;
    syncStyle();
}

const elementType = document.querySelector('.elementType');

// הצגת האופציות בהתאם לבחירת סוג האלמנט
elementType.addEventListener('change', ev => {
    const type = ev.target.value;

    document.querySelectorAll(".elements section:not(section:first-child)").forEach(el => {
        el.style.display = el.classList.contains(type) ? 'block' : 'none';
    });
});

// שינוי התצוגה בהתאם לתפריט העליון
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