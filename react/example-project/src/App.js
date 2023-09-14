import { useState, createContext, useEffect } from 'react';
import './App.css';
import Router from './Router';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import { RoleTypes } from './config';

export const GeneralContext = createContext();

export default function App() {
    const [searchWord, setSearchWord] = useState('');
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);
    const [roleType, setRoleType] = useState(RoleTypes.none);

    useEffect(() => {
        fetch(`https://api.shipap.co.il/clients/login`, {
            credentials: 'include',
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
            setRoleType(RoleTypes.user);

            if (data.business) {
                setRoleType(RoleTypes.business);
            } else if (data.admin) {
                setRoleType(RoleTypes.admin);
            }
        })
        .catch(err => {
            setRoleType(RoleTypes.none);
        })
        .finally(() => setLoader(false));
    }, []);

    return (
        <GeneralContext.Provider value={{ user, setUser, setLoader, roleType, setRoleType, searchWord, setSearchWord }}>
            <Navbar />
            <Router />
            {loader && <Loader />}
        </GeneralContext.Provider>
    );
}