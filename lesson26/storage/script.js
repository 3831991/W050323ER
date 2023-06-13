let students = [];
let cities = [];

// בודק האם המערך של הסטודנטים שמור בדפדפן
if (localStorage.students) {
    // אם כן, הוא שם את הנתונים במשתנה שלנו
    students = JSON.parse(localStorage.students);
} else {
    // אם הנתונים לא נמצאים בדפדפן, הוא פונה לשרת 
    fetch("server/students.json")
        .then(r => r.json())
        .then(data => {
            // כשקיבלנו את הנתונים אנחנו שמים אותם במשתנה ושומרים בדפדפן
            students = data;
            localStorage.students = JSON.stringify(data);
        });
}

if (localStorage.cities) {
    cities = JSON.parse(localStorage.cities);
} else {
    fetch("server/cities.json")
    .then(r => r.json())
    .then(data => {
        cities = data;
        localStorage.cities = JSON.stringify(data);
    });
}

// localStorage: אחסון הנתונים במחשב של הלקוח - זמין לאותו אתר בלבד
// sessionStorage: שמירת הנתונים במחשב של הלקוח עד לסיום הסשיין (בסגירת כל הכרטיסיות של האתר)