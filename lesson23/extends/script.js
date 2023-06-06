class Person {
    id          = null;
    firstName   = '';
    lastName    = '';
    phone       = '';
    email       = '';
    city        = '';
    birthday    = '';

    constructor(person) {
        this.id         = person.id;
        this.firstName  = person.firstName;
        this.lastName   = person.lastName;
        this.phone      = person.phone;
        this.email      = person.email;
        this.city       = person.city;
        this.birthday   = person.birthday;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        const rest = new Date() - new Date(this.birthday);
        return Math.floor(rest / 1000 / 60 / 60 / 24 / 365 * 10) / 10;
    }
}

class Student extends Person {
    grades = [];

    getAverage() {

    }

    getBestGrade() {

    }

    getAmountTests() {

    }
}

class Teacher extends Person {
    salary = 50000;
    startDate = '';
}

class Director extends Person { }


////////////////////// מימוש ///////////////////////

const student = new Student({
    id: 537,
    firstName: 'Aviv',
    lastName: 'Shapira',
    phone: '050-050-0500',
    email: 'abc@abc.abc',
    city: 'Kfar haruv',
    birthday: '2022-01-01',
});

const teacher = new Teacher({
    id: 777,
    firstName: 'Adam',
    lastName: 'Regev',
    phone: '050-050-1234',
    email: 'ocd@ocd.com',
    city: 'Shaked',
    birthday: '1997-07-22',
});

const director = new Director({
    id: 100,
    firstName: 'Lars',
    lastName: 'Shalit',
    phone: '050-050-9632',
    email: 'adhd@ocd.com',
    city: 'Kiryat Arba',
    birthday: '2003-10-04',
});
