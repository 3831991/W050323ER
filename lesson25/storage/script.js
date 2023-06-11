function color(elem) {
    document.body.style.background = elem.value;
    document.cookie = elem.value;
}

if (document.cookie) {
    document.body.style.background = document.cookie;
}