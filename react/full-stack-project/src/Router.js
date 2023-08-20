import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Users from './users/Users';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    )
}