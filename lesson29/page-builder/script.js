//#region עיצוב כללי 
/****************************************************/
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
/*****************************************************************/
//#endregion

//#region שינוי תפריט 
/****************************************************/
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
/****************************************************/
//#endregion

//#region יצירת האלמנט
function addElement() {
    // סוג האלמנט (לפי ה-HTML)
    const type = elementType.value;

    let tagName = type;

    if (type == "title") {
        tagName = document.querySelector("#headerType").value;
    }
    
    // האלמנט החדש
    const newElem = document.createElement(tagName);

    // התוכן שיוצג בתוך האלמנט
    const value = document.querySelector("#value").value;

    if (type == 'input') {
        newElem.type = document.querySelector("#inputType").value;
        newElem.value = value;
    } else {
        newElem.innerHTML = value;
    }

    const fontSize = document.querySelector(`.${type} #fontSize`);
    const padding = document.querySelector(`.${type} #padding`);
    const border = document.querySelector(`.${type} #border`);
    const color = document.querySelector(`.${type} #color`);
    const bg = document.querySelector(`.${type} #bg`);

    if (fontSize) {
        newElem.style.fontSize = fontSize.value + 'px';
    }

    if (padding) {
        newElem.style.padding = padding.value + 'px';
    }
    
    if (border) {
        newElem.style.border = border.value + 'px solid';
    }
    
    if (color) {
        newElem.style.color = color.value;
    }
    
    if (bg) {
        newElem.style.backgroundColor = bg.value;
    }

    document.querySelector(".page").appendChild(newElem);
}
//#endregion