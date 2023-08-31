import { Route, Routes } from 'react-router-dom';
import Cards from './cards/Cards';
import Login from './user/Login';
import Signup from './user/Signup';
import FavoriteCards from './cards/FavoriteCards';
import MyCards from './cards/MyCards';
import About from './pages/About';
import UserManage from './admin/UserManage';
import Account from './user/Account';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorite" element={<FavoriteCards />} />
            <Route path="/my-cards" element={<MyCards />} />
            <Route path="/admin" element={<UserManage />} />
        </Routes>
    )
}