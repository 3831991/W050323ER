import { useState } from 'react';
import './Contact.css';
import { JOI_HEBREW } from './joi-hebrew';
import { useNavigate } from "react-router-dom";
import Joi from 'joi';

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const navigate = useNavigate();

    const loginSchema = Joi.object({
        userName: Joi.string().min(3).max(15).required(),
        password: Joi.string().required(),
    });

    function login(ev) {
        ev.preventDefault();
        
        fetch("https://api.shipap.co.il/login", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ userName, password }),
        })
        .then(res => res.json())
        .then(data => {
            if (data.status == 'success') {
                alert("המשתמש התחבר בהצלחה");
                navigate("/users");

            } else {
                alert(data.message);
            }
        });
    }

    const handleError = (ev) => {
        if (ev.target.type === 'text') {
            setUserName(ev.target.value);
        } else if (ev.target.type === 'password') {
            setPassword(ev.target.value);
        }

        const obj = { userName, password };
        const schema = loginSchema.validate(obj, { abortEarly: false, messages: { he: JOI_HEBREW }, errors: { language: 'he' } });
        const errors = {};

        if (schema.error) {
            for (const e of schema.error.details) {
                errors[e.context.key] = e.message;
            }
        }

        setIsValid(!schema.error);
        setErrors(errors);
    }
    
    return (
        <div className="Contact">
            <h2>התחברות</h2>

            {
                <form onSubmit={login}>
                    <label>
                        שם משתמש:
                        <input type="text" value={userName} className={errors.userName ? 'fieldError' : ''} onChange={handleError} />
                    </label>

                    { errors.userName ? <div className='fieldError'>{errors.userName}</div> : '' }

                    <label>
                        סיסמה:
                        <input type="password" value={password} className={errors.password ? 'fieldError' : ''} onChange={handleError} />
                    </label>

                    { errors.password ? <div className='fieldError'>{errors.password}</div> : '' }

                    <button disabled={!isValid}>שלח</button>
                </form>
            }
        </div>
    )
}