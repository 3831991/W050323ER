import { useContext } from 'react';
import { GeneralContext } from '../App';
import './User.css';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const { user, setUser, setIsLogged, setLoading, snackbar } = useContext(GeneralContext);
    const navigate = useNavigate();

    const logout = () => {
        setLoading(true);

        fetch("http://localhost:420/logout", {
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
            {user.firstName} {user.lastName} מחובר! 
            <button className="logout" onClick={logout}>התנתק</button>
        </p>
    )
}