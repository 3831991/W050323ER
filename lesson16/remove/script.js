const students = [
    "אברהם מזרחי גיא",
    "בנדרקר סטיב",
    "גל תומר",
    "דוד יובל",
    "הרשקוביץ רותם",
    "זכריה מתן",
    "יוחנוק איתי",
    "מאיקל כרם",
    "לוי אביתר",
    "לרנר אלישיב",
    "פצ׳ן מריה",
    "צ׳וגאי גלב",
    "צבטקוב מקסים",
    "קבלו אלון",
    "קזס עידו",
    "קטייב ליטל",
    "רבין שי",
    "רגב אדם ",
    "שטיינברג מאיה",
    "שיבלי יסמין",
    "שליט לארס",
    "שפירא אביב"
];

const elem = document.querySelector('.frame');
const ul = document.createElement('ul');

for (let i = 0; i < students.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = students[i];
    
    li.addEventListener('click', function(ev) {
        // מוסיף קלאס אם לא קיים ולהיפך
        ev.target.classList.toggle('magniv');

        // מחיקת האלמנט
        // ev.target.remove();
    });

    ul.appendChild(li);
}

elem.appendChild(ul);