import { Link } from 'react-router-dom';
import './User.css';
import { useState } from 'react';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loginError, setLoginError] = useState('');

    const login = ev => {
        ev.preventDefault();
        
        fetch("http://localhost:4444/login", {
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
                <h2>התחברות</h2>
                
                <form onSubmit={login}>
                    <label>
                        אימייל:
                        <input type="email" id='email' value={formData.email} onChange={handleError} />
                    </label>

                    <label>
                        סיסמה:
                        <input type="password" id='password' value={formData.password} onChange={handleError} />
                    </label>

                    <button>התחבר</button>

                    { loginError ? <div className='fieldError'>{loginError}</div> : '' }
                </form>
            </div>

            <p className="signup">
                <Link to="/signup">להרשמה לחץ כאן</Link>
            </p>
        </>
    )
}