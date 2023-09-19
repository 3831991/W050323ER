import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">בית</Link></li>
                <li><Link to="/users">משתמשים</Link></li>
                <li><Link to="/grades">ציונים</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;