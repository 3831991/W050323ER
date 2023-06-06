class Person {
    id = null;
    firstName = '';
    lastName = '';
    phone = '';
    email = '';
    city = '';
    birthday = '';

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getPerson() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phone,
            email: this.email,
            city: this.city,
            birthday: this.birthday,
        };
    }

    getAge() {
        const rest = new Date() - new Date(this.student.birthday);
        return Math.floor(rest / (1000 / 60 / 60 / 24 / 365) * 10) / 10;
    }
}

class Student extends Person {
    
}

class Teacher {

}

class Director {

}

const student = new Student();
