function removeActive() {
    document.querySelector(".red").classList.remove("active");
    document.querySelector(".yellow").classList.remove("active");
    document.querySelector(".green").classList.remove("active");
}

function red() {
    removeActive();
    document.querySelector(".red").classList.add("active");
    setTimeout(redAndYellow, 5 * 1000);
}

function redAndYellow() {
    removeActive();
    document.querySelector(".red").classList.add("active");
    document.querySelector(".yellow").classList.add("active");
    setTimeout(green, 1.5 * 1000);
}

function green() {
    removeActive();
    document.querySelector(".green").classList.add("active");
    setTimeout(yellow, 4 * 1000);
}

function yellow() {
    removeActive();
    document.querySelector(".yellow").classList.add("active");
    setTimeout(red, 1000);
}

red();

// ********************************************** //

function error() {
    document.querySelector(".yellow2").classList.add("active");
    setTimeout(stopError, 500);
}

function stopError() {
    document.querySelector(".yellow2").classList.remove("active");
    setTimeout(error, 500);
}

error();