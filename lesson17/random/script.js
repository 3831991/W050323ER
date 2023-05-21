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

const students_1 = [];
const students_2 = [];
const students_3 = [];

const studentLength = students.length;

for (let i = 0; i < studentLength; i++) {
    const rand = Math.floor(Math.random() * students.length);
    const student = students[rand];
    students.splice(rand, 1);

    if (i % 3 == 0) {
        students_1.push(student);
    } else if (i % 3 == 1) {
        students_2.push(student);
    } else if (i % 3 == 2) {
        students_3.push(student);
    }
}

document.querySelector('#myDiv ul:first-child').innerHTML = '<li>' + students_1.join('</li><li>') + '</li>';
document.querySelector('#myDiv ul:nth-child(2)').innerHTML = '<li>' + students_2.join('</li><li>') + '</li>';
document.querySelector('#myDiv ul:last-child').innerHTML = '<li>' + students_3.join('</li><li>') + '</li>';