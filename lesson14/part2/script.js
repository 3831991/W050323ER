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