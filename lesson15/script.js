const numbers = [27,27,41,37,29,54,6,95,22,63,33,34,68,42,99,61,46,41,79,9,59,59,49,17,8,31,49,70,31,71,7,73,8,12,19,24,14,82,68,59,77,90,24,47,64,12,67,70,68,91,23,34,51,26,25,81,83,89,98,59,4,22,7,54,75,85,71,72,1,91,17,48,59,47,46,99,81,79,68,45,75,50,78,16,38,1,63,19,25,9,17,55,38,17,73,47,75,68,2,16];

document.getElementById("numbers").innerHTML = numbers.join(", ");

function sum() {
    let res = 0;

    for (let i = 0; i < numbers.length; i++) {
        res += numbers[i];
    }

    document.getElementById("output1").innerHTML = res;
}