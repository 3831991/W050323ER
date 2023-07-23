export default function Logout({ onLogout }) {
    const logout = () => {
        fetch("https://api.shipap.co.il/logout", {
            credentials: 'include',
        })
        .then(() => {
            onLogout();
        });
    }

    return <button className="logout" onClick={logout}>התנתק</button>
}