function imageChange(ev) {
    const file = ev.target.files[0];
    const allowed = ['image/jpg', 'image/jpeg', 'image/png'];

    if (!allowed.includes(file.type)) {
        alert("קובץ לא מורשה");
        return;
    }

    const reader = new FileReader();

    reader.onload = e => {
        const img = document.querySelector('img');
        img.src = e.target.result;
        img.style.display = 'block';
    }

    reader.readAsDataURL(file);
}

function getAllImages() {
    fetch("http://localhost:421/files")
    .then(res => res.json())
    .then(files => {
        files.forEach(x => {
            const img = document.createElement('img');
            img.src = `http://localhost:421/file/${x}`;
            img.className = 'mySlides';
            img.style.width = '100%';
            document.querySelector('.gallery').appendChild(img);
            showDivs(slideIndex);
        });
    });
}

let slideIndex = 1;

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let x = document.querySelectorAll(".mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}