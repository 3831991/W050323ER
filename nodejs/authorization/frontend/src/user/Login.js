import { Link, useNavigate } from 'react-router-dom';
import './User.css';
import { useContext, useEffect, useState } from 'react';
import { JOI_HEBREW } from '../joi-hebrew';
import Joi from 'joi';
import { GeneralContext } from '../App';

export default function Login() {
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
    });
    const [loginError, setLoginError] = useState('');
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const loginSchema = Joi.object({
        userName: Joi.string().min(3).max(10).required(),
        password: Joi.string().required(),
    });
    const { setUser, isLogged, setIsLogged, setLoading, snackbar } = useContext(GeneralContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged) {
            navigate('/');
        }

        if (sessionStorage.userName) {
            formData.userName = sessionStorage.userName;
            setFormData({...formData});
        }

        sessionStorage.removeItem('userName');
    }, [isLogged, navigate])

    const login = ev => {
        ev.preventDefault();
        setLoading(true);
        
        fetch("http://localhost:420/login", {
            credentials: 'include',
            method: "POST",
            headers: {
                'Content-type': 'application/json',
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
                        <input type="text" id='userName' value={formData.userName} className={errors.userName ? 'fieldError' : ''} onChange={handleError} />
                    </label>

                    { errors.userName ? <div className='fieldError'>{errors.userName}</div> : '' }

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