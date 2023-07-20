import { useState } from 'react';
import { JOI_HEBREW } from './joi-hebrew';
import Joi from 'joi';

export default function Login({ success }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const loginSchema = Joi.object({
        userName: Joi.string().min(3).max(10).required(),
        password: Joi.string().required(),
    });

    function login(ev) {
        ev.preventDefault();
        
        fetch("https://api.shipap.co.il/login", {
            credentials: 'include',
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ userName, password }),
        })
        .then(res => res.json())
        .then(data => {
            if (data.status == 'success') {
                success(data.user);
            } else {
                setLoginError(data.message);
            }
        });
    }

    const handleError = (ev) => {
        const val = ev.target.value;
        const id = ev.target.id;
        const obj = { userName, password };

        if (id === 'userName') {
            setUserName(val);
            obj.userName = val;
        } else if (id === 'password') {
            setPassword(val);
            obj.password = val;
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
            <h2>התחברות</h2>
            
            <form onSubmit={login}>
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

                <button disabled={!isValid}>שלח</button>

                { loginError ? <div className='fieldError'>{loginError}</div> : '' }
            </form>
        </div>
    )
}