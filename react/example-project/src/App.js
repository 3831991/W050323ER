import React, { useState } from 'react';
import './App.css';
import Router from './Router';
import Navbar from './components/Navbar';

const GeneralContext = React.createContext();

function App() {
    const [user, setUser] = useState();


    return (
        <GeneralContext.Provider value={{ user, setUser }}>
            <Navbar />
            <Router />
        </GeneralContext.Provider>
    );
}

export default App;
