import { useContext } from 'react';
import { UserContext } from '../App';
import './User.css';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const { user, setUser, setIsLogged, setLoading, snackbar } = useContext(UserContext);
    const navigate = useNavigate();

    const logout = () => {
        setLoading(true);

        fetch("https://api.shipap.co.il/logout", {
            credentials: 'include',
        })
        .then(() => {
            setUser();
            setIsLogged(false);
            navigate('/');
            setLoading(false);
            snackbar('המשתמש התנתק בהצלחה');
        });
    }

    return (
        <p className='user'>
            {user.fullName} מחובר! 
            <button className="logout" onClick={logout}>התנתק</button>
        </p>
    )
}