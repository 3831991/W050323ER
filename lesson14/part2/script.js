function showEven() {
    const numbers = [];

    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            numbers.push(i);
        }
    }

    // אופציה נוספת
    // for (let i = 0; i <= 100; i += 2) {
    //     numbers.push(i);
    // }

    document.getElementById('output1').innerHTML = numbers.join(', ');
}

function isPrime() {
    const num = +document.getElementById('num1').value;
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.getElementById('output2').innerHTML = 'ראשוני';
    } else {
        document.getElementById('output2').innerHTML = 'לא ראשוני';
    }
}

function showDividers() {
    const num = +document.getElementById('num2').value;
    const numbers = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            numbers.push(i);
        }
    }

    document.getElementById('output3').innerHTML = numbers.join(", ");
}

function showNumbersUnder() {
    const num = +document.getElementById('num3').value;
    const numbers = [];

    for (let i = 1; i <= num; i++) {
        numbers.push(i);
    }

    document.getElementById('output4').innerHTML = numbers.join(", ");
}

function showNumbersBetween() {
    const num1 = +document.getElementById('num4').value;
    const num2 = +document.getElementById('num5').value;
    const numbers = [];

    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);

    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }

    document.getElementById('output5').innerHTML = numbers.join(", ");
}