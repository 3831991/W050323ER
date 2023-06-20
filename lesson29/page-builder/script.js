const styling = {
    backgroundColor: 'white',
    fontSize: '30px',
    padding: '16px',
    color: 'black',
};

function syncStyle() {
    const page = document.querySelector(".page");

    for (const s in styling) {
        page.style[s] = styling[s];
    }
}

function changeStyle(key, value) {
    styling[key] = value;
    syncStyle();
}

document.querySelectorAll("nav a").forEach(a => {
    a.addEventListener('click', ev => {
        document.querySelectorAll("nav a").forEach(el => {
            el.classList.remove('active');
            document.querySelector(el.id).style.display = 'none';
        });

        ev.target.classList.add('active');
        document.querySelector(ev.target.id).style.display = 'block';
    });
});