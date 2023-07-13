import { useState } from "react";
import UsersCards from "./UsersCards";
import UsersList from "./UsersList";
import UsersTable from "./UsersTable";

export default function Users() {
    const [display, setDisplay] = useState('table'); // table / list / cards

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <button onClick={() => setDisplay('table')} className={display == 'table' ? 'active' : ''}>טבלה</button>
                <button onClick={() => setDisplay('cards')} className={display == 'cards' ? 'active' : ''}>כרטיסים</button>
                <button onClick={() => setDisplay('list')} className={display == 'list' ? 'active' : ''}>רשימה</button>
            </div>

            {
                (() => {
                    switch (display) {
                        case 'table': return <UsersTable />;
                        case 'cards': return <UsersCards />;
                        case 'list': return <UsersList />;
                    }
                })()
            }
        </>
    );
}