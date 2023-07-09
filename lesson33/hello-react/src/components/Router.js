import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Counter from './Counter';
import Gallery from './Gallery';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>
    )
}

export default Router;