import { useParams } from "react-router-dom"

export default function UsersEdit() {
    const { userId } = useParams();

    return (
        <>
            <h3>{userId === 'new' ? 'הוספת' : 'עריכת'} משתמש</h3>
        </>
    )
}