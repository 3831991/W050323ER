String.prototype.gimatria = function() {
    let num = 0;

    for (const x of this) {
        switch (x) {
            case "א": num += 1; break;
            case "ב": num += 2; break;
            case "ג": num += 3; break;
            case "ד": num += 4; break;
            case "ה": num += 5; break;
            case "ו": num += 6; break;
            case "ז": num += 7; break;
            case "ח": num += 8; break;
            case "ט": num += 9; break;
            case "י": num += 10; break;
            case "כ": num += 20; break;
            case "ך": num += 20; break;
            case "ל": num += 30; break;
            case "מ": num += 40; break;
            case "ם": num += 40; break;
            case "נ": num += 50; break;
            case "ן": num += 50; break;
            case "ס": num += 60; break;
            case "ע": num += 70; break;
            case "פ": num += 80; break;
            case "ף": num += 80; break;
            case "צ": num += 90; break;
            case "ץ": num += 90; break;
            case "ק": num += 100; break;
            case "ר": num += 200; break;
            case "ש": num += 300; break;
            case "ת": num += 400; break;
        }
    }

    return num;
};

///////////////////////////////////////////////////////////////////////
const numbers = [108, 4, 130, 34, 124, 11, 144, 85, 82, 80, 123, 25, 128, 78, 36, 30, 90, 23, 84, 147, 143, 18, 62, 96, 63, 129, 15, 109, 52, 119, 138, 65, 18, 135, 69, 89, 13, 70, 109, 22];

// אופציה 1
Array.prototype.sum = function() {
    return this.reduce((res, n) => res += n, 0);
};

[88, 99, 66, 55].sum();
numbers.sum();

// אופציה 2
function sum(numbers) {
    return numbers.reduce((res, n) => res += n, 0);
}

sum([88, 99, 66, 55]);
sum(numbers);

// אופציה 3
function sum(...numbers) {
    return numbers.reduce((res, n) => res += n, 0);
}

sum(88, 99, 66, 55);
sum(...numbers);
///////////////////////////////////////////////////////////////////////

Array.prototype.avg = function() {
    const sum = this.reduce((res, n) => res += n, 0);
    return Math.round(sum / this.length);
}