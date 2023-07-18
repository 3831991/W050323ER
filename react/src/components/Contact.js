import './Contact.css';
import { useState } from 'react';
import { JOI_HEBREW } from './joi-hebrew';
import Joi from 'joi';

export default function Contact() {
    const [sent, setSent] = useState(false);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const contactSchema = Joi.object({
        fullName: Joi.string().min(3).max(30).required(),
        phone: Joi.string().min(3).max(30).required(),
        email: Joi.string().required(),
        message: Joi.string().min(3).max(500).required(),
    });

    function getObj(form) {
        const { fullName, phone, email, message } = form.elements;

        return {
            fullName: fullName.value,
            phone: phone.value,
            email: email.value,
            message: message.value,
        };
    }

    function submit(ev) {
        ev.preventDefault();
        
        fetch("https://api.shipap.co.il/contact", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(getObj(ev.target)),
        })
        .then(res => res.json())
        .then(() => {
            setSent(true);
        });
    }

    const handleError = (ev) => {
        const obj = getObj(ev.target.closest('form'));
        const schema = contactSchema.validate(obj, { abortEarly: false, messages: { he: JOI_HEBREW }, errors: { language: 'he' } });
        const errors = {};

        if (schema.error) {
            for (const e of schema.error.details) {
                errors[e.context.key] = e.message;
            }

            setIsValid(false);
        } else {
            setIsValid(true);
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
                        <input type="tel" id="phone" className={errors.phone ? 'fieldError' : ''} onChange={handleError} />
                    </label>

                    { errors.phone ? <div className='fieldError'>{errors.phone}</div> : '' }

                    <label>
                        אימייל:
                        <input type="email" id="email" className={errors.email ? 'fieldError' : ''} onChange={handleError} />
                    </label>
                    
                    { errors.email ? <div className='fieldError'>{errors.email}</div> : '' }

                    <label>
                        הודעה:
                        <textarea id="message" className={errors.message ? 'fieldError' : ''} onChange={handleError}></textarea>
                    </label>

                    { errors.message ? <div className='fieldError'>{errors.message}</div> : '' }

                    <button disabled={!isValid}>שלח</button>
                </form>
            }
        </div>
    )
}