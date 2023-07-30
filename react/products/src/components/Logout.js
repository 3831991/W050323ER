import { useContext } from "react";
import { UserContext } from "../App";

export default function Logout() {
    const { user, setUser, setIsLogged } = useContext(UserContext);

    const logout = () => {
        fetch("https://api.shipap.co.il/logout", {
            credentials: 'include',
        })
        .then(() => {
            setUser();
            setIsLogged(false);
        });
    }

    return (
        <p className='user'>
            {user.fullName} מחובר! 
            <button className="logout" onClick={logout}>התנתק</button>
        </p>
    )
}