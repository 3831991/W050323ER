export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    birthday: string;
    phone: string;
    email: string;
    city: string;
    address: string;
}

// אובייקט מסוג Person
const person1: Person = {
    id: 0,
    firstName: "",
    lastName: "",
    birthday: "",
    phone: "",
    email: "",
    city: "",
    address: ""
};

// אובייקט מסוג Person
const person2: Person = {
    id: 0,
    firstName: "",
    lastName: "",
    birthday: "",
    phone: "",
    email: "",
    city: "",
    address: ""
};

// מערך של Person
const arr: Person[] = [person1, person2];