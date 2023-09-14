import { Route, Routes } from 'react-router-dom';
import Users from './users/Users';
import UsersEdit from './users/UsersEdit';
import Grades from './grades/Grades';
import Dashboard from './dashboard/Dashboard';
import Login from './auth/Login';
import Signup from './auth/Signup';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:userId" element={<UsersEdit />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}