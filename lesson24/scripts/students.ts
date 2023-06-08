class StudentClass {
    private student: Student;

    constructor(student: Student) {
        this.student = student;
    }
    
    getFullName() {
        return `${this.student.firstName} ${this.student.lastName}`;
    }

    getAge() {
        const rest = +new Date() - +new Date(this.student.birthday);
        return Math.floor(rest / 1000 / 60 / 60 / 24 / 365 * 10) / 10;
    }

    getAvgGrades() {
        const sum = this.student.grades.reduce((res, n) => res += n, 0);
        return Math.round(sum / this.student.grades.length);
    }
}

const item = new StudentClass({
    id: 0,
    grades: [108, 4, 130, 34, 124, 11, 144, 85, 82, 80],
    birthday: "2000-01-01",
    firstName: 'Tomer',
    isActive: false,
    lastName: 'Gal',
});

console.log(item.getAge());
console.log(item.getAvgGrades());
console.log(item.getFullName());


interface Student {
    id: number;
    firstName: string;
    lastName: string;
    birthday: string;
    grades: number[];
    isActive: boolean;
    gender?: "male" | "female";
}


const rotem: Student = {
    id: 1234564789,
    firstName: 'Rotem',
    lastName: 'Hershkovitz',
    birthday: '1997-07-10',
    grades: [100, 98, 100],
    isActive: true,
}

const maya: Student = {
    id: 9658658,
    firstName: 'Maya',
    lastName: 'Steinberg',
    birthday: '1982-01-21',
    grades: [100, 99, 100],
    isActive: true,
}

const rotemClass = new StudentClass(rotem);
const mayaClass = new StudentClass(maya);