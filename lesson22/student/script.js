/**
 * מחקלה לניהול סטודנט
 * @param fn שם פרטי
 * @param ln שם משפחה (לא חובה)
 */
class Student {
    firstName;
    lastName;
    date;

    // מחזיר את שם הסטודנט המלא
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // מחזרי ראשי תיבות של הסטודנט
    getInitials() {
        return `${this.firstName.slice(0, 1)}.${this.lastName.slice(0, 1)}.`;
    }

    // בנאי
    // אפשר להוסיף לכל מחלקה
    // מופעל מייד ביצירת מופע חדש מהמחלקה
    constructor(fn, ln = '') {
        this.firstName = fn;
        this.lastName = ln;
        this.date = new Date();

        console.log(fn, ln);
    }
}

const student1 = new Student("Bob");
const student2 = new Student("Shay", "Rabin");
const student3 = new Student("Adam", "Regev");
