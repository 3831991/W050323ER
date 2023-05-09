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
    document.getElementById("output1").innerHTML = students.join(", ");
}

function showStudents2() {
    document.getElementById("output2").innerHTML = students.join("<br>");
}

function showStudents3() {
    document.getElementById("output3").innerHTML = '<li>' + students.join("</li><li>") + '</li>';
}