import React, { useState } from 'react';
import './App.css';
import Router from './Router';
import Loader from './components/Loader';
import Snackbar from './components/Snackbar';
import Navbar from './components/Navbar';

export const GeneralContext = React.createContext();

function App() {
    const [loading, setLoading] = useState(false);
    const [snackbarText, setSnackbarText] = useState('');

    const snackbar = text => {
        setSnackbarText(text);
        setTimeout(() => setSnackbarText(''), 3 * 1000);
    }

    return (
        <GeneralContext.Provider value={{ setLoading, snackbar }}>
            {
                <div className="App">
                    <h1>פרוייקט Full Stack - MongoDB</h1>

                    <div className="frame">
                        <Navbar />
                        <Router />
                    </div>
                </div>
            }

            {loading && <Loader />}
            {snackbarText && <Snackbar text={snackbarText} />}
        </GeneralContext.Provider>
    );
}

export default App;
