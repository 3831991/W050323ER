import { useState } from 'react';
import { JOI_HEBREW } from './joi-hebrew';
import Joi from 'joi';

export default function Signup({ onSignup }) {
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        email: '',
        fullName: '',
    });

    const [loginError, setLoginError] = useState('');
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const loginSchema = Joi.object({
        userName: Joi.string().min(3).max(10).required(),
        password: Joi.string().min(3).required(),
        email: Joi.string().min(3).required(),
        fullName: Joi.string().min(3).required(),
    });

    const handleInputChange = (ev) => {
        const { id, value } = ev.target;

        const obj = {
            ...formData,
            [id]: value,
        };

        const schema = loginSchema.validate(obj, { abortEarly: false, messages: { he: JOI_HEBREW }, errors: { language: 'he' } });
        const err = { ...errors, [id]: undefined };

        if (schema.error) {
            const error = schema.error.details.find(e => e.context.key === id);

            if (error) {
                err[id] = error.message;
            }

            setIsValid(false);
        } else {
            setIsValid(true);
        }

        setFormData(obj);
        setErrors(err);
    };

    function signup(ev) {
        ev.preventDefault();

        fetch("https://api.shipap.co.il/signup", {
            credentials: 'include',
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                onSignup(data.user);
            } else {
                setLoginError(data.message);
            }
        });
    }

    return (
        <div className="Login smallFrame">
            <h2>יצירת משתמש</h2>

            <form onSubmit={signup}>
                <label>
                    שם מלא:
                    <input type="text" id='fullName' className={errors.fullName ? 'fieldError' : ''} onChange={handleInputChange} />
                </label>

                {errors.fullName ? <div className='fieldError'>{errors.fullName}</div> : ''}

                <label>
                    אימייל:
                    <input type="email" id='email' className={errors.email ? 'fieldError' : ''} onChange={handleInputChange} />
                </label>

                {errors.email ? <div className='fieldError'>{errors.email}</div> : ''}

                <label>
                    שם משתמש:
                    <input type="text" id='userName' className={errors.userName ? 'fieldError' : ''} onChange={handleInputChange} />
                </label>

                {errors.userName ? <div className='fieldError'>{errors.userName}</div> : ''}

                <label>
                    סיסמה:
                    <input type="password" id='password' className={errors.password ? 'fieldError' : ''} onChange={handleInputChange} />
                </label>

                {errors.password ? <div className='fieldError'>{errors.password}</div> : ''}

                <button disabled={!isValid}>הרשם</button>

                {loginError ? <div className='fieldError'>{loginError}</div> : ''}
            </form>
        </div>
    )
}