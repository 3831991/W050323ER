import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';
import Gallery from './components/Gallery';
import Settings from './components/Settings';
import ErrorPage from './components/ErrorPage';
import Users from './components/Users';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Tickets from './components/Tickets';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<Users />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default Router;