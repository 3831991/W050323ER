import './Contact.css';
import { useState } from 'react';

export default function Contact() {
    const [sent, setSent] = useState(false);
    
    function submit(ev) {
        ev.preventDefault();
        const { fullName, phone, email, message } = ev.target.elements;

        const obj = {
            fullName: fullName.value,
            phone: phone.value,
            email: email.value,
            message: message.value,
        };

        fetch("https://api.shipap.co.il/contact", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj),
        })
        .then(res => res.json())
        .then(data => {
            setSent(true);
        });
    }

    return (
        <div className="Contact">
            <h2>טופס יצירת קשר</h2>

            {
                sent ?
                <h3>הטופס נשלח בהצלחה!</h3> :
                <form onSubmit={submit}>
                    <label>
                        שם מלא:
                        <input type="text" id="fullName" />
                    </label>

                    <label>
                        טלפון:
                        <input type="tel" id="phone" />
                    </label>

                    <label>
                        אימייל:
                        <input type="email" id="email" />
                    </label>

                    <label>
                        הודעה:
                        <textarea id="message"></textarea>
                    </label>

                    <button>שלח</button>
                </form>
            }
            
        </div>
    )
}