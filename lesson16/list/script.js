let students = [
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

function showList() {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';

    for (let i = 0; i < students.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = students[i];
        ul.appendChild(li);
    }
}

showList();

function random() {
    const arr = [];
    const len = students.length;

    for (let i = 0; i < len; i++) {
        const rand = Math.floor(Math.random() * students.length);

        arr.push(students[rand]);
        students.splice(rand, 1);
    }

    students = arr;
    showList();
}

function sortASC() {
    students.sort();
    showList();
}

function sortDESC() {
    students.sort();
    students.reverse();
    showList();
}

function raffle() {
    
}