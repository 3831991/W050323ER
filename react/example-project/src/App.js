import React, { useState } from 'react';
import './App.css';
import Router from './Router';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

export const GeneralContext = React.createContext();

function App() {
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(false);

    return (
        <GeneralContext.Provider value={{ user, setUser, setLoader }}>
            <Navbar />
            <Router />
            {loader && <Loader />}
        </GeneralContext.Provider>
    );
}

export default App;
