import { Person } from "./persons";

export interface Player extends Person {
    height: number;
    level: Levels;
    displayName: string;
}

export enum Levels {
    beginner, // מַתחִיל
    intermediate, // ביניים
    advanced, // מִתקַדֵם
    expert, // מוּמחֶה
}

const player1: Player = {
    id: 15,
    height: 159,
    level: Levels.advanced,
    displayName: "Guest",
    firstName: "Ploni",
    lastName: "Almoni",
    birthday: "1977-02-02",
    phone: "050-398-6598",
    email: "abc@abc",
    city: "Jerusalem post",
    address: ""
}

const player2: Player = {
    id: 16,
    height: 151,
    level: Levels.beginner,
    displayName: "Guest",
    firstName: "Yuval",
    lastName: "David",
    birthday: "2002-02-02",
    phone: "050-398-6598",
    email: "abc@abc",
    city: "Jerusalem post",
    address: "",
}

const arr = [player1, player2];