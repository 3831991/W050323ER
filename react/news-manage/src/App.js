import React, { useEffect, useState } from 'react';
import './App.css';
import Router from './Router';
import Logout from './user/Logout';
import RouterAuth from './RouterAuth';

export const UserContext = React.createContext();

function App() {
    const [user, setUser] = useState();
    const [isLogged, setIsLogged] = useState();

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
        });
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, isLogged, setIsLogged }}>
            <div className="App">
                <h1>ניהול כתבות</h1>

                <div className="frame">
                    {isLogged && <Logout />}
                    {isLogged ? <Router /> : <RouterAuth />}
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default App;
