import './Dashboard.css';
import { useEffect, useState } from 'react';

export default function Dashboard() {
    const [dashboard, setDashboard] = useState();

    const structure = [
        { name: 'averageGrade', title: 'ממוצע ציונים' },
        { name: 'gradesAmount', title: 'כמות ציונים' },
        { name: 'gradesDev', title: 'סטיית התקן' },
        { name: 'maxGrade', title: 'ציון גבוה' },
        { name: 'minGrade', title: 'ציון נמוך' },
        { name: 'usersAmount', title: 'כמות משתמשים' },
        { name: 'usersAmountCurrentYear', title: 'כמות משתמשים מהשנה הנוכחית' },
    ];

    useEffect(() => {
        const url = 'http://localhost:4000/dashboard';

        Promise.all([
            fetch(`${url}/grades/average`).then(res => res.json()),
            fetch(`${url}/grades/amount`).then(res => res.json()),
            fetch(`${url}/grades/dev`).then(res => res.json()),
            fetch(`${url}/grades/max`).then(res => res.json()),
            fetch(`${url}/grades/min`).then(res => res.json()),
            fetch(`${url}/users/amount`).then(res => res.json()),
            fetch(`${url}/users/amount-year`).then(res => res.json()),
            fetch(`${url}/users/last/10`).then(res => res.json()),
        ]).then(data => {
            const [
                averageGrade,
                gradesAmount,
                gradesDev,
                maxGrade,
                minGrade,
                usersAmount,
                usersAmountCurrentYear,
                last10Users
            ] = data;

            setDashboard({
                averageGrade: averageGrade.res,
                gradesAmount: gradesAmount.res,
                gradesDev: gradesDev.res,
                maxGrade: maxGrade.res,
                minGrade: minGrade.res,
                usersAmount: usersAmount.res,
                usersAmountCurrentYear: usersAmountCurrentYear.res,
            })
        });
    }, []);

    return (
        <div className='Dashboard'>
            {
                dashboard &&
                structure.map(s =>
                    <div className='card'>
                        <header>{s.title}</header>
                        <div>{dashboard[s.name]}</div>
                    </div>
                )
            }
        </div>
    )
}
