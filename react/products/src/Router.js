import { Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}