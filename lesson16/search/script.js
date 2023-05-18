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

function showStudents() {
    const elem = document.querySelector('.frame');
    // יצרנו אלמנט של רשימה
    const ul = document.createElement('ul');

    for (let i = 0; i < students.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = students[i];

        // הוספנו את הפריט לתוך הרשימה
        ul.appendChild(li);
    }

    // הוספנו את הרשימה לתוך האלמנט
    elem.appendChild(ul);
}

// הפעלת הפונקציה בטעינת הדף
showStudents();

function search() {
    // מילת חיפוש
    const word = document.querySelector('input').value;
    // קיבלנו את הרשימה
    const ul = document.querySelector('ul');
    // איפסנו את הרשימה
    ul.innerHTML = '';

    for (let i = 0; i < students.length; i++) {
        let studentName = students[i];

        // אם מילת החיפוש קיימת בשם הסטודנט, אנחנו מוסיפים אותו לרשימה
        if (studentName.includes(word)) {
            const li = document.createElement('li');

            /*** בונוס!!!!!!!!!!!!!!!!!!!!!!!!!!!! ****/
            // צבענו את מילת החיפוש בשם הסטודנט
            if (word) {
                studentName = studentName.split(word).join(`<mark>${word}</mark>`);
            }

            li.innerHTML = studentName;
            ul.appendChild(li);
        }
    }
}