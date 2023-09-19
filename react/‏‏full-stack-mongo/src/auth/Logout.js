import { useContext } from 'react';
import './User.css';
import { useNavigate } from 'react-router-dom';
import { GeneralContext } from '../App';

export default function Logout() {
    const navigate = useNavigate();
    const { setLoading, snackbar, setUser, user } = useContext(GeneralContext);

    const logout = () => {
        localStorage.clear('token');
        setUser();
        navigate('/');
        snackbar('המשתמש התנתק בהצלחה');

        // fetch("https://api.shipap.co.il/logout", {
        //     credentials: 'include',
        // })
        // .then(() => {
        //     setUser();
        //     navigate('/');
        //     setLoading(false);
        //     snackbar('המשתמש התנתק בהצלחה');
        // });
    }

    return (
        <p className='user'>
            {user.firstName} מחובר! 
            <button className="logout" onClick={logout}>התנתק</button>
        </p>
    )
}