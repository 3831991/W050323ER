import { useContext, useState } from 'react';
import { JOI_HEBREW } from './joi-hebrew';
import Joi from 'joi';
import Signup from './Signup';
import { UserContext } from '../App';

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [isSignupState, setIsSignup] = useState(false);
    const { setUser, setIsLogged } = useContext(UserContext);

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
            if (data.status === 'success') {
                setUser(data.user);
                setIsLogged(true);
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
        <>
            {
                isSignupState ? 
                <>
                    <Signup onSignup={user => { setUserName(user.userName); setIsSignup(false) }} /> 
                    <p className="signup">
                        <a onClick={() => setIsSignup(false)}>להתחברות לחץ כאן</a>
                    </p>
                </> :
                <>
                    <div className="Login smallFrame">
                        <h2>התחברות</h2>
                        
                        <form onSubmit={login}>
                            <label>
                                שם משתמש:
                                <input type="text" id='userName' value={userName} className={errors.userName ? 'fieldError' : ''} onChange={handleError} />
                            </label>

                            { errors.userName ? <div className='fieldError'>{errors.userName}</div> : '' }

                            <label>
                                סיסמה:
                                <input type="password" id='password' value={password} className={errors.password ? 'fieldError' : ''} onChange={handleError} />
                            </label>

                            { errors.password ? <div className='fieldError'>{errors.password}</div> : '' }

                            <button disabled={!isValid}>התחבר</button>

                            { loginError ? <div className='fieldError'>{loginError}</div> : '' }
                        </form>
                    </div>

                    <p className="signup">
                        <a onClick={() => setIsSignup(true)}>להרשמה לחץ כאן</a>
                    </p>
                </>
            }

            
        </>
    )
}