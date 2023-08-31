import { Route, Routes } from 'react-router-dom';
import Cards from './cards/Cards';
import Login from './user/Login';
import Signup from './user/Signup';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}