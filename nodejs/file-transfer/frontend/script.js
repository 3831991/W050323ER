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