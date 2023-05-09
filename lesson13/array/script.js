const students = [
    "אברהם מזרחי גיא",
    "בנדרקר סטיב",
    "גל תומר",
    "דוד יובל",
    "הרשקוביץ רותם",
    "זכרה מתן",
    "יוחנוק איתי",
    "כארם מאיקל כרם",
    "לוי אביתר",
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
    const elem = document.getElementById("output1");

    if (elem.innerHTML == "") {
        elem.innerHTML = students.join(", ");
    } else {
        elem.innerHTML = "";
    }
}

function showStudents2() {
    const elem = document.getElementById("output2");

    if (elem.innerHTML == "") {
        elem.innerHTML = students.join("<br>");
    } else {
        elem.innerHTML = "";
    }
}

function showStudents3() {
    const elem = document.getElementById("output3");

    if (elem.innerHTML == "") {
        elem.innerHTML = '<li>' + students.join("</li><li>") + '</li>';
    } else {
        elem.innerHTML = "";
    }
}

function showStudentByIndex() {
    const i = +document.getElementById("index").value;
    document.getElementById("output4").innerHTML = students[i];
}