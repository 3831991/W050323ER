import { useContext, useState } from "react"
import { GeneralContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        phone: '',
        email: '',
        firstName: '',
        lastName: '',
    });

    const { snackbar, setLoading } = useContext(GeneralContext);
    const navigate = useNavigate();

    const handelInput = ev => {
        const { name, value } = ev.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const signup = ev => {
        ev.preventDefault();

        if (!formData.userName) {
            snackbar("חסר שם משתמש");
            return;
        }

        if (!formData.password) {
            snackbar("למה שתצליחו להתחבר ללא סיסמה???????????");
            return;
        }
        
        setLoading(true);

        fetch(`http://localhost:420/signup`, {
            credentials: 'include',
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
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
        .then(() => {
            navigate('/');
        })
        .catch(err => {
            snackbar(err.message);
        })
        .finally(() => setLoading(false));
    }

    return (
        <>
        <div className="Login smallFrame">
            <h2>יצירת משתמש</h2>

            <form onSubmit={signup}>
                <label>
                    שם פרטי:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handelInput} />
                </label>

                <label>
                    שם משפחה:
                    <input type="text" name="lastName" value={formData.lastName} onChange={handelInput} />
                </label>

                <label>
                    טלפון:
                    <input type="text" name="phone" value={formData.phone} onChange={handelInput} />
                </label>

                <label>
                    אימייל:
                    <input type="email" name="email" value={formData.email} onChange={handelInput} />
                </label>

                <label>
                    שם משתמש:
                    <input type="text" name="userName" value={formData.userName} onChange={handelInput} />
                </label>

                <label>
                    סיסמה:
                    <input type="password" name="password" value={formData.password} onChange={handelInput} />
                </label>

                <button>הרשם</button>
            </form>
        </div>
        
        <p className="signup">
            <Link to="/">להתחברות לחץ כאן</Link>
        </p>
    </>
    )
}