import { Link, useNavigate } from 'react-router-dom';
import './User.css';
import { useContext, useEffect, useState } from 'react';
import { JOI_HEBREW } from '../joi-hebrew';
import Joi from 'joi';
import { UserContext } from '../App';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loginError, setLoginError] = useState('');
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const loginSchema = Joi.object({
        email: Joi.string().min(3).max(10).required(),
        password: Joi.string().required(),
    });
    const { setUser, isLogged, setIsLogged, setLoading, snackbar } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged) {
            navigate('/');
        }
    }, [isLogged, navigate])

    const login = ev => {
        ev.preventDefault();
        setLoading(true);
        
        fetch("https://api.shipap.co.il/login", {
            credentials: 'include',
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.text().then(x => {
                    throw new Error(x);
                });
            }
        })
        .then(data => {
            setUser(data);
            setIsLogged(true);
            snackbar(`${data.fullName} התחבר בהצלחה!`);
        })
        .catch(err => {
            setLoginError(err.message);
            snackbar(err.message);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    const handleError = ev => {
        const { id, value } = ev.target;

        const obj = {
            ...formData,
            [id]: value,
        };

        setFormData(obj);

        const schema = loginSchema.validate(obj, { abortEarly: false, messages: { he: JOI_HEBREW }, errors: { language: 'he' } });
        const errors = {};

        if (schema.error) {
            const error = schema.error.details.find(e => e.context.key === id);

            if (error) {
                errors[id] = error.message;
            }

            setIsValid(false);
        } else {
            setIsValid(true);
        }

        setErrors(errors);
    }

    return (
        <>
            <div className="Login smallFrame">
                <h2>התחברות</h2>
                
                <form onSubmit={login}>
                    <label>
                        שם משתמש:
                        <input type="text" id='email' value={formData.email} className={errors.email ? 'fieldError' : ''} onChange={handleError} />
                    </label>

                    { errors.email ? <div className='fieldError'>{errors.email}</div> : '' }

                    <label>
                        סיסמה:
                        <input type="password" id='password' value={formData.password} className={errors.password ? 'fieldError' : ''} onChange={handleError} />
                    </label>

                    { errors.password ? <div className='fieldError'>{errors.password}</div> : '' }

                    <button disabled={!isValid}>התחבר</button>

                    { loginError ? <div className='fieldError'>{loginError}</div> : '' }
                </form>
            </div>

            <p className="signup">
                <Link to="/signup">להרשמה לחץ כאן</Link>
            </p>
        </>
    )
}