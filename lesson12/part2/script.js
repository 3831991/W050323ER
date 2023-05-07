// פונקציה שמקבל 3 מספרים ומחזירה סיכום שלהם
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

const sumResult = sum(6, 12, 1000); // שימוש בפונקציה
console.log("sum:", sumResult); // הצגת התוצאה בקונסול

// פונקציה המקבלת מספר ומחזירה את המספר כולל מע"מ
function calcVat(num) {
    return num * 1.17;
}

const result = calcVat(1000); // שימוש בפונקציה
console.log("calcVat:", result); // הצגת התוצאה בקונסול

// פונקציה המקבלת שם פרטי ומשפחה, מחברת ביניהם וכותבת הודעת ברכה באלרט
function welcome(firstName, lastName) {
    alert(`Welcome ${firstName} ${lastName}!!!!!`);
}

welcome("Elyashiv", "Lerner"); // שימוש בפונקציה