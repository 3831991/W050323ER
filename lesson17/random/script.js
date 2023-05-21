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

const ul1 = document.createElement("ul");
const ul2 = document.createElement("ul");
const ul3 = document.createElement("ul");
const myDiv = document.querySelector("#myDiv");
const studentLength = students.length;

for (let i = 0; i < studentLength; i++) {
    const rand = Math.floor(Math.random() * students.length);

    const li = document.createElement("li");
    li.innerHTML = students[rand];

    students.splice(rand, 1);

    if (i % 3 == 0) {
        ul1.appendChild(li);
    } else if (i % 3 == 1) {
        ul2.appendChild(li);
    } else if (i % 3 == 2) {
        ul3.appendChild(li);
    }
}

myDiv.appendChild(ul1);
myDiv.appendChild(ul2);
myDiv.appendChild(ul3);