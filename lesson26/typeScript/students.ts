import { Person } from "./persons";

export interface Student extends Person {
    grades: number[];
    startDate: string;
    tuition: number;
    certified: boolean;
}

const student1: Student = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    city: "San Francisco",
    address: "San Francisco 12",
    email: "john@gmail.com",
    phone: "050-05053509",
    birthday: "1989-12-01",
    startDate: "2009-12-01",
    tuition: 27000,
    certified: false,
    grades: [100, 100, 100, 97, 100, 98],
}

const students: Student[] = [
    {
        grades: [78,35,69],
        startDate: "",
        tuition: 0,
        certified: false,
        id: 0,
        firstName: "Adam",
        lastName: "Price",
        birthday: "2000-01-01",
        phone: "",
        email: "",
        city: "",
        address: ""
    },
    student1,
];