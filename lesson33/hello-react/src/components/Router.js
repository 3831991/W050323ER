import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Counter from './Counter';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
        </Routes>
    )
}

export default Router;