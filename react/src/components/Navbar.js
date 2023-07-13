import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="/">בית</a></li>
                <li><a href="/counter">מונה</a></li>
                <li><a href="/gallery">גלריה</a></li>
                <li><a href="/users">משתמשים</a></li>
                <li><a href="/settings">הגדרות</a></li>
                <li><a href="/contact">צור קשר</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;