import { useState } from 'react';
import { JOI_HEBREW } from './joi-hebrew';
import Joi from 'joi';

export default function Signup({ onSignup }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [loginError, setLoginError] = useState('');
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const loginSchema = Joi.object({
        userName: Joi.string().min(3).max(10).required(),
        password: Joi.string().required(),
        email: Joi.string().required(),
        fullName: Joi.string().required(),
    });

    function signup(ev) {
        ev.preventDefault();
        
        fetch("https://api.shipap.co.il/signup", {
            credentials: 'include',
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ userName, password, email, fullName }),
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

    const handleError = (ev) => {
        const val = ev.target.value;
        const id = ev.target.id;
        const obj = { userName, password, email, fullName };

        if (id === 'userName') {
            setUserName(val);
            obj.userName = val;
        } else if (id === 'password') {
            setPassword(val);
            obj.password = val;
        } else if (id === 'fullName') {
            setFullName(val);
            obj.fullName = val;
        } else if (id === 'email') {
            setEmail(val);
            obj.email = val;
        }
        
        const schema = loginSchema.validate(obj, { abortEarly: false, messages: { he: JOI_HEBREW }, errors: { language: 'he' } });
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
        <div className="Login smallFrame">
            <h2>יצירת משתמש</h2>
            
            <form onSubmit={signup}>
                <label>
                    שם מלא:
                    <input type="text" id='fullName' className={errors.fullName ? 'fieldError' : ''} onChange={handleError} />
                </label>

                { errors.fullName ? <div className='fieldError'>{errors.fullName}</div> : '' }

                <label>
                    אימייל:
                    <input type="email" id='email' className={errors.email ? 'fieldError' : ''} onChange={handleError} />
                </label>

                { errors.email ? <div className='fieldError'>{errors.email}</div> : '' }

                <label>
                    שם משתמש:
                    <input type="text" id='userName' className={errors.userName ? 'fieldError' : ''} onChange={handleError} />
                </label>

                { errors.userName ? <div className='fieldError'>{errors.userName}</div> : '' }

                <label>
                    סיסמה:
                    <input type="password" id='password' className={errors.password ? 'fieldError' : ''} onChange={handleError} />
                </label>

                { errors.password ? <div className='fieldError'>{errors.password}</div> : '' }

                <button disabled={!isValid}>הרשם</button>

                { loginError ? <div className='fieldError'>{loginError}</div> : '' }
            </form>
        </div>
    )
}