import React, { useEffect, useState } from 'react';
import './App.css';
import Router from './Router';
import Logout from './user/Logout';
import RouterAuth from './RouterAuth';
import Loader from './components/Loader';

export const UserContext = React.createContext();

function App() {
    const [user, setUser] = useState();
    const [isLogged, setIsLogged] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.shipap.co.il/login", {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                setUser(data.user);
                setIsLogged(true);
            } else {
                setUser();
                setIsLogged(false);
            }

            setLoading(false);
        });
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, isLogged, setIsLogged, setLoading }}>
            {
                isLogged !== undefined &&
                <div className="App">
                    <h1>ניהול כתבות</h1>

                    {isLogged && <Logout />}
                    <div className="frame">
                        {isLogged ? <Router /> : <RouterAuth />}
                    </div>
                </div>
            }

            {loading && <Loader />}
        </UserContext.Provider>
    );
}

export default App;
