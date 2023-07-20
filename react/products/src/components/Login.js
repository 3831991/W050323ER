import { useState } from 'react';
import { JOI_HEBREW } from './joi-hebrew';
import Joi from 'joi';

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const loginSchema = Joi.object({
        userName: Joi.string().min(3).max(10).required(),
        password: Joi.string().required(),
    });

    function login(ev) {
        
    }

    const handleError = (ev) => {
        const val = ev.target.value;
        const id = ev.target.id;

        if (id === 'userName') {
            setUserName(val);
        } else if (id === 'password') {
            setPassword(val);
        }

        const obj = { userName, password };
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
        <div className="Login">
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
            </form>
        </div>
    )
}