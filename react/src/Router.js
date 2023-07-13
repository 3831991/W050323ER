import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';
import Gallery from './components/Gallery';
import Settings from './components/Settings';
import ErrorPage from './components/ErrorPage';
import Users from './components/Users';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default Router;