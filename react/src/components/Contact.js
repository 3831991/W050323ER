import './Contact.css';
import { useState } from 'react';
import { ContactSchema } from './Contact.joi';

export default function Contact() {
    const [sent, setSent] = useState(false);
    const [errors, setErrors] = useState({});

    const obj = {
        fullName: '',
        phone: '',
        email: '',
        message: '',
    };

    function submit(ev) {
        ev.preventDefault();
        
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

    const handleError = (ev) => {
        const { fullName, phone, email, message } = ev.target.closest('form').elements;

        obj.fullName = fullName.value;
        obj.phone = phone.value;
        obj.email = email.value;
        obj.message = message.value;

        const schema = ContactSchema.validate(obj, { abortEarly: false });
        const errors = {};

        for (const e of schema.error.details) {
            errors[e.context.key] = e.message;
        }

        setErrors(errors);
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
                        <input type="text" id="fullName" className={errors.fullName ? 'fieldError' : ''} onChange={handleError} />
                    </label>

                    { errors.fullName ? <div className='fieldError'>{errors.fullName}</div> : '' }

                    <label>
                        טלפון:
                        <input type="tel" id="phone" onChange={handleError} />
                    </label>

                    <label>
                        אימייל:
                        <input type="email" id="email" onChange={handleError} />
                    </label>

                    <label>
                        הודעה:
                        <textarea id="message" onChange={handleError}></textarea>
                    </label>

                    <button>שלח</button>
                </form>
            }
        </div>
    )
}