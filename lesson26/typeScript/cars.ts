import { Person } from "./persons";

export interface Car {
    id: number;
    manufacture: string;
    name: string;
    model: number;
    color: string;
    topSpeed: number;
    km: number;
    horsePower: number;
    seats: number;
    convertible: boolean;
    testMonth: number;
    driver: Driver;
}

export interface Driver extends Person {
    licenseDate: string;
    licenseType: licenseTypes[];
}

export type licenseTypes = 'A2' | 'A1' | 'A' | 'B' | 'C1' | 'C' | 'D' | 'D1' | 'D2' | 'D3' | 'E' | '1';

const car: Car = {
    id: 1,
    manufacture: "Mazda",
    name: "5",
    model: 2016,
    color: "Green",
    topSpeed: 130,
    km: 5555555,
    horsePower: 200,
    seats: 19,
    convertible: true,
    testMonth: 6,
    driver: {
        id: 17,
        licenseDate: "1999-02-01",
        licenseType: ['A2', 'A1', 'B', '1'],
        firstName: "Paz",
        lastName: "Edri",
        birthday: "1996-01-01",
        phone: "050-050-6985",
        email: "abc@abc.com",
        city: "Nes tziona",
        address: "Vitragh",
    },
}