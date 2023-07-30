import { Route, Routes } from 'react-router-dom';
import Articles from './articles/Articles';
import ArticlesEdit from './articles/ArticlesEdit';
import Login from './user/Login';
import Signup from './user/Signup';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/article/:id" element={<ArticlesEdit />} />
        </Routes>
    )
}