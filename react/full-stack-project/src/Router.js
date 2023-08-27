import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Users from './users/Users';
import UsersEdit from './users/UsersEdit';
import Grades from './grades/Grades';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:userId" element={<UsersEdit />} />
            <Route path="/grades" element={<Grades />} />
        </Routes>
    )
}