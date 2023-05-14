const numbers = [];

function addToArray(ev) {
    // באובייקט של האוונט שקיבלנו - יש פרמטר שמביא לנו את האלמנט (target)
    const value = ev.target.value;

    // אנחנו מריצים את הקוד רק אם המשתמש לחץ על אנטר (Enter)
    // ורק אם יש ערך
    if (ev.keyCode === 13 && value) {
        numbers.push(+value);

        // איפסנו את האינפוט
        ev.target.value = "";
    }
}

function showArray() {
    document.getElementById("output1").innerHTML = numbers.join(", ");
}