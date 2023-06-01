const fn1 = () => {}; // fn1() - undefined
const fn2 = a => {}; // fn2(8) - undefined
const fn3 = (a, b) => a + b; // fn3(8, 5) - 13
const fn4 = x => x; // fn4(10) - 10
const fn5 = () => console.log("banana"); // fn5() - console-log: banana
const fn6 = () => 12; // fn6() - 12
const fn7 = x => console.log(x); // fn7(88) - console-log: 88

/********* הדגמה כפונקציות רגילות **********/
function fun1() {

}

function fun2(a) {
    
}

function fun3(a, b) {
    return a + b;
}

function fun4(x) {
    return x;
}

function fun5() {
    console.log("banana");
}

function fun6() {
    return 12;
}

function fun7(x) {
    console.log(x);
}
