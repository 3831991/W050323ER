import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';
import Gallery from './components/Gallery';
import Settings from './components/Settings';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}

export default Router;