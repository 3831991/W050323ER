class Student {
    constructor(student) {
        this.student = student;
    }

    student;

    getFullName() {
        return `${this.student.firstName} ${this.student.lastName}`;
    }

    getAge() {
        const current = new Date().getFullYear();
        const year = new Date(this.student.birthday).getFullYear();
        return current - year;

        // const rest = new Date() - new Date(this.student.birthday);
        // return Math.floor(rest / 1000 / 60 / 60 / 24 / 365 * 10) / 10;
    }

    getAverageTest() {
        const sum = this.student.grades.reduce((res, n) => res += n, 0);
        return Math.round(sum / this.student.grades.length);
    }

    getTestAmount() {
        return this.student.grades.length;
    }
}

const s = new Student({
    firstName: "יוסי",
    lastName: "אדלר",
    phone: "059-6506877",
    birthday: "2004-04-14",
    city: "חיפה",
    grades: [90, 80, 100, 95, 100, 100, 100],
});

console.log(s.getFullName());
console.log(s.getAge());
console.log(s.getAverageTest());
console.log(s.getTestAmount());
