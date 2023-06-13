import { Person } from './persons';

export interface Teacher extends Person {
    salary: number;
    startDate: string;
    modules: Modules[];
}

export type Modules = 'HTML' | 'CSS' | 'SCSS' | 'Bootstrap' | 'JavaScript' | 'TypeScript' | 'React' | 'NodeJS' | 'MySQL' | 'MongoDB';

const person: Person = {
    id: 12,
    firstName: 'Gleb',
    lastName: 'Regev',
    birthday: '1950-01-01',
    phone: '053-965-9554',
    email: 'abc@abc',
    city: '',
    address: ''
}

const teacher1: Teacher = {
    ...person,
    city: 'first to Tzion',
    salary: 15000,
    startDate: '2020-01-01',
    modules: ['HTML', 'CSS', 'SCSS', 'Bootstrap'],
}