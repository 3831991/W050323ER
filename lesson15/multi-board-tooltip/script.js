for (let y = 1; y <= 10; y++) {
    for (let x = 1; x <= 10; x++) {
        const div = document.createElement("div");
        div.innerHTML = x * y;
        div.setAttribute("ido", `${y} x ${x} = ${x * y}`);
        document.getElementById("board").appendChild(div);
    }
}