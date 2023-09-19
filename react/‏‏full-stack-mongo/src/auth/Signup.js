import { Link, useNavigate } from 'react-router-dom';
import './User.css';
import { useState } from 'react';

export default function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
    });
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const signup = ev => {
        ev.preventDefault();
        
        fetch("http://localhost:4444/signup", {
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
            navigate('/');
        })
        .catch(err => {
            setLoginError(err.message);
        })
        .finally(() => {

        });
    }

    const handleError = ev => {
        const { id, value } = ev.target;

        const obj = {
            ...formData,
            [id]: value,
        };

        setFormData(obj);
    }

    return (
        <>
            <div className="Login smallFrame">
                <h2>הרשמה</h2>

                <form onSubmit={signup}>
                    <label>
                        שם פרטי:
                        <input type="text" id='firstName' value={formData.firstName} onChange={handleError} />
                    </label>

                    <label>
                        שם משפחה:
                        <input type="text" id='lastName' value={formData.lastName} onChange={handleError} />
                    </label>

                    <label>
                        טלפון:
                        <input type="tel" id='phone' value={formData.phone} onChange={handleError} />
                    </label>

                    <label>
                        אימייל:
                        <input type="email" id='email' value={formData.email} onChange={handleError} />
                    </label>

                    <label>
                        סיסמה:
                        <input type="password" id='password' value={formData.password} onChange={handleError} />
                    </label>

                    <button>הרשם</button>

                    { loginError ? <div className='fieldError'>{loginError}</div> : '' }
                </form>
            </div>

            <p className="signup">
                <Link to="/">להתחברות לחץ כאן</Link>
            </p>
        </>
    )
}