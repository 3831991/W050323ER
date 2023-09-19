import { createContext, useEffect, useState } from 'react';
import './App.css';
import Router from './Router';
import Loader from './components/Loader';
import Snackbar from './components/Snackbar';
import Navbar from './components/Navbar';
import Logout from './auth/Logout';
import RouterAuth from './RouterAuth';
import { useNavigate } from 'react-router-dom';

export const GeneralContext = createContext();

function App() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [snackbarText, setSnackbarText] = useState('');
    const [user, setUser] = useState();

    const snackbar = text => {
        setSnackbarText(text);
        setTimeout(() => setSnackbarText(''), 3 * 1000);
    }

    useEffect(() => {
        if (localStorage.token) {
            setLoading(true);

            fetch("http://localhost:4444/login", {
                credentials: 'include',
                headers: {
                    'Authorization': localStorage.token
                },
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
                setUser(data);
            })
            .catch(err => {
                snackbar(err);
                navigate('/');
            })
            .finally(() => {
                setLoading(false);
            });
        } else {
            navigate('/');
        }
    }, []);

    return (
        <GeneralContext.Provider value={{ setLoading, snackbar, setUser, user }}>
            {
                <div className="App">
                    <h1>פרוייקט Full Stack - MongoDB</h1>

                    { user ? <Logout /> : '' }
                    <div className="frame">
                        {
                            user ? 
                            <>
                                <Navbar />
                                <Router />
                            </> :
                            <RouterAuth />
                        }
                    </div>
                </div>
            }

            {loading && <Loader />}
            {snackbarText && <Snackbar text={snackbarText} />}
        </GeneralContext.Provider>
    );
}

export default App;
