export class StudentClass {
    student: Student;

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

    }
}

export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    birthday: string;
    grades: number[];
    isActive: boolean;
    gender?: "male" | "female";
}

const item = new StudentClass({
    id: 0,
    grades: [108, 4, 130, 34, 124, 11, 144, 85, 82, 80],
    birthday: "",
    firstName: '',
    isActive: false,
    lastName: '',
});