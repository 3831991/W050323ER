import './App.css';
import React, { useEffect, useState } from 'react';
import Products from './components/Products';
import Login from './components/Login';
import Logout from './components/Logout';

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
                <h1>ניהול מוצרים</h1>

                <div className="frame">
                    {
                        (isLogged === undefined) ?
                        (<p className='loader'>טוען...</p>) :
                        (isLogged ? <Products /> : <Login />)
                    }
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default App;
