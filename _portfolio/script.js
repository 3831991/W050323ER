function send(ev) {
    ev.preventDefault();

    const form = ev.target;

    const data = {
        name: form.querySelector('[name=name]').value,
        email: form.querySelector('[name=email]').value,
        phone: form.querySelector('[name=phone]').value,
        message: form.querySelector('[name=message]').value,
    }

    localStorage.contact = JSON.stringify(data);
    location.href = 'contact-info.html';
}