import { Route, Routes } from 'react-router-dom';
import Articles from './articles/Articles';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Articles />} />
        </Routes>
    )
}