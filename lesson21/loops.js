const numbers = [108, 4, 130, 34, 124, 11, 144, 85, 82, 80, 123, 25, 128, 78, 36, 30, 90, 23, 84, 147, 143, 18, 62, 96, 63, 129, 15, 109, 52, 119, 138, 65, 18, 135, 69, 89, 13, 70, 109, 22];

// המשימה לכתוב לקונסול את כל המספרים

/******** While **********/
// לולאה סטנדרטית שמשתמשים בה בד"כ כשאין תנאי עצירה ברור
let i = 0;

while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

/******** Do while **********/
// כמו הלולאה הקודמת רק שקודם כל הלולאה רצה וא בודקת את התנאי
// השתמשנו ב-x כי i תפוס
let x = 0;

do {
    console.log(numbers[x]);
    x++;
} while (x < numbers.length)

/******** For **********/
// לולאה שנועדה לרוץ לפי טווח מוגדר
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

/******** For in **********/
// לולאה שרצה על אובייקטים ומערכים
// המשתנה מייצג את האינדקס או המפתח
for (const i in numbers) {
    console.log(numbers[i]);
}

/******** For of **********/
// לולאה שרצה על מערכים ומחזירה בכל פעם את הערך
for (const num of numbers) {
    console.log(num);
}

/******** ForEach **********/
numbers.forEach(num => console.log(num));